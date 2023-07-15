import MyCard from "@/components/TaskCard/TaskCard";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <MyCard />
    </main>
  );
}
