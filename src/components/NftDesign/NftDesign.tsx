const NftDesign = () => {
  return (
    <>
      <div className="container">
        <div className="nftDesign">
          <div className="nftDesign__flexA">
            <img
              className="nftDesign__image"
              src="./images/nftDesign__image.webp"
              alt=""
            />
          </div>

          <div className="nftDesign__flexB">
            <div className="nftDesign__row">
              <div className="nftDesign__text">
                <p className="nftDesign__hWhite">NFT</p>
                <br />
                <p className="nftDesign_hRed">Design</p>
              </div>

              <img
                className="nftDesign__photo"
                src="./images/nftDesign__photo.webp"
                alt=""
              />
            </div>

            <p className="nftDesign__paragraph">
              Each NFT is unique piece of art. Design is created by outstanding
              artist{" "}
              <a className="nftDesign__link" href="#">
                Georgiy Ermakov
              </a>
              . Georgiy has a lot of collaborations with celebrities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftDesign;
