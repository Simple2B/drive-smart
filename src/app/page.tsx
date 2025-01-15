import { Header } from "./components/Header";
import { CentralBlock } from "./components/CentralBlock";
import { FeatureBlock } from "./components/FeatureBlock";
import { additionalFeatures, features } from "../constants/constants";
import { JoinBlock } from "./components/JoinBlock";
import { Footer } from "./components/Footer";
import RunningLine from "./components/RunningLine";

export default function Home() {
  return (
    <div>
      <RunningLine />
      <Header />
      <CentralBlock />
      <FeatureBlock
        title="Why choose DriveSmart to hire your car"
        features={features}
      />
      <FeatureBlock
        title="Use DriveSmart to build your wealth"
        features={additionalFeatures}
      />
      <JoinBlock />
      <Footer />
    </div>
  );
}
