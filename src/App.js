import "./styles.scss";
import Carousel from "/components/Carousel";

import defaultImg from "./img/image_1.jpg";

const App = () => {
  const items = [
    {
      title: "Curious about cloth",
      description:
        "Designed with the best of what cloth and disposable have to offer so you can do a little good for the planet without compromising the protection you need.",
      mobileSrc: require("./img/image_1_mob.jpg"),
      tabletSrc: require("./img/image_1_mob.jpg"),
      desktopSrc: defaultImg,
      alt: "",
      bannerClass: "carousel-img",
      ctaName: "Start the classes",
      ctaLink: "https://get.pampers.com/en-us/childbirth-education-series"
    },
    {
      title: "Curious about cloth",
      description:
        "Designed with the best of what cloth and disposable have to offer so you can do a little good for the planet without compromising the protection you need.",
      mobileSrc: "",
      tabletSrc: "",
      desktopSrc: require("./img/image_2.png"),
      alt: "",
      bannerClass: "carousel-img",
      ctaName: "Start the classes",
      ctaLink: "https://get.pampers.com/en-us/childbirth-education-series"
    },
    {
      title: "Curious about cloth",
      description:
        "Designed with the best of what cloth and disposable have to offer so you can do a little good for the planet without compromising the protection you need.",
      mobileSrc: "",
      tabletSrc: "",
      desktopSrc: require("./img/image_3.jpg"),
      alt: "",
      bannerClass: "carousel-img",
      ctaName: "Start the classes",
      ctaLink: "https://get.pampers.com/en-us/childbirth-education-series"
    }
  ];
  return (
    <div className="App">
      <Carousel list={items} />
    </div>
  );
};
export default App;
