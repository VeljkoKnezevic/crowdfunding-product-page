import { useEffect, useState } from "react";
import "./App.scss";
import { HeaderSmallScreen, HeaderBigScreen } from "./components/Header";
import Intro from "./components/Intro";
import Backing from "./components/Backing";
import About from "./components/About";
import Modal from "./components/Modal";
import Thanks from "./components/Thanks";

function App() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isVisibleThanks, setIsVisibleThanks] = useState(false);
  const [isVisibleHamburger, setIsVisibleHamburger] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 800;

  useEffect(() => {
    const handleResizeWindow = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <>
      <h1>Crowdfunding product page</h1>
      {isVisibleHamburger ? (
        <div id="bg-hamburger" style={{ display: "block" }} />
      ) : (
        ""
      )}
      {isVisibleModal || isVisibleThanks ? (
        <div id="bg-back" style={{ display: "flex" }} />
      ) : (
        ""
      )}

      {windowWidth > breakpoint ? (
        <HeaderBigScreen />
      ) : (
        <HeaderSmallScreen
          setIsVisibleHamburger={setIsVisibleHamburger}
          isVisibleHamburger={isVisibleHamburger}
        />
      )}

      <main className="main">
        {isVisibleModal ? (
          <Modal
            setIsVisibleThanks={setIsVisibleThanks}
            setIsVisibleModal={setIsVisibleModal}
          />
        ) : (
          ""
        )}
        {isVisibleThanks ? (
          <Thanks setIsVisibleThanks={setIsVisibleThanks} />
        ) : (
          ""
        )}
        <Intro setIsVisibleModal={setIsVisibleModal} />
        <Backing />
        <About />
      </main>
    </>
  );
}

export default App;
