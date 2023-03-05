export default function About() {
  return (
    <div className="about">
      <h3 className="about__heading">About this project </h3>
      <p className="about__para">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand. <br /> <br />
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>

      <section className="about__card">
        <div className="about__card__heading-and-pledge">
          <h4 className="about__card__heading">Bamboo Stand</h4>
          <p className="about__card__green">Pledge $25 or more</p>
        </div>
        <p className="about__card__para">
          You get an ergonomic stand made of natural bamboo. You&apos;ve helped
          us launch our promotional campaign, and you&apos;ll be added to a
          special Backer member list.
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
          You get a Black Special Edition computer stand and a personal thank
          you. You&apos;ll be added to our Backer member list. Shipping is
          included.
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
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
          personal thank you. You&apos;ll be added to our Backer member list.
          Shipping is included.
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
  );
}
