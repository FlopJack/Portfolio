import * as  THREE from "three";
import {Canvas, useLoader} from "@react-three/fiber";
import {useState} from "react";
import lenny from "../Img/lenny.jpg";

export default function Tunnel() {
    const [curve] = useState(() => {
        // Create an empty array to stores the points
        let points = []
        // Define points along Z axis
        for (let i = 0; i < 50; i += 1)
            points.push(new THREE.Vector3(1 - Math.random() * 2, 1 - Math.random() * 2, 10 * (i / 4)))
        return new THREE.CatmullRomCurve3(points)
    })
    const texture = useLoader(THREE.TextureLoader, lenny)
    return (
        <Canvas camera={{position: [0, 0, -2], fov: 65}}>
            <mesh>
                <tubeGeometry args={[curve, 70, 5, 50, false]}/>
                <meshStandardMaterial color={0xd2452b} side={THREE.DoubleSide} metalness={0.4}/>
            </mesh>
        </Canvas>
    )
}
