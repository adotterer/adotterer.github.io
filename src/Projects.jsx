import Container from "./Container"
import {FaLink, FaGithub} from "react-icons/fa"

const imgArr = ["https://mshippoboe.s3.us-west-1.amazonaws.com/fido_finder.f47bcfe0.png",
   "https://mshippoboe.s3.us-west-1.amazonaws.com/airbnb_og_meta.12a2c027.png" ,
   "https://mshippoboe.s3.us-west-1.amazonaws.com/GG_meta_img.068418f6.png",
    "https://mshippoboe.s3.us-west-1.amazonaws.com/mshipp_oboe_feature_gif.gif"];
                
function FeatureLinkIcons({liveURL, codeURL}) {
    return (
        <div className="feature_link_icons">
            <a target="_" href={liveURL}><FaLink /></a>
            <a target="_" href={codeURL}><FaGithub /></a>
        </div>
        )
}
export default function Projects() {
    return (
        <div className="projects_container">
             <Container>
                <span className="feature grow">
                    {/* Feature image */}
                    <img src={imgArr[3]} key={imgArr[3]} alt={imgArr[3]} />
                    <FeatureLinkIcons liveURL="https://www.matthewshippoboe.com/" codeURL="https://github.com/adotterer/ms_oboe" />
                </span>
                <div className="tech">
                    <span className="badges">
                        <img alt="badge" src="https://img.shields.io/badge/-Python-424242?style=flat-square&logo=Python&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-JavaScript-424242?style=flat-square&logo=JavaScript&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-React-424242?style=flat-square&logo=react&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-Redux-424242?style=flat-square&logo=redux&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-CSS3-424242?style=flat-square&logo=css3&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-HTML5-424242?style=flat-square&logo=html5&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-Flask-424242?style=flat-square&logo=flask&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-PostgreSQL-424242?style=flat-square&logo=postgresql&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-AWS--S3-424242?style=flat-square&logo=amazon-aws&logoColor=00000" />
                    </span>
                </div>
                <div className="description">
                MatthewShippOboe.com : Responsive website to showcase a professional musician. The authenticated user has access to CRUD images, videos, and audio 
                </div>
            </Container>
            <Container>
                <span className="feature">
                    <img src={imgArr[0]} key={imgArr[0]} alt={imgArr[0]} />
                    <FeatureLinkIcons liveURL="https://fidofinderapp.herokuapp.com/" codeURL="https://github.com/adotterer/FidoFinder" />
                </span>
                <div className="tech">
                    <span className="badges">
                        <img alt="badge" src="https://img.shields.io/badge/-JavaScript-424242?style=flat-square&logo=JavaScript&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-React-424242?style=flat-square&logo=react&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-Redux-424242?style=flat-square&logo=redux&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-Node.js-424242?style=flat-square&logo=node.js&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-Express-424242?style=flat-square&logo=express&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-PostgreSQL-424242?style=flat-square&logo=postgresql&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-AWS--S3-424242?style=flat-square&logo=amazon-aws&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-Socket.IO-424242?style=flat-square&logo=socket.io&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-Twilio-424242?style=flat-square&logo=twilio&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-GoogleMapsAPI-424242?style=flat-square&logo=google&logoColor=00000" />
                    </span>
                </div>
                <div className="description">
                    With FidoFider, socializing your pup has never been easier. 
                    First, broadcast anything important by updating your status (ie 'seeking 
                    playdate with small breeds'). Then, chat with other dog owners in your area 
                    until you set up a playdate. Finding the perfect puppy pals is breeze using 
                    Fido Finder.
                </div>
            </Container>
            <Container>
                <span className="feature">
                    <img src={imgArr[1]} key={imgArr[1]} alt={imgArr[1]} />
                    <FeatureLinkIcons liveURL="https://collegebnb1.herokuapp.com/" codeURL="https://github.com/Bryant16/airbnbClone" />

                </span>
                <div className="tech">
                    <span className="badges">
                        <img alt="badge" src="https://img.shields.io/badge/-Python-424242?style=flat-square&logo=Python&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-JavaScript-424242?style=flat-square&logo=JavaScript&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-React-424242?style=flat-square&logo=react&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-Redux-424242?style=flat-square&logo=redux&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-CSS3-424242?style=flat-square&logo=css3&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-HTML5-424242?style=flat-square&logo=html5&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-Flask-424242?style=flat-square&logo=Flask&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-PostgreSQL-424242?style=flat-square&logo=postgresql&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-GoogleMapsAPI-424242?style=flat-square&logo=google&logoColor=00000" />
                    </span>
                </div>
                <div className="description">
                Designed with college students in mind, users can book stays by date near 
                the college or university they are visiting.
                </div>
            </Container>
            <Container>
                <span className="feature">
                    <img src={imgArr[2]} key={imgArr[2]} alt={imgArr[2]} />
                    <FeatureLinkIcons liveURL="https://greengrab.herokuapp.com/" codeURL="https://github.com/adotterer/green-grab" />

                </span>
                <div className="tech">
                    <span className="badges">
                        <img alt="badge" src="https://img.shields.io/badge/-JavaScript-424242?style=flat-square&logo=JavaScript&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-React-424242?style=flat-square&logo=react&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-Redux-424242?style=flat-square&logo=redux&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-CSS3-424242?style=flat-square&logo=css3&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-HTML5-424242?style=flat-square&logo=html5&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-Node.js-424242?style=flat-square&logo=node.js&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-Express-424242?style=flat-square&logo=express&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-PostgreSQL-424242?style=flat-square&logo=postgresql&logoColor=00000" />
                        <img alt="badge" src="https://img.shields.io/badge/-GoogleMapsAPI-424242?style=flat-square&logo=google&logoColor=00000" />
                    </span>
                </div>
                <div className="description">
                This app connects plant-enthusiasts looking for plants, or looking to get rid of them. 
                Anything green goes!— plants, cuttings, fruits, and veggies are shown based on the location you search in.
                </div>
            </Container>
        </div>
    )
}