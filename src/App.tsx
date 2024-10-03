import { AboutSection } from "./components/AboutSection/AboutSection";
import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";

export const App = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
    </main>
  );
};
