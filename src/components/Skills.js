import miner1 from "../assets/img/miners/2.png";
import miner2 from "../assets/img/miners/3.png";
import miner3 from "../assets/img/miners/4.png";
import miner4 from "../assets/img/miners/5.png";
import miner5 from "../assets/img/miners/6.png";
import miner6 from "../assets/img/miners/7.png";
import miner7 from "../assets/img/miners/8.png";
import miner8 from "../assets/img/miners/9.png";
import miner9 from "../assets/img/miners/10.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Build your own empire of mining</h2>
              <p>
                NexusMiner is a mining simulator game where you - a Nexus -
                within organizing your space, <br></br> strategical mining
                operation and management of your power capability<br></br> can
                mine cryptocurrencies and earn money.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={miner1} alt="Image" />
                </div>
                <div className="item">
                  <img src={miner2} alt="Image" />
                </div>
                <div className="item">
                  <img src={miner3} alt="Image" />
                </div>
                <div className="item">
                  <img src={miner4} alt="Image" />
                </div>
                <div className="item">
                  <img src={miner5} alt="Image" />
                </div>
                <div className="item">
                  <img src={miner6} alt="Image" />
                </div>
                <div className="item">
                  <img src={miner7} alt="Image" />
                </div>
                <div className="item">
                  <img src={miner8} alt="Image" />
                </div>
                <div className="item">
                  <img src={miner9} alt="Image" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
