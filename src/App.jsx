import { useEffect, useState } from "react";
import "./App.scss";

import Bookmark from "../images/icon-bookmark.svg";
import MastercraftLogo from "../images/logo-mastercraft.svg";
import Modal from "./components/Modal";
import Thanks from "./components/Thanks";
import { HeaderSmallScreen, HeaderBigScreen } from "./components/Header";

function App() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isVisibleThanks, setIsVisibleThanks] = useState(false);
  const [isVisibleHamburger, setIsVisibleHamburger] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 800;

  const handleHamburgerClick = (e) => {
    const images = e.target.parentElement.parentElement;
    if (isVisibleHamburger) {
      setIsVisibleHamburger(false);
      e.target.src = "../images/icon-hamburger.svg";
      images.style.position = "static";
    } else {
      setIsVisibleHamburger(true);
      e.target.src = "../images/icon-close-menu.svg";
      images.style.position = "relative";
    }
  };

  useEffect(() => {
    const handleResizeWindow = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <>
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
          handleHamburgerClick={handleHamburgerClick}
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
        <div className="intro">
          <img
            className="intro__image"
            src={MastercraftLogo}
            alt="Mastercraft logo"
          />
          <h2 className="intro__heading">Mastercraft Bamboo Monitor Riser</h2>
          <p className="intro__para">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="intro__button-and-bookmark">
            <button
              onClick={() => setIsVisibleModal(true)}
              type="button"
              className="intro__button"
            >
              Back this project
            </button>
            <div className="intro__bookmark">
              <img src={Bookmark} alt="Bookmark icon" />
              <p className="intro__bookmark__text">Bookmark</p>
            </div>
          </div>
        </div>
        <div className="backing">
          <div className="backing__content">
            <div className="backing__card backing__card--border">
              <p className="backing__card__text--bold">$89,914</p>
              <p className="backing__card__text">of $100,000 backed</p>
            </div>
            <div className="backing__card backing__card--border">
              <p className="backing__card__text--bold">5,007</p>
              <p className="backing__card__text">total backers</p>
            </div>
            <div className="backing__card">
              <p className="backing__card__text--bold">56</p>
              <p className="backing__card__text"> days left</p>
            </div>
          </div>
          <div className="backing__bar">
            <div className="backing__bar--green" />
          </div>
        </div>
        <div className="about">
          <h3 className="about__heading">About this project </h3>
          <p className="about__para">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand. <br /> <br />
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>

          <section className="about__card">
            <div className="about__card__heading-and-pledge">
              <h4 className="about__card__heading">Bamboo Stand</h4>
              <p className="about__card__green">Pledge $25 or more</p>
            </div>
            <p className="about__card__para">
              You get an ergonomic stand made of natural bamboo. You&apos;ve
              helped us launch our promotional campaign, and you&apos;ll be
              added to a special Backer member list.
            </p>
            <div className="about__card__left-and-button">
              <p className="about__card__left">
                <span className="about__card__left--bold">101</span>
                left
              </p>
              <button className="about__card__button" type="button">
                Select Reward
              </button>
            </div>
          </section>
          <section className="about__card">
            <div className="about__card__heading-and-pledge">
              <h4 className="about__card__heading">Black Edition Stand</h4>
              <div className="about__card__green">Pledge $75 or more</div>
            </div>
            <p className="about__card__para">
              You get a Black Special Edition computer stand and a personal
              thank you. You&apos;ll be added to our Backer member list.
              Shipping is included.
            </p>
            <div className="about__card__left-and-button">
              <p className="about__card__left">
                <span className="about__card__left--bold">64</span> left
              </p>
              <button className="about__card__button" type="button">
                Select Reward
              </button>
            </div>
          </section>
          <section className="about__card about__card--disabled">
            <div className="about__card__heading-and-pledge">
              <h4 className="about__card__heading">Mahogany Special Edition</h4>
              <div className="about__card__green"> Pledge $200 or more</div>
            </div>
            <p className="about__card__para">
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You&apos;ll be added to our Backer member
              list. Shipping is included.
            </p>
            <div className="about__card__left-and-button">
              <p className="about__card__left">
                <span className="about__card__left--bold">0</span> left
              </p>
              <button className="about__card__button" type="button" disabled>
                Out of Stock
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
