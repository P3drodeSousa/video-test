import Video from "@/components/video";
import Link from "next/link";

type Props = {
  params: Promise<{ locale: string }>;
};

function pause(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// FIXME CHANGE IT TO 1 MONTH
export const revalidate = 2592000;
export default async function Experience(props: Props) {
  const params = await props.params;

  const { locale } = params;

  return (
    <main>
      <Link prefetch={true} href="/">
        One
      </Link>
      <Video src="https://www.elitebeds.ch/video/6r/elite-matieres.mp4" />
    </main>
  );
}
