import Logo from "../../images/logo.svg";
import Hamburger from "../../images/icon-hamburger.svg";

const HeaderSmallScreen = function ({
  handleHamburgerClick,
  isVisibleHamburger
}) {
  return (
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
  );
};

const HeaderBigScreen = function () {
  return (
    <header className="header">
      <nav className="header__nav">
        <img src={Logo} alt="Crowdfund logo" />

        <div className="header__nav__elements">
          <p className="header__nav__element">About</p>
          <p className="header__nav__element">Discover</p>
          <p className="header__nav__element">Get Started</p>
        </div>
      </nav>
    </header>
  );
};

export { HeaderSmallScreen, HeaderBigScreen };
