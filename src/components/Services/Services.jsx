import "./Services.css";
import {Link} from "react-router-dom"
const Services=()=>{
            return <div id="servicesBg" >
                     <h1 data-aos="flip-left">OUR SERVICES</h1>
                     <div id="ServicesList" data-aos="slide-right">
                        <Link to="/services/liveEvents">
                      
                        <div>
                                    <img src="https://infinitymediaproduction.com/uploads/3/4/7/1/34710004/img-0804_1_orig.jpg" alt="" />
                                    <h2>Live evenets</h2>
                        </div>
                        </Link>
                        <div>
                                    <img src="https://technologywire.net/wp-content/uploads/2019/10/Equinox-led-wall-01.jpg" alt="" />
                                    <h2>Led Walls</h2>
                        </div>
                        <div>
                                    <img src="https://th.bing.com/th/id/OIP.KV7-L5GX5gkG2TAmT9OcOgHaE8?rs=1&pid=ImgDetMain" alt="" />
                                    <h2>Event Design</h2>
                        </div>
                        <div>
                                    <img src="https://i.pinimg.com/originals/bb/12/61/bb1261a577231c9df189c749d4178ef7.jpg" alt="" />
                                    <h2>Stages</h2>
                        </div>
                        <div>
                                    <img src="https://th.bing.com/th/id/OIP.YgutNuTVRiPJu3pGy2FJwAHaE7?rs=1&pid=ImgDetMain" alt="" />
                                    <h2>DJ Services</h2>
                        </div>
                        <div>
                                    <img src="https://th.bing.com/th/id/OIP.sWxRxODqtvkK1s7uso-I1AAAAA?rs=1&pid=ImgDetMain" alt="" />
                                    <h2>Video Production</h2>
                        </div>
                     </div>
            </div>
}

export default Services;