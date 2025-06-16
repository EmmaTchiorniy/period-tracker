import { useState } from "react";

export default function About() {
  const [clicks, setClicks] = useState(0);
  
  var special = "meow";
  var futureSpecial = "woof";

  if(clicks % 2 == 1) {
    special = "woof";
    futureSpecial = "meow";
  }

  return (
    <div className="flex justify-center align-middle p-40">
      <div className="flex flex-col items-center w-fit pt-8">
          <h3 className="pb-4">If you would like {futureSpecial}, please click.</h3>
          <button className="p-2 border-2 border-pink-300 bg-pink-200 text-pink-400 hover:bg-pink-300 hover:text-pink-50 w-60 text-1xl" onClick={() => setClicks(clicks + 1)}>
            I'm currently {special}ing.<br/> 
            Also I've been clicked {clicks} times.
          </button>
      </div>
    </div>
  );
}