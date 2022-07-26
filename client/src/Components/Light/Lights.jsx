import React from "react";

export default () => {


    return (
        <group>
      <pointLight intensity={1} distance={100} color={0xffffff} />
      <ambientLight color={0xffffff} intensity={0.75} />
    </group>
    );
};