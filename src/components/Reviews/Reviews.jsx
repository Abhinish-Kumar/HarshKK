import  Form  from "../Home/Form/Form";
import "./Review.css";
import ReviewCard from "./ReviewCard/ReviewCard"

function Reviews() {
            return <>
            <div id="imageContainerAbout">
            <img src="https://i.pinimg.com/originals/4f/e4/72/4fe472a2f5bfef4ffaf88bdab31c8acf.jpg" alt="event image" />
            <h2 className="slim-text ">REVIEWS </h2>
            </div>
            <div id="contactAbout">
<p >SPEAK TO US TODAY</p>
<p>TE: +44 (0) 208 606 9636</p>
            </div>
          <div id="reviewCard">
          <ReviewCard color="rgb(250 250 250)" />
            <ReviewCard color="rgb(240 206 209);" />
            <ReviewCard color="rgb(125 170 185);;" />
            <ReviewCard color="rgb(125 170 185);;" />
            <ReviewCard color="rgb(240 206 209);" />
          <ReviewCard color="rgb(250 250 250)" />
            <ReviewCard color="rgb(240 206 209);" />
            <ReviewCard color="rgb(125 170 185);;" />
           
          </div>
           <Form/>
            </>;
          }
          
          export default Reviews;
          