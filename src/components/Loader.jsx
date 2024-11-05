import { Html } from "@react-three/drei";

export default function Loader() {
  return (
    <Html center>
      <div className="relative w-16 h-16 flex justify-center items-center">
        <div className="w-16 h-16 border-4 rounded-full animate-ping"></div>
        <div className="absolute w-8 h-8 rounded-full animate-pulse"></div>
      </div>
    </Html>
  );
}
