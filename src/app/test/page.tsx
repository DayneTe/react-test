import Clock from "../components/clock";

export default function Home() {
  return (
    <main>
      <div className="bg-blue-300 w-screen h-screen flex items-end">
        <div className="bg-blue-700 w-screen h-10 flex justify-between">
          <div className="bg-green-600 h-full w-40 rounded-r-2xl">Start</div>
          <div className="bg-blue-400 h-full w-36">
            <Clock />
          </div>
        </div>
      </div>
    </main>
  );
}
