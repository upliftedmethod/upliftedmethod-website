# Technical PRD: Project Uplifted v3.0

## 1. Executive Summary

Uplifted v3.0 is a high-performance, luxury-grade exercise software designed for ARX (Adaptive Resistance Exercise) hardware. It replaces a legacy .NET Framework "biohacker" application with a modern, liquid-smooth .NET 8 experience tailored for affluent users aged 45–75 on 24-inch touchscreens.

## 2. Technical Stack

- **Target Framework:** .NET 8.0 (Windows Desktop)
- **UI Framework:** WPF (Windows Presentation Foundation) with MVVM pattern
- **Design Paradigm:** "Quiet Luxury" / Glassmorphism
- **Database:** Firebird SQL (Embedded) - Legacy Schema Preservation
- **Hardware Interface:** Serial (RS-232/USB) communication to SCX11 and Laurel devices

## 3. Hardware Engine Specifications (The "Harvested" Logic)

### A. Force Acquisition (Laurel Load Cell)

**Legacy Implementation:** String-based polling, Regex-heavy parsing, integer-only conversion.

**New Requirement:** High-frequency (60Hz+) asynchronous data stream.

**Protocol:** ASCII strings (e.g., +00124.5).

**Parsing Logic:** Must handle sign (+/-) and decimal precision. Use Span<char> for zero-allocation performance to ensure zero UI lag on the 24" display.

### B. Motion Control (SCX11 Controller)

**Hardware:** 2HP Motor via SCX11 Motion Controller.

**Critical Commands:**
- `vr [decimal]`: Velocity/Speed (Inches per second)
- `ta [decimal]`: Acceleration/Deceleration (Ramping)
- `MA [position]`: Move to Absolute position
- `SIGRUN / run osloop`: Controller engagement heartbeat

**Legacy Flaw:** Blocking 50-try retry loop in ActualSendCommandReadBackVerifiedNumber.

**New Requirement:** An Asynchronous Command Queue. Commands must be non-blocking. Implement a SoftStop() deceleration ramp for luxury "fit and finish."

## 4. Safety Architecture (Non-Negotiable)

Due to the 2HP motor and the "Adaptive" nature of the resistance (machine mirrors user force):

- **Watchdog Loop:** Real-time check: If UserForce < Threshold THEN SoftStop()
- **Safety Interlocks:** Maintain "E-Stop" status monitoring via the SCX11 ALM and ESTOP flags
- **Position Buffers:** Hard-coded Range of Motion (ROM) limits to prevent mechanical over-travel

## 5. UI/UX Requirements (24" Lenovo Tiny-In-One)

**Ergonomics:** No critical controls in top 20% of screen. All workout actions in lower 60% "Reach Zone."

**Visual Language:**
- **Colors:** Background #3D3938, Text #FDE6DB, Accents #D4AF37 / #ED5F2D
- **The "Energy Landscape":** A 60Hz live force graph
- **Ghost Layer:** Matte-grey area chart of Personal Best (PB)
- **Active Layer:** Glowing Amber/Gold line
- **Uplift Aura:** Visual glow filling the delta when current force > PB force
- **The Energy Ring:** Position-based progress ring using the "Uplifted" circular logo

## 6. Data Integration

- **Comparison Engine:** Query legacy ExerciseSet table
- **Ghost Curve:** Deserialize SERIALIZEDDETAILEDDATA (Force vs. Time points) to populate the background "Mountain Range" graph
- **Performance Gallery:** Horizontal scrolling "Set Cards" replacing the legacy spreadsheet/grid

## 7. Next Technical Milestones

1. Hardware Scaffolding: Create IHardwareService to wrap serial comms
2. Telemetry Service: Implement a Reactive (IObservable) stream for Force and Position to drive 60FPS UI updates
3. UI Shell: Finalize the "Uplifted" Theme Dictionary (Styles, Colors, Fonts)

---

## Code Reference: Legacy Implementation

### ParseForce (Laurel Load Cell)

```csharp
public ForceCellReadResult ParseForce(LoadCellReadResult readResult, CancellationToken token)
{
    if (token.IsCancellationRequested)
    {
        return ForceCellReadResult.FromCancellation();
    }
    if (!readResult.WasSuccessful() && readResult.Error.IsHardwareError())
    {
        return ForceCellReadResult.FromReadError(readResult.Error, readResult.Diagnostics);
    }
    if (string.IsNullOrEmpty(readResult.Result))
    {
        return ForceCellReadResult.FromParseError(ParseError.InvalidFormat, "Received an empty reading from Load Cell");
    }
    Match match = Regex.Match(readResult.Result, ".([\+\- ])(\d+)\\..");
    if (!match.Success)
    {
        string text = "Data read off of communications board does not match ForceCell pattern!  Raw Data that was read is: '" + readResult.Result + "'";
        AddLogLine(text, ref _nonRegexReads, 15);
        MarkLogInteresting();
        return ForceCellReadResult.FromParseError(ParseError.InvalidFormat, text);
    }
    string value = match.Groups[1].Value;
    string value2 = match.Groups[2].Value;
    return ForceCellReadResult.FromLoadCellOnlyResult((value == "-") ? int.Parse(value + value2, CultureInfo.InvariantCulture) : int.Parse(value2, CultureInfo.InvariantCulture), "Read this as the sign: " + value + ", This as the number: " + value2);
}
```

### ReadFromSource (Serial Communication)

Shows blocking behavior, retry loops, and timeout handling. Key issue: blocking 50-try retry loop needs to be replaced with async command queue.

---

**Owner:** Eric  
**Status:** PRD Complete, Architecture Review Pending  
**Last Updated:** 2026-03-03
