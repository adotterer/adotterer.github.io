import { useState, useEffect, useRef } from "react";
import profilepic from "./atd.jpeg";
import { FaLinkedin, FaGithubAlt, FaEnvelope } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiPython,
  SiSwift,
} from "react-icons/si";
import coffeeImg from "./support-buy-coffee.png";

async function typing(iterable, setFunction) {
  const arr = typeof iterable === "string" ? iterable.split("") : iterable;
  for (let i = 0; i < iterable.length; i++) {
    await new Promise((resolve) => {
      let randomInterval = Math.random() * 100;
      setFunction((ele) => {
        if (typeof ele === "string") {
          return (ele += arr[i]);
        } else {
          throw new Error("cannot process non-string values yet");
        }
      });
      setTimeout(resolve, randomInterval);
    });
  }
}

async function reveal(
  nodelist,
  classToRemove,
  skillArr,
  setSkillDisplay,
  skillRef
) {
  for (let i = 0; i < nodelist.length; i++) {
    await new Promise(async (resolve) => {
      nodelist[i].classList.remove(classToRemove);
      skillRef.current.classList.remove("hidden");
      setTimeout(() => skillRef.current.classList.add("hidden"), 340);
      setSkillDisplay(skillArr[i]);
      setTimeout(resolve, 600);
    });
  }
}

const icons = [
  <SiJavascript
    key="JavaScript"
    className="skill_icon icon_hidden"
    title="JavaScript"
    style={{ color: "goldenrod" }}
  />,
  <SiTypescript
    key="TypeScript"
    className="skill_icon icon_hidden"
    title="TypeScript"
    style={{ color: "#2f74c0" }}
  />,
  <SiSwift
    key="Swift"
    className="skill_icon icon_hidden"
    title="Swift"
    style={{ color: "#F64B2B" }}
  />,
  <SiPython
    key="Python"
    className="skill_icon icon_hidden"
    title="Python"
    style={{ color: "#F7C638" }}
  />,
  <SiHtml5
    key="HTML5"
    className="skill_icon icon_hidden"
    title="HTML5"
    style={{ color: "#DD4B25" }}
  />,
  <SiCss3
    key="CSS3"
    className="skill_icon icon_hidden"
    title="CSS3"
    style={{ color: "#254BDD" }}
  />,
];

export default function Home() {
  const [greeting, setGreeting] = useState("");
  const [skillMessage, setSkillMessage] = useState("");
  const [skillIcons] = useState(icons.map((icon) => icon));
  const [currSkillDisplay, setCurrSkillDisplay] = useState("");
  const skillName = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const skillArr = [
      "JavaScript",
      "TypeScript",
      "Swift",
      "Python",
      "HTML5",
      "CSS3",
    ];
    setGreeting("");
    setSkillMessage("");
    typing("Hello, I'm Andrew!", setGreeting)
      .then(() => typing("I'm happy to assist in:", setSkillMessage))
      .then(() => new Promise((resolve) => setTimeout(resolve, 400)))
      .then(() =>
        reveal(
          document.querySelectorAll(".skill_icon"),
          "icon_hidden",
          skillArr,
          setCurrSkillDisplay,
          skillName
        )
      )
      .then(() => new Promise((resolve) => setTimeout(resolve, 400)))
      .then(() => {
        setCurrSkillDisplay("");
        skillName.current.classList.remove("hidden");
        return typing("Let's connect!", setCurrSkillDisplay);
      })
      .then(() => socialRef.current.classList.remove("hidden"));
  }, []);

  return (
    <>
      <div className="home">
        <div>
          <img src={profilepic} alt="Andrew" className="profile_pic" />
        </div>
        <div>
          <div className="greeting">{greeting}</div>
          <div className="skills">
            {skillMessage}
            <div className="skills_icons">{skillIcons}</div>
            <div className="skill_name hidden" ref={skillName}>
              {currSkillDisplay}
            </div>
          </div>
        </div>
      </div>
      <hr className="hr_gradient" />
      <div className="social">
        <div className="social_icons hidden" ref={socialRef}>
          <a target="_" href="https://www.linkedin.com/in/adotterer/">
            <FaLinkedin />{" "}
          </a>
          <a target="_" href="https://github.com/adotterer">
            <FaGithubAlt />
          </a>
          <a target="_" href="mailto:adotterer@gmail.com">
            <FaEnvelope />
          </a>
          {/* <hr /> */}
          <span className="coffeebreak">
            <a
              href="https://www.buymeacoffee.com/adotterer"
              target="_blank"
              rel="noreferrer"
            >
              <img id="coffee" src={coffeeImg} alt="buymeacoffee" />
            </a>
          </span>
        </div>

        {/* <div>
          <a href="">
            <img src={coffeeImg} alt="buymeacoffee" />
          </a>
        </div> */}
      </div>
    </>
  );
}
