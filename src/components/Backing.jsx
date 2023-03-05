export default function Backing() {
  return (
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
  );
}
