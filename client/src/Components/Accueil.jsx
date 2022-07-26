import Footer from "./Footer/Footer";
import Header from "./Headers/Header";
import Tunnel from "./Tunnel/Tunnel";
import * as  THREE from "three";

import Television from "./Tv/Television";
import { Suspense, useState, useRef, useEffect } from "react"
import Model from '../Backroom'
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import './Accueil.scss';
import {  PointerLockControls } from "@react-three/drei";

//TODO convertir svg en string array
export default function Accueil() {
    const light = useRef()

    //taille de l'écran du user
    const ww = document.documentElement.clientWidth || document.body.clientWidth
    const wh = window.innerHeight
    let [endTunnel, setEndTunnel] = useState(false);

    let percentage = 0;
    let [pl1, setpl1] = useState(0);
    let [pl2, setpl2] = useState(0);
    let [pl3, setpl3] = useState(0);

    const [path] = useState(() => {
        // Create an empty array to stores the points
        let points = [[68.5, 185.5],
        [1, 262.5],
        [270.9, 281.9],
        [345.5, 212.8],
        [178, 155.7],
        [240.3, 72.3],
        [153.4, 0.6],
        [52.6, 53.3],
        [68.5, 185.5]]
        // Define points along Z axis
        for (let i = 0; i < points.length; i += 1)
            //pour chaque point du svg on créer un vector3 , 
            //le y reste à 0 car on veut seulement de la profondeur
            points[i] = new THREE.Vector3(points[i][0], 0, points[i][1]);
        //via nos vector3 la fonction nous créer des courbes
        return new THREE.CatmullRomCurve3(points)
    })
    //on créer une nouvelle camera
    //fov — Camera frustum vertical field of view.
    //aspect — Camera frustum aspect ratio.
    //near — Camera frustum near plane.
    //far — Camera frustum far plane.
    let camera = new THREE.PerspectiveCamera(1, ww / wh, 0.001, 1000);
    camera.position.z = 400;



    function MoveCamera() {
        // This one makes the camera move 
        useFrame(({ clock, camera }) => {
            /*  if ((clock.getElapsedTime() * 150) <= 497.5) {
                  camera.position.z = clock.getElapsedTime() * 150
              } else {
                  setEndTunnel(true)
                  clock.stop();
              }*/
            //on augmente le pourcentage
            percentage += 0.001;
            //p1 c'est la position de la caméra
            //p2 c'est l'angle de vu. le +0.01 c'est pour voir dans la direction qui arrive
            var p1 = path.getPointAt(percentage % 1);
            var p2 = path.getPointAt((percentage + 0.01) % 1);

            camera.position.set(p1.x, p1.y, p1.z);
            camera.lookAt(p2);
            //la position de la light suis p2
            light.current.position.set(p2.x, p2.y, p2.z);


        })
        return null

    }

    return (
        <div id='accueil'>
            {!endTunnel ?

                <Canvas camera={{ position: [0, 5, 12], fov: 75 }} >
             
                     
             
                 
                    <pointLight position={[10, 20, 10]} />
                    <Suspense fallback={null}>
                        <Model />

                    </Suspense>
                </Canvas> :
                <><Television /></>}
        </div>

    );
}
