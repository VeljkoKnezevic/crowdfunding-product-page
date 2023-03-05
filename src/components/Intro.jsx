import MastercraftLogo from "../../images/logo-mastercraft.svg";

export default function Intro({ setIsVisibleModal }) {
  const handleBookmarkClick = (e) => {
    const button = e.target.parentElement;
    const image = button.children[0];
    const text = button.children[1];
    image.style.fill = "#147a73";
    text.textContent = "Bookmarked";
    text.style.color = "#147a73";
  };
  return (
    <div className="intro">
      <img
        className="intro__image"
        src={MastercraftLogo}
        alt="Mastercraft logo"
      />
      <h2 className="intro__heading">Mastercraft Bamboo Monitor Riser</h2>
      <p className="intro__para">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="intro__button-and-bookmark">
        <button
          onClick={() => setIsVisibleModal(true)}
          type="button"
          className="intro__button"
        >
          Back this project
        </button>
        <button
          onClick={handleBookmarkClick}
          type="button"
          className="intro__bookmark"
        >
          <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
              <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
            </g>
          </svg>
          <p className="intro__bookmark__text">Bookmark</p>
        </button>
      </div>
    </div>
  );
}
