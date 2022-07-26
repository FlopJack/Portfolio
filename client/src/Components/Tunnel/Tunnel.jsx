import * as  THREE from "three";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { useState } from "react";
import lenny from "../Img/lenny.jpg";


export default function Tunnel({path}) {
   
    const texture = useLoader(THREE.TextureLoader, lenny);
    console.log(path)
    return (
            <mesh>
        
                <tubeGeometry args={[path, 300, 2, 20, true]} />
                <meshStandardMaterial color={0x000000}side={THREE.DoubleSide}   />
            </mesh>
    )
}
