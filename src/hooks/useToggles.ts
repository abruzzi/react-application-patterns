import { useService } from "./useService";

type Toggle = {
  [key: string]: boolean;
};

const fetchToggles = async () => {
  const req = await fetch(
    "https://gist.githubusercontent.com/abruzzi/3dcb7424d635817b2de9323469dfdca3/raw/f0a24cc6b7e6c401b52165a13b09a83d0ea291dc/feature-toggles.json"
  );

  return await req.json();
};

export const useToggles = () => {
  const { data: toggles } = useService<Toggle>(fetchToggles);
  const isFeatureOn = (feature: string) => {
    if (toggles === null) {
      return false;
    }

    return Boolean(toggles[feature]);
  };

  return { isFeatureOn };
};