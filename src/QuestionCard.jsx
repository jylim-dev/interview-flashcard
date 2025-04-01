import React from "react";

const QuestionCard = ({ q, tags, onClick }) => {
  return (
    <div className="backdrop-blur-lg bg-white/10 rounded-xl border border-white/20 shadow-lg p-6 max-w-lg w-full space-y-4">
      <h1 className="text-3xl/10 font-bold text-white text-center pb-4"> {q}</h1>

      <div className="text-white/60 text-sm flex gap-2">
        {(tags || []).map((x, idx) => (
          <p key={idx}>#{x}</p>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="py-2 px-4 bg-white/20 hover:bg-white/30 text-sm transition-colors duration-300 rounded-lg text-white font-normal border border-white/30"
          onClick={onClick}
        >
          View Answer
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
