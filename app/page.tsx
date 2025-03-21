import Video from "@/components/video";
import Link from "next/link";

type Props = {
  params: Promise<{ locale: string }>;
};

function pause(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// FIXME CHANGE IT TO 1 MONTH
export const revalidate = 60;
export default async function Home(props: Props) {
  const params = await props.params;

  const { locale } = params;

  return (
    <main>
      <Link prefetch={true} href="/two">
        Two
      </Link>
      <Video src="https://fzege9x9oyyium0b.public.blob.vercel-storage.com/videos/elite-exp-trees-bg-loop-BhcN5IwqA9Ahb4eiIHEjqh7aDAXIuT.mp4" />
      <Video src="https://fzege9x9oyyium0b.public.blob.vercel-storage.com/videos/beds-npSdABXf66bX8mq8xSH1mcn3PPX1e5.mp4" />
      <Video src="https://www.fourseasons.com.cy/Resources/Files/Videos/FourSeasons-Website(2).mp4" />
      <Video src="https://fzege9x9oyyium0b.public.blob.vercel-storage.com/videos/Elite_Website_Loop-low-OFAYA8huQNLmSCOJWKJ97U8U6tvn4t.mp4" />
    </main>
  );
}
