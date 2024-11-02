import Image from "next/image";
import Top from "@/public/Top.png"

export default function Header() {
  return (
    <div className="header">
      <div className="top">
          <Image
            src={Top}
            alt="header"
            height={88}
            width={1440}
          />
        </div>
    </div>
  );
}
