"use client";
import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { FloatingObject } from "./floating-object";

/** Default export so it can be lazy-loaded with next/dynamic. Pauses rendering when offscreen. */
export default function HeroScene({ simple }: { simple: boolean }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!wrap.current) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(wrap.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className="h-full w-full" aria-hidden>
      <Canvas frameloop={visible ? "always" : "never"} dpr={simple ? 1 : [1, 1.5]} camera={{ position: [0, 0, 4.6], fov: 40 }} gl={{ antialias: !simple, powerPreference: "high-performance" }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} />
        <pointLight position={[-4, -2, 2]} intensity={12} color="#C9B99A" />
        <FloatingObject simple={simple} />
      </Canvas>
    </div>
  );
}
