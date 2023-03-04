import { useState } from "react";
import "./App.scss";
import Logo from "../images/logo.svg";
import Hamburger from "../images/icon-hamburger.svg";
import Bookmark from "../images/icon-bookmark.svg";
import MastercraftLogo from "../images/logo-mastercraft.svg";
import Modal from "./components/Modal";
import Thanks from "./components/Thanks";

function App() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isVisibleThanks, setIsVisibleThanks] = useState(false);
  const [isVisibleHamburger, setIsVisibleHamburger] = useState(false);

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
      <header className="header">
        <div className="header__images">
          <img src={Logo} alt="Crowdfund logo" />
          <button
            onClick={handleHamburgerClick}
            className="header__hamburger__button"
            type="button"
          >
            <img
              className="header__hamburger"
              src={Hamburger}
              alt="Hamburger menu icon"
            />
          </button>
        </div>
        {isVisibleHamburger ? (
          <div className="header__links" style={{ display: "flex" }}>
            <a href="./cangs" className="header__links__link">
              About
            </a>
            <a href="./cangs" className="header__links__link">
              Discover
            </a>
            <a href="./cangs" className="header__links__link">
              Get Started
            </a>
          </div>
        ) : (
          ""
        )}
      </header>
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
            <h4 className="about__card__heading">Bamboo Stand</h4>
            <p className="about__card__green">Pledge $25 or more</p>
            <p className="about__card__para">
              You get an ergonomic stand made of natural bamboo. You&apos;ve
              helped us launch our promotional campaign, and you&apos;ll be
              added to a special Backer member list.
            </p>
            <p className="about__card__left">
              <span className="about__card__left--bold">101</span>
              left
            </p>
            <button className="about__card__button" type="button">
              Select Reward
            </button>
          </section>
          <section className="about__card">
            <h4 className="about__card__heading">Black Edition Stand</h4>
            <div className="about__card__green">Pledge $75 or more</div>
            <p className="about__card__para">
              You get a Black Special Edition computer stand and a personal
              thank you. You&apos;ll be added to our Backer member list.
              Shipping is included.
            </p>
            <p className="about__card__left">
              <span className="about__card__left--bold">64</span> left
            </p>
            <button className="about__card__button" type="button">
              Select Reward
            </button>
          </section>
          <section className="about__card about__card--disabled">
            <h4 className="about__card__heading">Mahogany Special Edition</h4>
            <div className="about__card__green"> Pledge $200 or more</div>
            <p className="about__card__para">
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You&apos;ll be added to our Backer member
              list. Shipping is included.
            </p>
            <p className="about__card__left">
              <span className="about__card__left--bold">0</span> left
            </p>
            <button className="about__card__button" type="button" disabled>
              Out of Stock
            </button>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
