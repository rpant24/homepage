import React, {Component} from 'react';
import './App.css';
import Particles from "./Particles";

const styles = {
  root: {
    fontFamily: "sans-serif",
    textAlign: "center",
    background: "#222",
    display: "flex",
    zIndex: "0",
    position: "absolute",
    width: "100vw",
    height: "100vh"
  }
};

class App extends Component {

  renderWelcomeMsg = (currentTime = new Date()) => {
    const currentHour = currentTime.getHours()
    const splitAfternoon = 12; // 24hr time to split the afternoon
    const splitEvening = 17; // 24hr time to split the evening

    if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
      // Between 12 PM and 5PM
      return 'afternoon';
    } else if (currentHour >= splitEvening) {
      // Between 5PM and Midnight
      return 'evening';
    }
    // Between dawn and noon
    return 'morning';
  };

  // state contains current date
  state = {
    date: new Date(),
    dayPortion: this.renderWelcomeMsg()
  };

  clockUpdate() { // function to update the clock time.
    setInterval(() => {
      this.setState({ date: new Date(), dayPortion: this.renderWelcomeMsg() }) //updates async without updating entire DOM
      // this command will run indefinitely, on a 1000ms (1s) frequency.
    }, 1000);
  };

  render() {
    let date = this.state.date;
    return (
      <div className="App" >
        <div style={styles.root}>
          <Particles />
        </div>
        <div className="welcomeHeader">
          <div className="welcomeTime">Good {this.state.dayPortion}, Radhika.</div>
          <div className="dateLabel">{date.toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute: '2-digit'
          })} - {date.toDateString()}</div>
        </div>
        <div className="linksParentContainer">
          <div className="work linkContainer">
            <div className="groupHeader workHeader">
              <div className="headerText orangeHeader">
                Work.
                        </div>
              <hr className="orangeLine"></hr>
            </div>
            <ul className="links">
              <li><a href="https://classroom.google.com/" target="_blank" rel="noopener noreferrer">Google Classroom</a></li>
              <li><a href="https://sis-jeffersonco.chalkableinformationnow.com/InformationNow/Login.aspx?ReturnUrl=%2fInformationNow%2fParentPortal%2fSti.Home.UI.Web%2fStudent%2fGrades.aspx" target="_blank" rel="noopener noreferrer">iNow</a></li>
              <li><a href="https://rc.uab.edu/pun/sys/dashboard" target="_blank" rel="noopener noreferrer">Cheaha</a></li>
              <li><a href="https://calendar.google.com/calendar/r" target="_blank" rel="noopener noreferrer">Calendar</a></li>
              <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
          <div className="collegeApps linkContainer">
            <div className="groupHeader collegeAppsHeader">
              <div className="headerText blueHeader">
                College Applications.
                        </div>
              <hr className="blueLine"></hr>
            </div>
            <ul className="links">
              <li><a href="https://apply.commonapp.org/login" target="_blank" rel="noopener noreferrer">CommonApp</a></li>
              <li><a href="http://mycoalition.org/" target="_blank" rel="noopener noreferrer">CoalitionApp</a></li>
              <li><a href="https://www.thesaurus.com/" target="_blank" rel="noopener noreferrer">Thesaurus</a></li>
            </ul>
          </div>
          <div className="messaging linkContainer">
            <div className="groupHeader messagingHeader">
              <div className="headerText greenHeader">
                Messaging.
                        </div>
              <hr className="greenLine"></hr>
            </div>
            <ul className="links">
              <li><a href="https://messages.android.com/" target="_blank" rel="noopener noreferrer">Messenger</a></li>
              <li><a href="https://duo.google.com/" target="_blank" rel="noopener noreferrer">Duo</a></li>
              <li><a href="slack://" target="_blank" rel="noopener noreferrer">ForensX Slack</a></li>
              <li><a href="slack://" target="_blank" rel="noopener noreferrer">Gmail</a></li>
            </ul>
          </div>
          <div className="socialMedia linkContainer">
            <div className="groupHeader socialMediaHeader">
              <div className="headerText redHeader">
                Social Media.
                        </div>
              <hr className="redLine"></hr>
            </div>
            <ul className="links">
              <li><a href="https://www.reddit.com/" target="_blank" rel="noopener noreferrer">Reddit</a></li>
              <li><a href="https://www.reddit.com/r/news/" target="_blank" rel="noopener noreferrer">r/News</a></li>
              <li><a href="https://medium.com/" target="_blank" rel="noopener noreferrer">Medium</a></li>
            </ul>
          </div>
        </div>
        {
          this.clockUpdate()
        }
      </div >
    )
  }
}

export default App;
