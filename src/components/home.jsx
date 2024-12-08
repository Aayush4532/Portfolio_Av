import React from "react";
import Style from "./home.module.css";
import apple from './images/apple.svg';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import browser from './images/browser.png';
import leetcode from './images/leetcode.png';
import folder from './images/folder.svg';
import notes from './images/notes.png';
import messages from './images/messages.png';
import photos from './images/photos.png';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: "",
    };
  }

  componentDidMount() {
    this.updateTime();
    this.intervalId = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateTime = () => {
    const now = new Date();

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const weekday = weekdays[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    let hour = now.getHours();
    const minute = now.getMinutes().toString().padStart(2, "0");
    const ampm = hour >= 12 ? "pm" : "am";
    hour = hour % 12 || 12;

    const formattedTime = `${weekday} ${day} ${month} ${year} ${hour}:${minute} ${ampm}`;
    this.setState({ currentTime: formattedTime });
  };

  render() {
    return (
      <div>
        <div className={Style.container}>
          <div className={Style.header}>
            <div className={Style["header-left"]}>
              <span className={Style.logo}>
                <img src= {apple} alt="Logo" />
              </span>
              <a href="#finder" className={Style.lefta}>
                Finder
              </a>
              <a href="#projects" className={Style.lefta}>
                Projects
              </a>
              <a href="#contact" className={Style.lefta}>
                Contact
              </a>
            </div>
            <div className={Style["header-right"]}>
              <a href="https://www.linkedin.com/in/karamjeet-sony">
                <img
                  src= {linkedin}
                  alt="LinkedIn"
                  className={Style.iconmy}
                />
              </a>
              <a href="https://leetcode.com/u/Splasher777/">
                <img
                  src= {leetcode}
                  alt="LeetCode"
                  className={Style.iconmy}
                />
              </a>
              <a href="https://github.com/Aayush4532">
                <img
                  src= {github}
                  alt="GitHub"
                  className={Style.iconmy}
                />
              </a>
              <span className={Style.datetime} id="clock">
                {this.state.currentTime}
              </span>
            </div>
          </div>
          <div className={Style.docker}>
            <a href="#notes">
              <img
                src= {notes}
                alt="Notes"
                className={Style.dockerimg}
              />
            </a>
            <a href="#messages">
              <img
                src = { messages }
                alt="Messages"
                className={Style.dockerimg}
              />
            </a>
            <a href="#browser">
              <img
                src= {browser}
                alt="Browser"
                className={Style.dockerimg}
              />
            </a>
            <a href="#photos">
              <img
                src= {photos}
                alt="Photos"
                className={Style.dockerimg}
              />
            </a>
            <div className={Style.divider}></div>
            <a href="#extra">
              <img
                src= {notes}
                alt="Extra Notes"
                className={Style.dockerimg}
              />
            </a>
          </div>
          <div className={Style.left}>
            <div className={Style.folder}>
              <a href="#projects">
                <img src= { folder } alt="Folder" />
              </a>
              <p>Our Projects</p>
              <a href="#resume">
                <img src= { folder } alt="Folder" />
              </a>
              <p>My Resume</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
