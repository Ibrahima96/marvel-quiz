import { useEffect, useRef, useState } from "react";

export const Landing = () => {
  const refWolverine = useRef(null);
  const [btn, setBtn] = useState(false);
  console.log(btn);
  useEffect(() => {
    refWolverine.current.classList.add("startingImg");
    setTimeout(() => {
      refWolverine.current.classList.remove("startingImg");
      setBtn(true);
    }, 1000);
  }, []);

  const setLeftImg = () => {
    refWolverine.current.classList.add("leftImg");
  };
  const setRightImg = () => {
    refWolverine.current.classList.add("rightImg");
  };

  const CleanImg = () => {
    if (refWolverine.current.classList.contains("leftImg")) {
       refWolverine.current.classList.remove("leftImg")
    }
    if (refWolverine.current.classList.contains("rightImg")) {
       refWolverine.current.classList.remove("rightImg")
    }
  };

  const displayBtn = btn && (
    <>
      <div className="leftBox">
        <button
          className="btn-welcome"
          onMouseOver={setLeftImg}
          onMouseLeave={CleanImg}
        >
          Inscription
        </button>
      </div>
      <div className="rightBox">
        <button
          className="btn-welcome"
          onMouseOver={setRightImg}
          onMouseLeave={CleanImg}
        >
          Connexion
        </button>
      </div>
    </>
  );

  return (
    <main className="welcomePage" ref={refWolverine}>
      {displayBtn}
    </main>
  );
};
