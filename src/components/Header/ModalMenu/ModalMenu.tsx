const ModalMenu = ({ closeModal }: any) => {
  return (
    <>
      <div id="modalMenu">
        <div className="container modalMenu__flex">
          <div className="modalMenu__header">
            <div className="modalMenu__logo">
              <img src="./images/logo.svg" alt="Notorious Finance | Logo" />
            </div>
            <div className="modalMenu__buttons">
              <a id="modalMenu__twitterIcon" href="#">
                <img src="./images/header__twitterIcon.svg" alt="" />
              </a>
              <button
                className="modalMenu__close"
                id="closeModalMenuButton"
                onClick={() => {
                  closeModal(false);
                }}
              >
                <img src="./images/modalMenu__close.svg" alt="" />
              </button>
            </div>
          </div>

            <div className="modalMenu__capIndicators__mobile">
              <div className="modalMenu__capIndicator">
                <span className="modalMenu__capIndicator__red">TVL: </span>
                <span className="modalMenu__capIndicator__white">
                  $309,949,934
                </span>
              </div>
              <div className="modalMenu__capIndicator">
                <span className="modalMenu__capIndicator__red">MCAP: </span>
                <span className="modalMenu__capIndicator__white">
                  $15,949,934
                </span>
              </div>
              <div className="modalMenu__capIndicator">
                <span className="modalMenu__capIndicator__red">PRICE: </span>
                <span className="modalMenu__capIndicator__white">$1,05</span>
              </div>
            </div>

          <menu className="modalMenu__menu">
            <li className="modalMenu__menuLi">
              <a className="modalMenu__menuA" href="#">
                Home
              </a>
            </li>
            <li className="modalMenu__menuLi">
              <a className="modalMenu__menuA" href="#">
                Roadmap
              </a>
            </li>
            <li className="modalMenu__menuLi">
              <a className="modalMenu__menuA" href="#">
                NFT
              </a>
            </li>
          </menu>

          <div className="modalMenu__footer">
            <div className="modalMenu__footerIcons">
              <a href="#">
                <img src="./images/icon__twitter.svg" alt="" />
              </a>
              <a href="#">
                <img src="./images/icon__telegram.svg" alt="" />
              </a>
              <a href="#">
                <img src="./images/icon__facebook.svg" alt="" />
              </a>
            </div>

            <p className="modalMenu__footerCopyright">
            Copyright © Tomb Finance 2022
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalMenu;
