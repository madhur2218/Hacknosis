import poxArt from "../../assets/poxvirus-menu.png";
import cancerArt from "../../assets/skincancer.jpg";
import burnArt from "../../assets/burnArt.jpg";

const modulesConfig = [
  {
    name: "Skin Burn",
    imgUrl: burnArt,
    navUrl: "/detect/skin-burn",
  },
  {
    name: "Pox Viruses",
    imgUrl: poxArt,
    navUrl: "/detect/pox-viruses",
  },
  {
    name: "Skin Cancer",
    imgUrl: cancerArt,
    navUrl: "/detect/skin-cancer",
  },
];

export default modulesConfig;