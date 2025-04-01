import { useState } from "react";
import behavioral from "./data/behavioral-en.json";
import QuestionCard from "./QuestionCard";

function App() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [show, setShow] = useState(false);
  const [list] = useState(Object.values(behavioral));
  console.log(list);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
      {(list || [])
        .filter(x => x.a.length > 0)
        .map((x, idx) => (
          <div className="flex flex-col space-y-4 items-center justify-center max-w-2xl">
            <QuestionCard key={idx} {...x} onClick={() => setShow(true)} />
            {show &&
              (x.a || []).map((xx, idx2) => (
                <p key={idx2} className="text-white/80 text-center">
                  {xx}
                </p>
              ))}
          </div>
        ))}

      {/* next button */}
    </div>
  );
}

export default App;
