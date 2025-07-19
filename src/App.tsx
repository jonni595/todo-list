import TitleTasks from "./components/title-tasks";

export default function App() {
  return (
    <div className="max-w-7xl min-h-screen m-auto p-5 border border-l-zinc-800 border-r-zinc-800">
      <TitleTasks count={5} />
    </div>
  );
}
