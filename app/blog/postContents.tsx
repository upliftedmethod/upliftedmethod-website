import type { ComponentType } from "react";
import WhatIsARXBody from "./_posts/WhatIsARX";
import RedLightTherapyBenefitsBody from "./_posts/RedLightTherapyBenefits";
import ShiftwaveRecoveryBody from "./_posts/ShiftwaveRecovery";
import SupplementsForRecoveryBody from "./_posts/SupplementsForRecovery";
import RedLightTherapyMiamiBody from "./_posts/RedLightTherapyMiami";
import HowDoesRedLightTherapyWorkBody from "./_posts/HowDoesRedLightTherapyWork";
import RedLightVsInfraredBody from "./_posts/RedLightVsInfrared";
import RedLightTherapyAfterWorkoutBody from "./_posts/RedLightTherapyAfterWorkout";
import EfficientStrengthTrainingMiamiBody from "./_posts/EfficientStrengthTrainingMiami";
import TwentyMinuteWorkoutsThatWorkBody from "./_posts/TwentyMinuteWorkoutsThatWork";
import RedLightTherapyMuscleRecoveryBody from "./_posts/RedLightTherapyMuscleRecovery";
import BestSupplementsForRecoveryBody from "./_posts/BestSupplementsForRecovery";
import SafeStrengthTrainingMiamiBody from "./_posts/SafeStrengthTrainingMiami";
import PersonalTrainingForBeginnersMiamiBody from "./_posts/PersonalTrainingForBeginnersMiami";
import TwentyMinuteWorkoutsBusyParentsBody from "./_posts/TwentyMinuteWorkoutsBusyParents";
import RedLightTherapyForAthletesBody from "./_posts/RedLightTherapyForAthletes";
import FitnessOver50MiamiBody from "./_posts/FitnessOver50Miami";
import RecoveryStudioMiamiWhatToLookForBody from "./_posts/RecoveryStudioMiamiWhatToLookFor";
import PhotobiomodulationExplainedBody from "./_posts/PhotobiomodulationExplained";
import PersonalTrainingBusyProfessionalsMiamiBody from "./_posts/PersonalTrainingBusyProfessionalsMiami";
import HowRedLightTherapyWorksBody from "./_posts/HowRedLightTherapyWorks";

/** Maps post slug to the component that renders the post body. */
export const postContents: Record<string, ComponentType> = {
  "what-is-arx-training": WhatIsARXBody,
  "red-light-therapy-benefits-recovery": RedLightTherapyBenefitsBody,
  "shiftwave-recovery": ShiftwaveRecoveryBody,
  "supplements-for-recovery": SupplementsForRecoveryBody,
  "red-light-therapy-miami": RedLightTherapyMiamiBody,
  "how-does-red-light-therapy-work": HowDoesRedLightTherapyWorkBody,
  "red-light-vs-infrared": RedLightVsInfraredBody,
  "red-light-therapy-after-workout": RedLightTherapyAfterWorkoutBody,
  "efficient-strength-training-miami": EfficientStrengthTrainingMiamiBody,
  "20-minute-workouts-that-work": TwentyMinuteWorkoutsThatWorkBody,
  "red-light-therapy-muscle-recovery": RedLightTherapyMuscleRecoveryBody,
  "best-supplements-for-recovery": BestSupplementsForRecoveryBody,
  "safe-strength-training-miami": SafeStrengthTrainingMiamiBody,
  "personal-training-for-beginners-miami": PersonalTrainingForBeginnersMiamiBody,
  "20-minute-workouts-busy-parents": TwentyMinuteWorkoutsBusyParentsBody,
  "red-light-therapy-for-athletes": RedLightTherapyForAthletesBody,
  "fitness-over-50-miami": FitnessOver50MiamiBody,
  "recovery-studio-miami-what-to-look-for": RecoveryStudioMiamiWhatToLookForBody,
  "photobiomodulation-explained": PhotobiomodulationExplainedBody,
  "how-red-light-therapy-works": HowRedLightTherapyWorksBody,
  "personal-training-busy-professionals-miami": PersonalTrainingBusyProfessionalsMiamiBody,
};
