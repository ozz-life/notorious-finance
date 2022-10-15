const Outro = () => {
  return (
    <>
      <div className="container">
        <div className="outro">
          <div className="outro__flexA">
            <img
              className="outro__image"
              src="./images/outro__man.webp"
              alt=""
            />
          </div>
          <div className="outro__flexB">
            <div className="outro__pIcon">
              <img src="./images/icon__twitter.svg" width="32" alt="" />
            </div>
            <div className="outro__pParagraph">Our Twitter feed</div>
          </div>
          <div className="outro__flexC">
            <div className="outro__divRedSquare"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Outro;
