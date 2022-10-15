const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="footer">
          <div className="footer__gridA">
            <img src="./images/logo.svg" alt="Notorious Finance | Logo" />
          </div>
          <div className="footer__gridB">
            <div className="footer__gridBIcons">
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
            <p className="gridBCopyright">Copyright © Tomb Finance 2022</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
