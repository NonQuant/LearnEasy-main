import React from "react";

// const CountDownTimer = ({minSecs}) => {

//     const { minutes = 0, seconds = 60 } = minSecs;
//     const [[mins, secs], setTime] = React.useState([minutes, seconds]);

//     const tick = () => {

//         if (mins === 0 && secs === 0)
//             reset()
//         else if (secs === 0) {
//             setTime([mins - 1, 59]);
//         } else {
//             setTime([mins, secs - 1]);
//         }
//     };

//     const reset = () => setTime([ parseInt(minutes), parseInt(seconds)]);

//     React.useEffect(() => {
//         const timerId = setInterval(() => tick(), 1000);
//         return () => clearInterval(timerId);
//     });

//     return (
//         <div style={{backgroundColor: 'white', color: '#0F204C', fontSize: '2.1rem', padding: '10px', borderRadius: '15px', lineHeight: '2.5rem'}}>
//             <p>{`${mins
//             .toString()
//             .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p>
//         </div>
//     );
// }

export class CountDownTimer extends React.Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 1500 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }
  

  render() {
    return (
      <div className={this.props.timer_class}>
        <div className="functions__timer__counter__title">Timer</div>
        <div className="functions__timer__counter__timer">
          {this.state.time.m}:{this.state.time.s}
        </div>
        <div className="functions__timer__counter__btn">
          <button onClick={this.startTimer}>Старт</button>
        </div>
      </div>
    );
  }
}
