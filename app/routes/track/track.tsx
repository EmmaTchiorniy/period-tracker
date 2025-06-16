import type { Route } from "./+types/track";


export default function Track() {
  return (
  <main className="flex items-center justify-center pt-16 pb-4 flex-col">
    <div>
      <h2 className="pb-16 flex justify-center">
        <b>Track</b>
      </h2>
      <div className="pb-16 flex justify-center">
        <h3>Calendar Thing</h3>
      </div>
      <div className="pb-16 flex flex-col justify-center">
        <h6 className="pb-3">Flow Logger</h6>
        <h6 className="pb-3">Symptoms Logger</h6>
        <h6>History Editor</h6>
      </div>
      <div>
        <div className="pb-16">
          <h4 className="pb-6">Phases</h4>
          <div>
            <div className="flex flex-row justify-between pb-10">
              <button className="w-20" onClick={()=> location.href = "phases/menstrual"}>Menstrual Phase</button>
              <button className="w-20" onClick={()=> location.href = "phases/luteal"}>Luteal Phase</button>
            </div>
            <div className="flex flex-row justify-between">
              <button className="w-20" onClick={()=> location.href = "phases/follicular"}>Follicular Phase</button>
              <button className="w-20" onClick={()=> location.href = "phases/ovulation"}>Ovulation Phase</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}