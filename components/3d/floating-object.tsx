"use client";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Mesh } from "three";

/** Twisted torus knot: an abstract nod to folded fabric. */
export function FloatingObject({ simple }: { simple: boolean }) {
  const mesh = useRef<Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  useFrame((_, dt) => {
    const m = mesh.current;
    if (!m) return;
    m.rotation.y += dt * 0.18;
    m.rotation.x += (pointer.current.y * 0.5 - m.rotation.x) * 0.04;
    m.position.x += (pointer.current.x * 0.35 - m.position.x) * 0.04;
  });

  return (
    <Float speed={1.1} floatIntensity={0.6} rotationIntensity={0.2}>
      <mesh ref={mesh}>
        <torusKnotGeometry args={simple ? [1, 0.3, 96, 16, 2, 3] : [1, 0.3, 240, 36, 2, 3]} />
        <meshPhysicalMaterial color="#C82006" roughness={0.3} metalness={0.3} clearcoat={1} clearcoatRoughness={0.25} />
      </mesh>
    </Float>
  );
}
