import type { ComponentType } from "react";
import WhatIsARXBody from "./_posts/WhatIsARX";
import RedLightTherapyBenefitsBody from "./_posts/RedLightTherapyBenefits";

/** Maps post slug to the component that renders the post body. */
export const postContents: Record<string, ComponentType> = {
  "what-is-arx-training": WhatIsARXBody,
  "red-light-therapy-benefits-recovery": RedLightTherapyBenefitsBody,
};
