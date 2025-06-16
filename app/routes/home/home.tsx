import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="flex items-center justify-center pt-24 pb-4 flex-col">
    <div>
    <h2 className="pb-16 flex justify-center">
        <b>Home</b>
      </h2>
      <div className="pb-16">
        <h3>Period Swiping Thing</h3>
      </div>
      <div className="pb-16">
        <h3>Cycle Overview</h3>
      </div>
      <div>
        <div className="pb-16">
          <h5>Diet</h5>
          <div className="flex flex-row justify-between">
            <button onClick={()=> location.href = "diet/recipes"}>Recipes</button>
            <button onClick={()=> location.href = "diet/dos-donts"}>Dos & Donts</button>
          </div>
        </div>
        <div>
          <h5>Exercise</h5>
          <div className="flex flex-row justify-between">
            <button onClick={()=> location.href = "exercise/workouts"}>Workouts</button>
            <button onClick={()=> location.href = "exercise/dos-donts"}>Dos & Donts</button>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}
