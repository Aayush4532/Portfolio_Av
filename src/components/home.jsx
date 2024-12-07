import React from "react";
import Style from "./home.module.css";

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
                <img src="assets/apple.svg" alt="Logo" />
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
                  src="assets/linkedin.svg"
                  alt=""
                  className={Style.iconmy}
                />
              </a>
              <a href="https://leetcode.com/u/Splasher777/">
                <img
                  src="assets/leetcode.png"
                  alt="LeetCode"
                  className={Style.iconmy}
                />
              </a>
              <a href="https://github.com/Aayush4532">
                <img
                  src="assets/github.png"
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
                src="assets/notes.png"
                alt="Notes"
                className={Style.dockerimg}
              />
            </a>
            <a href="#messages">
              <img
                src="assets/messages.png"
                alt="Messages"
                className={Style.dockerimg}
              />
            </a>
            <a href="#browser">
              <img
                src="assets/browser.png"
                alt="Browser"
                className={Style.dockerimg}
              />
            </a>
            <a href="#photos">
              <img
                src="assets/photos.png"
                alt="Photos"
                className={Style.dockerimg}
              />
            </a>
            <div className={Style.divider}></div>
            <a href="#extra">
              <img
                src="assets/notes.png"
                alt="Extra Notes"
                className={Style.dockerimg}
              />
            </a>
          </div>
          <div className={Style.left}>
            <div className={Style.folder}>
              <a href="#projects">
                <img src="assets/folder.svg" alt="Folder" />
              </a>
              <p>Our Projects</p>
              <a href="#resume">
                <img src="assets/folder.svg" alt="Folder" />
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
