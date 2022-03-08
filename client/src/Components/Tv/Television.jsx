import "../Style/Television.scss";

import television from "../Img/teleCalqueBonReduit.png";
import logoReact from "../Img/reactPng.png";
import ImageMap from "image-map";
import { useEffect, useState } from "react";
export default function Television() {
  useEffect(() => {
    ImageMap("img[usemap]");
  }, []);
  const [reactLogo, setReactLogo] = useState(false);
  function turOnOffTV() {
    let screen = document.getElementsByClassName("screen");
    if (screen.item(0).classList.contains("screen-off")) {
      screen[0].classList.remove("screen-off");
      screen[0].classList.add("screen-on");
      setReactLogo(true);
    } else {
      screen[0].classList.remove("screen-on");
      screen[0].classList.add("screen-off");
      setReactLogo(false);
    }
  }

  return (
    <>
      <div id='divTV'>
        <div className='backscreen'>
          <div className='screenWelcome'>
            {reactLogo ? <img src={logoReact} className="imgLogo" width='50%' /> : <></>}
          </div>
          <div className='screen screen-off'></div>
          <img src={television} useMap='#imageMap' alt='' id='tv' />
        </div>
        <map name='imageMap'>
          <area
            target=''
            alt=''
            title=''
            href=''
            onClick={(e) => {
              e.preventDefault();
              turOnOffTV();
            }}
            id='tvButton'
            coords='610,554,24'
            shape='circle'
          />
        </map>
      </div>
      <div>
        <h1 style={{ color: "white" }}>Test couleur</h1>
      </div>
    </>
  );
}
