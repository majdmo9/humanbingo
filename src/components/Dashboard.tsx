"use client";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
//@ts-ignore
import Anime from "react-anime";
import Animation from "@humanbingo/animations/3dots.json";

import { Questions, randomizeBooleanArray } from "@humanbingo/utils/constants";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Dashboard = () => {
  const [boolArr, setBoolArr] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleShuffle = () => {
    setLoading(true);
    setTimeout(() => {
      setBoolArr(randomizeBooleanArray());
      setLoading(false);
    }, 3000);
  };
  useEffect(() => {
    handleShuffle();
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen px-24 py-8 bg-blue-500 text-white">
      {loading ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      ) : (
        <>
          <h1 className="text-6xl">
            <span className="font-bold">BINGO</span> لما تربح احكي
          </h1>
          <div className="-mt-[34rem] flex items-center justify-center gap-12 flex-wrap basic-staggering-demo">
            <Anime targets=".basic-staggering-demo .el" opacity={[0, 1]} translateY={270} delay={(_el: any, i: number) => i * 50}>
              {Questions.map((question, i) => (
                <div
                  key={question}
                  className="el flex overflow-hidden bg-white rounded-xl w-full flex-col justify-center items-center gap-6 border-2 border-slate-600 pt-6"
                >
                  <h1 className="text-6xl text-slate-700 font-bold px-4">{question}</h1>
                  <h3 className="text-6xl bg-slate-600 w-full text-center py-4 font-bold rounded-t-sm" key={i}>
                    {boolArr[i]}
                  </h3>
                </div>
              ))}
            </Anime>
          </div>
          <div />
          <button
            onClick={handleShuffle}
            className="absolute left-4 bottom-4 bg-blue-600 hover:bg-blue-400 hover:text-slate-700 px-5 py-16 rounded-[50%] text-3xl font-bold transition-all"
          >
            {"Shuffle".toUpperCase()}
          </button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
