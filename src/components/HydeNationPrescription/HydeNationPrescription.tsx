const HydeNationPrescription = () => {
  return (
    <>
      <div className="container">
        <div className="hnp__flex">
          <div className="hnp__flexA">
            <picture>
              <source
                className="hnp__flexA-image"
                media="(max-width: 1279px)"
                srcSet="./images/hydeNationPrescription__top_m.webp"
                type="image/webp"
              />
              <source
                className="hnp__flexA-image"
                media="(min-width: 1279px)"
                srcSet="./images/hydeNationPrescription__top.webp"
                type="image/webp"
              />
              <img srcSet="" alt=""></img>
            </picture>
          </div>
          <div className="hnp__flexB">
            <div className="hnp__borderOuter">
              <div className="hnp__borderInternal">
                <p className="hnp__heading">Hyde nation prescription</p>
                <hr className="hnp__hr" />
                <hr className="hnp__hr" />
                <div className="hnp__inputsGrid">
                    <label className="hnp__inputH">name</label>
                    <input className="hnp__input" type="text" readOnly></input>


                    <label className="hnp__inputH hnp__inputH_age">age</label>
                    <input
                      className="hnp__input hnp__input_age"
                      type="text"
                      readOnly
                    ></input>

                    <label className="hnp__inputH">address</label>
                    <input className="hnp__input" type="text" readOnly></input>

                    <label className="hnp__inputH">data</label>
                    <input className="hnp__input" type="text" readOnly></input>
                  
                </div>
                <p className="hnp__paragraph">
                  <img
                    className="hnp__imagePx"
                    src="./images/hydeNationPrescription__px.webp"
                    alt=""
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.&nbsp;You&nbsp;do&nbsp;talk&nbsp;about&nbsp;Hyde&nbsp;nation
                </p>
                <p className="hnp__paragraph">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.&nbsp;You&nbsp;DO&nbsp;talk&nbsp;about&nbsp;Hyde&nbsp;nation
                </p>
                <p className="hnp__paragraph">
                  &nbsp;3.&nbsp;You&nbsp;have&nbsp;to&nbsp;earn&nbsp;as&nbsp;much&nbsp;profit&nbsp;as&nbsp;you&nbsp;can
                </p>
                <p className="hnp__paragraph">
                  &nbsp;&nbsp;&nbsp;4.&nbsp;You&nbsp;must&nbsp;not&nbsp;fear.
                </p>
                <p className="hnp__paragraph">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fear&nbsp;is&nbsp;the&nbsp;mind-killer.
                </p>
                <p className="hnp__paragraph">
                  &nbsp;&nbsp;&nbsp;Fear&nbsp;is&nbsp;the&nbsp;little-death&nbsp;that&nbsp;brings&nbsp;total&nbsp;obliteration.
                </p>
                <p className="hnp__paragraph">
                  You&nbsp;will&nbsp;face&nbsp;yours&nbsp;fear.
                </p>
                <p className="hnp__paragraph">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You&nbsp;will&nbsp;permit&nbsp;it&nbsp;to&nbsp;pass&nbsp;over&nbsp;you&nbsp;
                </p>
                <p className="hnp__paragraph">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and&nbsp;through&nbsp;you.
                </p>
                <p className="hnp__paragraph">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;And&nbsp;when&nbsp;it&nbsp;has&nbsp;gone&nbsp;past,&nbsp;you&nbsp;
                </p>
                <p className="hnp__paragraph">
                  &nbsp;&nbsp;&nbsp;will&nbsp;turn&nbsp;the&nbsp;inner&nbsp;eye&nbsp;to&nbsp;see&nbsp;its&nbsp;path.
                </p>
                <p className="hnp__paragraph">
                  &nbsp;&nbsp;Where&nbsp;the&nbsp;risk&nbsp;has&nbsp;gone&nbsp;there
                </p>
                <p className="hnp__paragraph">
                  &nbsp;&nbsp;&nbsp;will&nbsp;be&nbsp;profit.&nbsp;Only&nbsp;profit&nbsp;will&nbsp;remain.
                </p>
                <p className="hnp__paragraph">
                  &nbsp;5.&nbsp;You&nbsp;should&nbsp;take&nbsp;too&nbsp;much&nbsp;risk&nbsp;for&nbsp;jekyll&nbsp;but&nbsp;for&nbsp;
                </p>
                <p className="hnp__paragraph">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hyde&nbsp;is&nbsp;always&nbsp;not&nbsp;enough
                </p>
              </div>
            </div>
          </div>
          <div className="hnp__flexC">
            <picture>
              <source
                className="hnp__flexA-image"
                media="(max-width: 1279px)"
                srcSet="./images/hydeNationPrescription__bottom_m.webp"
                type="image/webp"
              />
              <source
                className="hnp__flexA-image"
                media="(min-width: 1279px)"
                srcSet="./images/hydeNationPrescription__bottom.webp"
                type="image/webp"
              />
              <img srcSet="" alt=""></img>
            </picture>
          </div>
        </div>
      </div>
    </>
  );
};

export default HydeNationPrescription;
