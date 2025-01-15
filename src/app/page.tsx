import { Header } from "./components/Header";
import { CentralBlock } from "./components/CentralBlock";
import { FeatureBlock } from "./components/FeatureBlock";
import { additionalFeatures, features } from "../constants/constants";
import { JoinBlock } from "./components/JoinBlock";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div>
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
