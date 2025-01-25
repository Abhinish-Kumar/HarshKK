import "./Home.css"
import Mlogo from "../Images/Magna_logo.png";
import Video from "../Videos/bgVideo.mp4";
import imageUrl from "./Card/CardImages/R1.jpg";
import imageUrl2 from "./Card/CardImages/R2.jpg";
import imageUrl3 from "./Card/CardImages/R3.jpg";
import imageUrl4 from "./Card/CardImages/R4.jpg";
import imageUrl5 from "./Card/CardImages/R5.jpg";
import Card from "./Card/Card"
import SplitScreen from "./SplitScreen/Split";
import VideoCard from "./VideosCard/VideoCard";
import StarRating from "./StarRating/StarRating";
import Form from "./Form/Form"

function Home() {
  return <>
 
<div id="video">
<img src={Mlogo} alt="videoLogo" data-aos="fade-up"/>
 
  <video src={Video} autoPlay loop muted/>
  </div>
  <div id="imageContainer">
  <Card imageUrl={imageUrl} textOne="DJ" textTwo="PACKAGES"/>
  <Card imageUrl={imageUrl2} textOne="LIGHTING" textTwo="PRODUCTION"/>
  <Card imageUrl={imageUrl3} textOne="BESPOKE" textTwo="STAGING"/>
  <Card imageUrl={imageUrl4} textOne="MEET" textTwo="THE TEAM"/>
  <Card imageUrl={imageUrl5} textOne="DANCE" textTwo="FLOORS"/>
  <Card imageUrl={imageUrl} textOne="BESPOKE" textTwo="BARS"/>
  </div>
 <SplitScreen/>
 <div id="videos">
 <VideoCard/>
 <VideoCard/>
 <VideoCard/>
 <VideoCard/>
 <VideoCard/>
 <VideoCard/>
 </div>

 <div id="callUs">
  <p>CALL US 0452 533 5243</p>
 </div>
 <StarRating/>
 <Form/>
  </>
}

export default Home;
