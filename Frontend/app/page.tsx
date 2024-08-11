import { LatestCollections } from '@/components/LatestCollections';
import { TopCollections } from '@/components/TopCollections';

export default function Home() {
  return (
    <section className="relative h-full w-full flex-col gap-4 pt-8">
      <LatestCollections />
      <TopCollections />
    </section>
  );
}
