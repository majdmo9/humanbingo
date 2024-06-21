"use client";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
//@ts-ignore
import Anime, { anime } from "react-anime";
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
    <div className="flex flex-col items-center justify-between min-h-screen px-24 py-6 bg-blue-400 text-white">
      {loading ? (
        <Lottie options={defaultOptions} height={400} width={400} />
      ) : (
        <>
          <h1 className="text-6xl">
            <span className="font-bold">BINGO</span> لما تربح احكي
          </h1>
          <div className="-mt-96 flex items-center justify-center gap-16 flex-wrap basic-staggering-demo">
            <Anime targets=".basic-staggering-demo .el" opacity={[0, 1]} translateY={270} delay={(_el: any, i: number) => i * 50}>
              {Questions.map((question, i) => (
                <div
                  key={question}
                  className="el flex overflow-hidden bg-white rounded-lg flex-col justify-center items-center gap-6 border-2 border-slate-600 pt-10"
                >
                  <h1 className="text-7xl text-slate-700 font-semibold px-4">{question}</h1>
                  <h3 className="text-6xl bg-slate-600 w-full text-center py-6 font-bold rounded-t-lg" key={i}>
                    {boolArr[i]}
                  </h3>
                </div>
              ))}
            </Anime>
          </div>
          <button onClick={handleShuffle} className="mt-24 bg-blue-600 hover:bg-blue-500 px-10 py-10 w-1/2 rounded-lg text-3xl font-bold">
            {"Shuffle".toUpperCase()}
          </button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
