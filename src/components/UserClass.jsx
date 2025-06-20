import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      userData: {},
      isLoading: false,
    };
  }

  async componentDidMount() {
    try {
      this.setState({
        isLoading: true,
      });
      const userDetails = await fetch(
        "https://api.github.com/users/akshithg05"
      );
      const userDetailsJson = await userDetails.json();
      this.setState({
        userData: userDetailsJson,
      });
    } catch (err) {
      this.setState({
        error: err,
      });
      console.log(err);
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  componentDidUpdate() {
    console.log("Component updated!");
  }

  componentWillUnmount(){
    
  }

  render() {
    const { isLoading, userData } = this.state;
    const { name, location, avatar_url } = userData;

    return (
      <div className="user-card">
        <h2>Name: {isLoading ? "Loading..." : name}</h2>
        <h3>Location: {isLoading ? "Loading..." : location}</h3>
        <div>
          <h4>Avatar:</h4>
          <img
            className="user-image"
            src={isLoading ? "Loading..." : avatar_url}
          />
        </div>
      </div>
    );
  }
}

export default UserClass;
