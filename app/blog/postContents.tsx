import type { ComponentType } from "react";
import WhatIsARXBody from "./_posts/WhatIsARX";
import RedLightTherapyBenefitsBody from "./_posts/RedLightTherapyBenefits";
import ShiftwaveRecoveryBody from "./_posts/ShiftwaveRecovery";
import SupplementsForRecoveryBody from "./_posts/SupplementsForRecovery";
import RedLightTherapyMiamiBody from "./_posts/RedLightTherapyMiami";

/** Maps post slug to the component that renders the post body. */
export const postContents: Record<string, ComponentType> = {
  "what-is-arx-training": WhatIsARXBody,
  "red-light-therapy-benefits-recovery": RedLightTherapyBenefitsBody,
  "shiftwave-recovery": ShiftwaveRecoveryBody,
  "supplements-for-recovery": SupplementsForRecoveryBody,
  "red-light-therapy-miami": RedLightTherapyMiamiBody,
};
