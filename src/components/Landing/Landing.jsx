import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
      refWolverine.current.classList.remove("leftImg");
    }
    if (refWolverine.current.classList.contains("rightImg")) {
      refWolverine.current.classList.remove("rightImg");
    }
  };

  const displayBtn = btn && (
    <>
      <div className="leftBox">
        <Link
          to="/signup"
          className="btn-welcome"
          onMouseOver={setLeftImg}
          onMouseLeave={CleanImg}
        >
          Inscription
        </Link>
      </div>
      <div className="rightBox">
        <Link
          to="/login"
          className="btn-welcome"
          onMouseOver={setRightImg}
          onMouseLeave={CleanImg}
        >
          Connexion
        </Link>
      </div>
    </>
  );

  return (
    <main className="welcomePage" ref={refWolverine}>
      {displayBtn}
    </main>
  );
};
