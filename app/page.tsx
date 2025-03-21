import Link from "next/link";
import { Suspense } from "react";
import { lazy } from "react";

const Video = lazy(() => import("@/components/video"));

type Props = {
  params: Promise<{ locale: string }>;
};

function pause(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// FIXME CHANGE IT TO 1 MONTH
export const revalidate = 2592000;
export default async function Home(props: Props) {
  const videoUrls = [
    "https://fzege9x9oyyium0b.public.blob.vercel-storage.com/videos/elite-exp-trees-bg-loop-BhcN5IwqA9Ahb4eiIHEjqh7aDAXIuT.mp4",
    "https://fzege9x9oyyium0b.public.blob.vercel-storage.com/videos/beds-npSdABXf66bX8mq8xSH1mcn3PPX1e5.mp4",
    "https://www.fourseasons.com.cy/Resources/Files/Videos/FourSeasons-Website(2).mp4",
  ];
  const params = await props.params;

  const { locale } = params;

  return (
    <main>
      <Link prefetch={true} href="/two">
        Two
      </Link>
      <div className="space-y-4">
        {videoUrls.map((src, index) => (
          <Suspense key={`video-${index}`} fallback={<div>Loading ...</div>}>
            <Video src={src} />
          </Suspense>
        ))}
      </div>
    </main>
  );
}
