import Image from "next/image";
import logo from "../FLCLogo.png";
export default function Navbar() {
  return (
    <div className="flex w-full fixed justify-between px-4 py-2 backdrop-blur-3xl border-b border-slate-800 z-50">
      <Image src={logo} alt="logo" width={200} height={100} />
    </div>
  );
}
