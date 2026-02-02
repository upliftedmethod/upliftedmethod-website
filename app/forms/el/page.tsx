import type { Metadata } from "next";
import { WaiverForm } from "@/components/WaiverForm";

export const metadata: Metadata = {
  title: "EnergyLounger Waiver",
  description: "Complete the waiver to experience EnergyLounger.",
  robots: { index: false, follow: false },
};

const WAIVER_TEXT =
  "Please do not proceed without consulting your medical provider if you have had any heart condition, recent surgery, or any implanted medical device such as shunts, stents, meshes, venous filters or aneurysm clips. Additional medical contraindications include unstable angina, pacemaker, epilepsy, detached retina, deep vein thrombosis, active cancer, and pregnancy. I grant Uplifted permission to use my likeness in a photograph, video, or other digital media in any and all of its publications.";

export default function EnergyLoungerWaiverPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">Complete the Waiver Below to</h1>
      <h2 className="mt-1 text-2xl font-bold text-primary">Experience EnergyLounger</h2>
      <div className="mt-8">
        <WaiverForm
          title="EnergyLounger"
          waiverText={WAIVER_TEXT}
          formType="energylounger"
        />
      </div>
    </div>
  );
}
