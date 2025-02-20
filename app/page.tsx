import HeroSection from "../components/HeroSection"
import KeyFeaturesSection from "../components/KeyFeaturesSection"

export default function Home() {
  return (
    <section className="">

      <HeroSection/>

      <div className="my-24">
        <h1 className="text-5xl text-center font-bold">Whether you are a Student <span className="text-red-500">|</span> Freelancer <span className="text-red-500">|</span> Business Professional.</h1>
      </div>

      <KeyFeaturesSection />
    </section>
  );
}
