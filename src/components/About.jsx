// import User from "./User";
import React from "react";
import UserClass from "./UserClass";
import UserContext from "../context/UserContext";

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <div>
          Loggen in user -
          {/*For using context in class based components this is the procedure*/}
          <UserContext.Consumer>
            {(data) => {
              return <h1 className="font-bold text-lg">{data.loggedInUser}</h1>;
            }}
          </UserContext.Consumer>
        </div>
        <h1>This is the demo food application</h1>
        <h2>
          We are small little brand making baby steps in the food industry.
        </h2>
        {/* <User name={"Akshith Gunasheelan"} /> */}
        <UserClass />
      </div>
    );
  }
}

// Functional component for the same -

// export default function About() {
//   return (
//     <div>
//       <h1>This is the demo food application</h1>
//       <h2>We are small little brand making baby steps in the food industry.</h2>
//       {/*<User name={"Akshith Gunasheelan"} />*/}
//       <UserClass
//         name={"Akshith Gunasheelan"}
//         location={"Bangalore"}
//         social={"@aks__g"}
//       />
//     </div>
//   );
// }
