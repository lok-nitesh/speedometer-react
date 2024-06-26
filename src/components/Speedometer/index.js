import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => {
        return {count: prevState.count + 10}
      })
    }
  }

  brake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => {
        return {count: prevState.count - 10}
      })
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img-size"
        />
        <h1 className="heading">Speed is {speed}mph</h1>
        <p className="text">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="speed-btn" onClick={this.accelerate}>
            Acceleration
          </button>
          <button className="brake-btn" onClick={this.brake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
