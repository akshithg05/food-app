import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };

    console.log(props);
  }
  render() {
    const { name, location, social } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <div>
          <button
            onClick={() => {
              // NEVER UPDATE STATE VARS DIRECTLY
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Increase count
          </button>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count - 1,
              });
            }}
          >
            Decrease count
          </button>
        </div>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Instagram: {social}</h4>
      </div>
    );
  }
}

export default UserClass;
