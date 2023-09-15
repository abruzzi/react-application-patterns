import React, { createContext, ReactNode } from "react";
import { useToggles } from "../hooks/useToggles";

type FeatureToggleContextType = {
  isFeatureOn: (feature: string) => boolean;
};

const FeatureToggleContext = createContext<FeatureToggleContextType>({
  isFeatureOn: () => false,
});

const FeatureToggleProvider = ({ children }: { children: ReactNode }) => {
  const { isFeatureOn } = useToggles();

  return (
    <FeatureToggleContext.Provider value={{ isFeatureOn }}>
      {children}
    </FeatureToggleContext.Provider>
  );
};

export { FeatureToggleContext };

export default FeatureToggleProvider;
