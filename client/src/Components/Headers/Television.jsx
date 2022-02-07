import "../Style/Television.css";
import television from '../Img/TeleSansScreenTest.png';

import ImageMap from "image-map";
import { useEffect } from "react";
export default function Television() {
  useEffect(() => {
    ImageMap("img[usemap]");
  }, []);
  function turOnOffTV() {
    let screen = document.getElementsByClassName("screen");
    if (screen.item(0).classList.contains("screen-off")) {
      screen[0].classList.remove("screen-off");
      screen[0].classList.add("screen-on");
    } else {
      screen[0].classList.remove("screen-on");
      screen[0].classList.add("screen-off");
    }
  }

  return (
    <div id='divTv'>
     <div className='screen screen-off' ><img src={television} useMap="#imageMap" alt="" id="tv"/> WELCOME</div>
      
      
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
          coords='2323,1910,24'
          shape='circle'
        />
      </map>
     
    </div>
  );
}
