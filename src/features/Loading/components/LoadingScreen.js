import LoadingOverlay from "./LoadingOverlay";
import {MultipleShadowsSpinner} from "./Loaders";


const LoadingScreen = () => (
  <LoadingOverlay>
    <MultipleShadowsSpinner />
  </LoadingOverlay>
);

export default LoadingScreen;
