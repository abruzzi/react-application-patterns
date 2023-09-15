import { useEffect, useState } from "react";

type Toggle = {
  [key: string]: boolean;
};
export const useToggles = () => {
  const [toggles, setToggles] = useState<Toggle>({});

  useEffect(() => {
    const fetchToggles = async () => {
      const req = await fetch(
        "https://gist.githubusercontent.com/abruzzi/3dcb7424d635817b2de9323469dfdca3/raw/f0a24cc6b7e6c401b52165a13b09a83d0ea291dc/feature-toggles.json"
      );
      const data = await req.json();

      return setToggles(data);
    };

    fetchToggles();
  }, []);

  const isFeatureOn = (feature: string) => Boolean(toggles[feature]);

  return { isFeatureOn };
};
