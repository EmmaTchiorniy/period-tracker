import type { Route } from "./+types/account";

export default function Account() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4 flex-col">
      <div>
        <h2 className="pb-16 flex justify-center">
          <b>Account</b>
        </h2>
        <div>
          <div>
            <div className="flex flex-row justify-between pb-10">
              <button onClick={()=> location.href = "account/settings"}>Settings</button>
              <button onClick={()=> location.href = "account/cycle"}>Cycle</button>
            </div>
            <div className="flex flex-row justify-between pb-10">
              <button onClick={()=> location.href = "account/diet"}>Diet</button>
              <button onClick={()=> location.href = "account/fitness"}>Fitness</button>
            </div>
            <div className="flex justify-center">
              <button className="self-center" onClick={()=> location.href = "account/help"}>Help</button>
            </div>
          </div>
        </div>
      </div>
    </main>
    );
}