const Intro = () => {
  return (
    <>
      <section className="intro1">
        <div className="intro1 container">
          <div className="intro1__bgImageWrapper">
            <picture>
              <source
                className="intro1__image"
                media="(max-width: 1279px)"
                srcSet="./images/intro_m.webp"
                type="image/webp"
              />
              <source
                className="intro1__image"
                media="(min-width: 1279px)"
                srcSet="./images/intro.webp"
                type="image/webp"
              />
              <img srcSet="" alt=""></img>
            </picture>
          </div>
          <div className="intro1__flex">
            <p className="intro1__headingH1_white headingH1__white">
              Notorious
            </p>
            <p className="intro1__headingH1_red headingH1__red">finance</p>
            <p className="intro1__paragraph">
              <span className="intro1__paragraph_span-red">
                Notorious.finance
              </span>
              is a revolution of compounding leverage farming.
            </p>
            <p>
              <a className="intro1__button" href="#">
                MINT HERE
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="intro2">
        <div className="container">
          <div className="intro2">
            <div className="intro2__bgImageWrapper">
              <picture>
                <source
                  className="intro2__image"
                  media="(max-width: 1279px)"
                  srcSet="./images/intro2_m.webp"
                  type="image/webp"
                />
                <source
                  className="intro2__image"
                  media="(min-width: 1279px)"
                  srcSet="./images/intro2.webp"
                  type="image/webp"
                />
                <img srcSet="" alt=""></img>
              </picture>
            </div>
            <div className="container">
              <p className="intro2__invertedComma">“</p>
              <p className="intro2__paragraph">
                Our main focus is provide stable, safe and profitable experience
                for those who are brave enough to take maximum risk. Take the
                risk and join the Hyde nation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
