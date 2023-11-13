import Button from "@/components/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-5xl font-bold">Welcome to DevsSi</div>
      <Button>Submit</Button>
    </main>
  );
}
