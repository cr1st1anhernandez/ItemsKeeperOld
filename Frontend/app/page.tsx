import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <section className="grid place-items-center py-8 md:py-10">
      <h1 className="text-4xl md:text-6xl">{siteConfig.name}</h1>
    </section>
  );
}
