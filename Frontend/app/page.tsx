import { LatestCollections } from '@/components/LatestCollections';

export default function Home() {
  return (
    <section className="min-h-[100dvh] w-full py-8 md:py-10">
      <div className="flex h-full w-full">
        <div className="h-screen min-h-screen w-32 bg-neutral-900">Sidebar</div>
        <LatestCollections />
      </div>
    </section>
  );
}
