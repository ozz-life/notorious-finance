const Roadmap = () => {
  return (
    <>
      <section className="roadmap">
        <div className="container">
          <p className="roadmap__headingH1_red">Roadmap</p>
          <p className="roadmap__paragraph">
            The path to the next generation of financial instruments
          </p>

          <div className="roadmap__ul">
            <div className="roadmap__verticalLine"></div>
            <div className="roadmap__bgImageWrapper">
              <picture>
                <source
                  className="roadmap__image"
                  media="(min-width: 1279px)"
                  width="942"
                  height="545"
                  srcSet="./images/roadmap.webp"
                  type="image/webp"
                />
                <img srcSet="" alt=""></img>
              </picture>
            </div>
            <div className="roadmap__li roadmap__li_stage1">
              <img
                className="roadmap__liStyleImage roadmap__liStyleImage_stage1"
                src="./images/roadmap__li.svg"
                alt=""
              /> 
              <div className="roadmap__liText roadmap__liText_stage1">
                <p className="roadmap__liH">Stage 1</p>
                <p className="roadmap__liP">
                  Jekyll farms and Hyde farms v1 development, Design NFT,
                  community development
                </p>
              </div>
            </div>
            <div className="roadmap__li roadmap__li_stage2">
              <img
                className="roadmap__liStyleImage roadmap__liStyleImage_stage2"
                src="./images/roadmap__li.svg"
                alt=""
              />
              <div className="roadmap__liText roadmap__liText_stage2">
                <p className="roadmap__liH">Stage 2</p>
                <p className="roadmap__liP">
                  Liquidity generation event and marketing activities
                </p>
              </div>
            </div>
            <div className="roadmap__li roadmap__li_stage3">
              <img
                className="roadmap__liStyleImage roadmap__liStyleImage_stage3" 
                src="./images/roadmap__li.svg"
                alt=""
              />
              <div className="roadmap__liText roadmap__liText_stage3">
                <p className="roadmap__liH">Stage 3</p>
                <p className="roadmap__liP">
                  Jekyll farm and Hyde farms v1 life, Hyde farms v2 development
                </p>
              </div>
            </div>
            <div className="roadmap__li roadmap__li_stage4">
              <img
                className="roadmap__liStyleImage roadmap__liStyleImage_stage4"
                src="./images/roadmap__li.svg"
                alt=""
              />
              <div className="roadmap__liText roadmap__liText_stage4">
                <p className="roadmap__liH">Stage 4</p>
                <p className="roadmap__liP">Hyde farms v2 development</p>
              </div>
            </div>
            <div className="roadmap__li roadmap__li_stage5">
              <img
                className="roadmap__liStyleImage roadmap__liStyleImage_stage5"
                src="./images/roadmap__li.svg"
                alt=""
              />
              <div className="roadmap__liText roadmap__liText_stage5">
                <p className="roadmap__liH">Stage 5</p>
                <p className="roadmap__liP">
                  Wide ranch of leverage farming protocol support
                </p>
              </div>
            </div>
            <div className="roadmap__li roadmap__li_stage6">
              <img
                className="roadmap__liStyleImage roadmap__liStyleImage_stage6"
                src="./images/roadmap__li.svg"
                alt=""
              />
              <div className="roadmap__liText roadmap__liText_stage6">
                <p className="roadmap__liH">Stage 6</p>
                <p className="roadmap__liP roadmap__liP_stage6">Cross-chain expansion</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
