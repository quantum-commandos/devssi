import Button from "@/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-5xl font-bold">Welcome to DevSi</div>
      <Link href="/docs/Cl_Introduction_TL_LearningResource.pdf">TL_Intro</Link>
      <Button>Submit</Button>
    </main>
  );
}
