import CloseModal from "../../images/icon-close-modal.svg";

export default function Modal({ setIsVisibleModal }) {
  return (
    <div className="popup">
      <div className="popup__heading-container">
        <h2 className="popup__heading">Back this project</h2>
        <button
          className="popup__close"
          type="button"
          onClick={() => setIsVisibleModal(false)}
        >
          <img src={CloseModal} alt="Exit the modal" />
        </button>
      </div>
      <p className="popup__para">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <div className="popup__cards">
        <div className="popup__card popup__card--no-reward">
          <div className="popup__card__input-container">
            <input className="popup__card__input" type="radio" />
            <h3 className="popup__card__heading">Pledge with no reward</h3>
          </div>
          <p className="popup__card__para">
            Choose to support us without a reward if you simply believe in our
            project. As a backer, you will be signed up to receive product
            updates via email.
          </p>
        </div>
        <div className="popup__card">
          <div className="popup__card__input-container">
            <input className="popup__card__input" type="radio" />
            <div className="popup__card__heading-and-pledge">
              <h3 className="popup__card__heading">Bamboo Stand </h3>
              <p className="popup__card__pledge">Pledge $25 or more</p>
            </div>
          </div>
          <p className="popup__card__para">
            You get an ergonomic stand made of natural bamboo. You&apos;ve
            helped us launch our promotional campaign, and you&apos;ll be added
            to a special Backer member list.
          </p>
          <p className="popup__card__left">
            <span className="popup__card__left--bold">101</span> left
          </p>
        </div>

        <div className="popup__card">
          <div className="popup__card__input-container">
            <input className="popup__card__input" type="radio" />
            <div className="popup__card__heading-and-pledge">
              <h3 className="popup__card__heading">Black Edition Stand</h3>
              <p className="popup__card__pledge">Pledge $75 or more</p>
            </div>
          </div>
          <p className="popup__card__para">
            You get a Black Special Edition computer stand and a personal thank
            you. You&apos;ll be added to our Backer member list. Shipping is
            included.
          </p>
          <p className="popup__card__left">
            <span className="popup__card__left--bold">64</span> left
          </p>
        </div>
        <div className="popup__card popup__card--disabled">
          <div className="popup__card__input-container">
            <input className="popup__card__input" type="radio" />
            <div className="popup__card__heading-and-pledge">
              <h3 className="popup__card__heading">Mahogany Special Edition</h3>
              <p className="popup__card__pledge">Pledge $200 or more</p>
            </div>
          </div>
          <p className="popup__card__para">
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You&apos;ll be added to our Backer member list.
            Shipping is included.
          </p>
          <p className="popup__card__left">
            <span className="popup__card__left--bold">0</span> left
          </p>
        </div>
      </div>
    </div>
  );
}
