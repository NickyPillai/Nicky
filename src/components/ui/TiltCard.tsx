"use client";

import Tilt from "react-parallax-tilt";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function TiltCard({ children, className, style }: TiltCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      scale={1.02}
      transitionSpeed={400}
      glareEnable={false}
      className={className}
      style={style}
    >
      {children}
    </Tilt>
  );
}
