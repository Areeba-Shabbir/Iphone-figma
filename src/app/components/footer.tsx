import Image from "next/image"
import Foot from "@/public/Foot.png"
export default function Footer (){

    return(
        <div className="Footer">
       <div className="footer-image">
       <Image 
   src={Foot} 
   alt="logo"
   height={504} 
   width={1440} 
  />
       </div>
        </div>
    )
}