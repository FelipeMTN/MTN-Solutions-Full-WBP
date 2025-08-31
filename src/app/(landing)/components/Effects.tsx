import { Column, Background, Particle } from "@once-ui-system/core";

export const Effects = () => {
  return (
    <Column
      position="absolute"
      left="0"
      top="0"
      fillWidth 
      data-solid="color"
      style={{
        height: "100vh",
        marginTop: "-9rem"
      }}>
      <Particle
        opacity={70}
        position="absolute"
        top="0"
        left="0"
        fill
        interactive
        speed={1}
        size="2"
        density={100}
        interactionRadius={10}
        pointerEvents="none"
      />
      <Background
        gradient={{
          display: true,
          x: 100,
          y: 0,
          width: 150,
          height: 100,
          colorStart: "accent-solid-weak",
          colorEnd: "static-transparent",
        }}
      />
      <Background
        position="absolute"
        top="0"
        left="0"
        gradient={{
          display: true,
          x: 50,
          y: -25,
          colorStart: "brand-solid-strong",
          colorEnd: "static-transparent",
        }}
      />
    </Column>
  );
};