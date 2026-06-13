import type { ComponentType } from "react";
import WhatIsARXBody from "./_posts/WhatIsARX";
import ShiftwaveRecoveryBody from "./_posts/ShiftwaveRecovery";
import EfficientStrengthTrainingMiamiBody from "./_posts/EfficientStrengthTrainingMiami";
import TwentyMinuteWorkoutsBusyParentsBody from "./_posts/TwentyMinuteWorkoutsBusyParents";
import PersonalTrainingBusyProfessionalsMiamiBody from "./_posts/PersonalTrainingBusyProfessionalsMiami";
import PersonalTrainingForBeginnersMiamiBody from "./_posts/PersonalTrainingForBeginnersMiami";
import SafeStrengthTrainingMiamiBody from "./_posts/SafeStrengthTrainingMiami";
import FitnessOver50MiamiBody from "./_posts/FitnessOver50Miami";
import RecoveryStudioMiamiWhatToLookForBody from "./_posts/RecoveryStudioMiamiWhatToLookFor";
import HowRedLightTherapyWorksBody from "./_posts/HowRedLightTherapyWorks";
import RedLightTherapyMiamiBody from "./_posts/RedLightTherapyMiami";
import BestSupplementsForRecoveryBody from "./_posts/BestSupplementsForRecovery";

/** Maps post slug to the component that renders the post body. Only the 12 consolidated posts. */
export const postContents: Record<string, ComponentType> = {
  "what-is-arx-training": WhatIsARXBody,
  "shiftwave-recovery": ShiftwaveRecoveryBody,
  "efficient-strength-training-miami": EfficientStrengthTrainingMiamiBody,
  "20-minute-workouts-busy-parents": TwentyMinuteWorkoutsBusyParentsBody,
  "personal-training-busy-professionals-miami": PersonalTrainingBusyProfessionalsMiamiBody,
  "personal-training-for-beginners-miami": PersonalTrainingForBeginnersMiamiBody,
  "safe-strength-training-miami": SafeStrengthTrainingMiamiBody,
  "fitness-over-50-miami": FitnessOver50MiamiBody,
  "recovery-studio-miami-what-to-look-for": RecoveryStudioMiamiWhatToLookForBody,
  "how-red-light-therapy-works": HowRedLightTherapyWorksBody,
  "red-light-therapy-miami": RedLightTherapyMiamiBody,
  "best-supplements-for-recovery": BestSupplementsForRecoveryBody,
};
