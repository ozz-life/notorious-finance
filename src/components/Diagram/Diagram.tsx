const Diagram = () => {
  return (
    <>
      <div className="container">
        <div className="diagram__flex">
          <div className="diagram__flexA">
            <img className="diagram__image" src="./images/diagram.webp" alt="" />
          </div>

          <div className="diagram__flexB">
            <div className="diagram__paragraph">
              The minting event of the NFT will be liquidity generation for NOS
              token. To avoid inflation after presale we decided to generate
              liquidity for NOS token with minting of NFTs.{" "}
            </div>
            <div className="diagram__rates">
              <div className="diagram__rateItem">
                <p className="diagram__rate50">50%</p>
                <p className="diagram__rateSub">Liquidity</p>
              </div>
              <div className="diagram__rateItem">
                <p className="diagram__rate25">25%</p>
                <p className="diagram__rateSub">Development</p>
              </div>
              <div className="diagram__rateItem">
                <p className="diagram__rate15">15%</p>
                <p className="diagram__rateSub">Marketing</p>
              </div>
              <div className="diagram__rateItem">
                <p className="diagram__rate10">10%</p>
                <p className="diagram__rateSub">Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Diagram;
