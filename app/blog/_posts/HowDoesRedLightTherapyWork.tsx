import Link from "next/link";

/**
 * Post: How does red light therapy work? (~1,200–1,500 words)
 * Keywords: how does red light therapy work.
 */
export default function HowDoesRedLightTherapyWorkBody() {
  return (
    <div className="prose-custom">
      <p>
        You’ve seen red light therapy in Miami studios, on social media, maybe at a friend’s gym. But how does red light therapy work? Here’s a straight run-through—no jargon dump, just what’s going on under the hood and what to expect from a session.
      </p>

      <h2>What is red light therapy?</h2>
      <p>
        Red light therapy (RLT) uses specific wavelengths of red and sometimes near-infrared light. You sit or stand in front of LED panels, or lie on a full-body bed. The light hits your skin and penetrates into tissue. You don’t feel heat like a heat lamp. You don’t get a tan. You’re getting photobiomodulation—light that triggers responses in your cells. The idea: give cells the right kind of light, and they work a bit better. Recovery, skin, energy. That’s the pitch.
      </p>

      <h2>How does red light therapy work? The basics</h2>
      <p>
        Light comes in wavelengths. Red light sits around 630–700 nanometers (nm). Near-infrared goes a bit higher, roughly 800–900 nm. Both can penetrate skin—red a few millimeters, near-infrared deeper. When that light hits mitochondria (the parts of your cells that make energy), it can change how they behave. Some research suggests it improves energy production and reduces oxidative stress. The exact mechanisms are still being studied, but the short version: red and near-infrared light seem to give cells a nudge. Your body does the rest.
      </p>

      <p>
        That’s why you’ll see both red and near-infrared in many devices. Red is often used for skin and surface-level tissue. Near-infrared reaches muscle and deeper structures. At our studio in Upper Buena Vista we use the EnergyLounger—a full-body bed with red and near-infrared LEDs. You lie there for about 20 minutes. No movement, no effort. The lights do the work.
      </p>

      <h2>What happens in a session?</h2>
      <p>
        You show up, get a quick intro if it’s your first time, then lie on the bed. You can wear comfortable clothes or use a gown. Eyes closed or with eye protection. The lights turn on. You rest. Some people nap; most just zone out. When the session ends, you’re done. No downtime. You can drive, work, or head to another session the same day—<Link href="/arx" className="font-medium text-primary hover:underline">ARX</Link> or <Link href="/shiftwave" className="font-medium text-primary hover:underline">Shiftwave</Link>—without skipping a beat.
      </p>

      <h2>Why wavelength and dose matter</h2>
      <p>
        Not all red light is the same. Wavelength, intensity, and session length all affect what you get. Cheap panels might use the wrong wavelengths or weak output. Serious gear—like the full-body setups in recovery studios—delivers enough light at the right range to make a difference. Session length matters too. Too short and you might not get a real dose. Too long and you’re not gaining much. A typical protocol is 15–20 minutes, a few times a week. At Uplifted we run about 20 minutes on the EnergyLounger. Enough for meaningful exposure without overdoing it.
      </p>

      <h2>Who uses it and why</h2>
      <p>
        Athletes use it for recovery between sessions. People with sore muscles or joints try it to see if it helps. Others use it for skin or general wellness. You don’t need a doctor’s note. You don’t need a specific condition. If you train hard, sit a lot, or just want to see what it does for you, a few sessions will tell you. How does red light therapy work for you personally? You find out by doing it.
      </p>

      <h2>Red light in a recovery routine</h2>
      <p>
        A lot of our clients in Miami—from Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, Surfside—stack red light with strength work. They do ARX for 20 minutes, then hit the EnergyLounger. Or they come in for red light only. Having both under one roof makes it easy. One trip. No driving from gym to spa to home. If you’re curious how red light fits with your training, check out our <Link href="/red-light-therapy" className="font-medium text-primary hover:underline">red light therapy</Link> page and our <Link href="/services" className="font-medium text-primary hover:underline">services</Link>. We’re at 5026 NE 2nd Ave #303 in Upper Buena Vista. Book a session and see how it feels.
      </p>
    </div>
  );
}
