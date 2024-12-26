import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import data from "../utils/data.json";
import Steps from "@/components/Steps";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import BigCta from "@/components/BigCta";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features
        title={data.sections.features.list[0].title}
        description={data.sections.features.list[0].description}
        video={data.sections.features.list[0].media.video}
        button_text={data.navigation.cta_buttons[2].buttons[0].name}
        button_link={data.navigation.cta_buttons[2].buttons[0].link}
        order={data.sections.features.list[0].layout.imagePosition}
      />
      <Features
        title={data.sections.features.list[1].title}
        description={data.sections.features.list[1].description}
        video={data.sections.features.list[1].media.video}
        button_text={data.navigation.cta_buttons[2].buttons[1].name}
        button_link={data.navigation.cta_buttons[2].buttons[1].link}
        order={data.sections.features.list[1].layout.imagePosition}
      />
      <Features
        title={data.sections.features.list[2].title}
        description={data.sections.features.list[2].description}
        video={data.sections.features.list[2].media.video}
        button_text={data.navigation.cta_buttons[2].buttons[2].name}
        button_link={data.navigation.cta_buttons[2].buttons[2].link}
        order={data.sections.features.list[2].layout.imagePosition}
      />
      <Features
        title={data.sections.features.list[3].title}
        description={data.sections.features.list[3].description}
        video={data.sections.features.list[3].media.video}
        button_text={data.navigation.cta_buttons[2].buttons[3].name}
        button_link={data.navigation.cta_buttons[2].buttons[3].link}
        order={data.sections.features.list[3].layout.imagePosition}
      />
      <Steps />
      <UseCases />
      <Pricing />
      <Testimonials />
      <BigCta />
    </main>
  );
}
