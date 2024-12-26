import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import data from "../utils/data.json";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features
        title={data.content.features[0].title}
        description={data.content.features[0].description}
        video={data.content.features[0].video}
        button_text={data.button_text[2].name}
        button_link={data.button_text[2].link}
        order={data.content.features[0].order}
      />
      <Features
        title={data.content.features[1].title}
        description={data.content.features[1].description}
        video={data.content.features[1].video}
        button_text={data.button_text[3].name}
        button_link={data.button_text[3].link}
        order={data.content.features[1].order}
      />
      <Features
        title={data.content.features[2].title}
        description={data.content.features[2].description}
        video={data.content.features[2].video}
        button_text={data.button_text[4].name}
        button_link={data.button_text[4].link}
        order={data.content.features[2].order}
      />
      <Features
        title={data.content.features[3].title}
        description={data.content.features[3].description}
        video={data.content.features[3].video}
        button_text={data.button_text[5].name}
        button_link={data.button_text[5].link}
        order={data.content.features[3].order}
      />
    </main>
  );
}
