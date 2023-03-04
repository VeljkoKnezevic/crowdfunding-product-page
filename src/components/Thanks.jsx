import Check from "../../images/icon-check.svg";

export default function Thanks({ setIsVisibleThanks }) {
  const handleButton = () => {
    setIsVisibleThanks(false);
  };
  return (
    <div className="thanks">
      <img className="thanks__image" src={Check} alt="Checkmark icon" />
      <h3 className="thanks__heading">Thanks for your support!</h3>
      <p className="thanks__para">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button onClick={handleButton} className="thanks__button" type="button">
        Got it!
      </button>
    </div>
  );
}
