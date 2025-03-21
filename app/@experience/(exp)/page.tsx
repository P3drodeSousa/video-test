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
export default async function Experience(props: Props) {
  const params = await props.params;

  const { locale } = params;

  return (
    <main>
      <Link prefetch={true} href="/two">
        Two
      </Link>
      <Video src="https://fzege9x9oyyium0b.public.blob.vercel-storage.com/videos/elite-exp-trees-bg-loop-BhcN5IwqA9Ahb4eiIHEjqh7aDAXIuT.mp4" />
    </main>
  );
}
