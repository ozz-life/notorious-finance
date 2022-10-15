import ModalMenu from "./ModalMenu/ModalMenu";
import { useState } from "react";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
          {openModal && <ModalMenu closeModal={setOpenModal} />}
          
      <div className="container">
        <div className="header__bgEllipseWrapper">
          <img
            className="header__bgEllipse"
            src="./images/header__bgEllipse1074.svg"
            alt=""
          />
        </div>
        <header className="header">
          <div className="header__logo">
            <img src="./images/logo.svg" alt="Notorious Finance | Logo" />
          </div>

          <menu className="header__menu">
            <li className="header__menuLi">
              <a className="header__menuA" href="#">Home</a>
            </li>
            <li className="header__menuLi">
              <a className="header__menuA" href="#">Roadmap</a>
            </li>
            <li className="header__menuLi">
              <a className="header__menuA" href="#">NFT</a>
            </li>
          </menu>

          {/* Разметка capIndicators обрывается и дублируется далее в capIndicators__mobile, для переключения */}
          <div className="capIndicators">
            <div className="capIndicator">
              <span className="capIndicator__red">TVL: </span>
              <span className="capIndicator__white">$309,949,934</span>
            </div>
            <div className="capIndicator">
              <span className="capIndicator__red">MCAP: </span>
              <span className="capIndicator__white">$15,949,934</span>
            </div>
            <div className="capIndicator">
              <span className="capIndicator__red">PRICE: </span>
              <span className="capIndicator__white">$1,05</span>
            </div>
          </div>

          <div className="header__buttons">
            <a id="header__ourTwitter" href="#">
              <img src="./images/header__ourTwitter.svg" alt="" />
            </a>
            <a id="header__twitterIcon" href="#">
              <img src="./images/header__twitterIcon.svg" alt="" />
            </a>
            <button
              className="header__menuBurger"
              id="openModalMenuButton"
              onClick={() => {
                setOpenModal(true)
              }}
            >
              <img src="./images/header__menuBurger.svg" alt="" />
            </button>
          </div>
        </header>

        {/* Разметка capIndicators обрывается и дублируется здесь в capIndicators__mobile, для переключения */}
        <div className="header">
          <div className="capIndicators__mobile">
            <div className="capIndicator">
              <span className="capIndicator__red">TVL: </span>
              <span className="capIndicator__white">$309,949,934</span>
            </div>
            <div className="capIndicator">
              <span className="capIndicator__red">MCAP: </span>
              <span className="capIndicator__white">$15,949,934</span>
            </div>
            <div className="capIndicator">
              <span className="capIndicator__red">PRICE: </span>
              <span className="capIndicator__white">$1,05</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
