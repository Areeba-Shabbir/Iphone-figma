import Image from "next/image";
import Iphone from "@/public/Iphone.png"
import banners from "@/public/banners.png"
import Category from "@/public/Category.png"
import Products from "@/public/Products.png"
import images from "@/public/images.png"
import Discount from "@/public/Discount.png"
import last from "@/public/last.png"


export default function Home() {
  return (
<div className="page">
  


<div className="home-page">
 
  <div className="content">
    <h4>Pro.Beyond.</h4>
    <h1>IPhone14<b>Pro</b></h1>
    <h6>Created to change everything for the better. For everyone</h6><div>
    <button className="shop">Shop Now</button></div></div>


   
 
 <div className="iphone-image">
  <Image 
   src={Iphone} 
   alt="logo"
   height={632} 
   width={406} 
  />
 </div>
</div>

<div className="banners">
<Image 
   src={banners} 
   alt="logo"
   height={600} 
   width={1440} 
  />
</div>

<div className="category">
<Image 
   src={Category} 
   alt="logo"
   height={352} 
   width={1440} 
  />
</div>

<div className="products">
<Image 
   src={Products} 
   alt="logo"
   height={1056} 
   width={1440} 
  />
</div>

<div className="images">
<Image 
   src={images} 
   alt="logo"
   height={640} 
   width={1440} 
  />
</div>


<div>
<Image 
   src={Discount} 
   alt="logo"
   height={656} 
   width={1440} 
  />
</div>

<div>
<Image 
   src={last} 
   alt="logo"
   height={448} 
   width={1440} 
  />
</div>












</div>

  );
}



