import { FeatureFlag } from '../types/featureFlag';

let featuresFlags: FeatureFlag;

export function setFeaturesFlags(newFeatureFlags?: FeatureFlag) {
  if (newFeatureFlags) {
    featuresFlags = { ...featuresFlags, ...newFeatureFlags };
  }
}

export function getFeaturesFlags(flagName: keyof FeatureFlag) {
  return featuresFlags[flagName];
}
