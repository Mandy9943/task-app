import { MetaHead } from "@/components/MetaHead/MetaHead";
import InspirationalTitle from "@/components/Title/Title";
import dynamic from "next/dynamic";
const TaskCard = dynamic(() => import("@/components/TaskCard/TaskCard"), {
  ssr: false,
});
export default function Home() {
  return (
    <>
      <MetaHead />
      <main
        className={`flex min-h-screen flex-col items-center px-4 py-10 gap-8`}
      >
        <InspirationalTitle />
        <TaskCard />
      </main>
    </>
  );
}
