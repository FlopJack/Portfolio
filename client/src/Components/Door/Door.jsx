import door from "../Img/door.png";
import "./style.scss";
import {Canvas} from "@react-three/fiber";
import {BackSide} from "three";

export default function Door() {
  return (
      <>
    <div className='tunnel'>
      <div className='right1'>
        <p>Un texte qui part a droite</p>
      </div>
      <div className='right2'>
        <p>Un texte qui part a droite</p>
      </div>
      <div className='right3'>
        <p>Un texte qui part a droite</p>
      </div>
      <div className='right4'>
        <p>Un texte qui part a droite</p>
      </div>
      <div className='right5'>
        <p>Un texte qui part a droite</p>
      </div>
      <div>
        <p className='left'>Un texte qui part a droite</p>
      </div>
    </div>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <tubeGeometry />
          <meshStandardMaterial side={BackSide}   />
        </mesh>
      </Canvas>
      </>
  );
}
