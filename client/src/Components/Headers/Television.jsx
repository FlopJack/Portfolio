import "./Television.css";
import television from "../Img/teleCalqueBonReduit.png";
import ImageMap from "image-map";
export default function Television() {
  ImageMap("img[usemap]");
  return (
    <div>
      <img useMap='#imageMap' id='tv' src={television} alt='Logo' />
      <map name='imageMap'>
        <area
          target=''
          alt=''
          title=''
          href=''
          onClick={(e) => {
            e.preventDefault();
            console.log("HEYOH");
          }}
          id='tvButton'
          coords='613,555,24'
          shape='circle'
        />
      </map>
    </div>
  );
}
