const Whyis = () => {
  return (
    <>
      <div className="whyIs">
        <div className="whyIs__container">
          <p className="whyIs__headingH1_white">Why is</p>
          <p className="whyIs__headingH1_red">Notorious Finance?</p>
          <div className="whyIs__flex">
            <div className="whyIs__flexA">
              <img
                className="whyIs__flexA-image"
                src="./images/whyIs__blue.webp"
                alt=""
              />
            </div>
            <div className="whyIs__flexB">
              <p className="whyIs__h2-blue">Jekyll farm</p>
              <p className="whyIs__paragraph whyIs__paragraph_B">
                <div className="container">
                  Jekyll farm allows liquidity providers to earn boosted NOS
                </div>
              </p>
            </div>
            <div className="whyIs__flexC">
              <p className="whyIs__h2-red">Hyde farm</p>
              <div className="container">
                <p className="whyIs__paragraph whyIs__paragraph_C">
                  Only Hyde nation will gain access to protected leverage
                  farming opportunities. Stake your NFT and proof your hyde
                  nature. Hyde farms use leverage protocol{" "}
                  <a className="whyIs__link" href="https://tarot.to/">
                    Tarot.to
                  </a>{" "}
                  to farm with the highest leverage and protecting users from
                  liquidation. When position coming to liquidation our smart
                  contract will deleverage the position to the optimal leverage
                  to continue farming{" "}
                </p>
              </div>
            </div>
            <div className="whyIs__flexD">
              <img
                className="whyIs__flexD-image"
                src="./images/whyIs__red.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whyis;
