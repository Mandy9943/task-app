import dynamic from "next/dynamic";
const TaskCard = dynamic(() => import("@/components/TaskCard/TaskCard"), {
  ssr: false,
});
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-4`}
    >
      <TaskCard />
    </main>
  );
}
