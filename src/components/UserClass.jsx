import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }
  render() {
    return (
      <div className="user-card">
        <h2>Name: Akshith</h2>
        <h3>Location: Bengaluru</h3>
        <h4>Instagram: @aks__g</h4>
      </div>
    );
  }
}

export default UserClass;
