import User from "./User";
import React from "react";
import UserClass from "./UserClass";

export default class About extends React.Component {
  constructor(props) {
    console.log("Parent constructor");
    super(props);
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>This is the demo food application</h1>
        <h2>
          We are small little brand making baby steps in the food industry.
        </h2>
        {/*<User name={"Akshith Gunasheelan"} />*/}
        <UserClass
          name={"Akshith Gunasheelan"}
          location={"Bangalore"}
          social={"@aks__g"}
          id={"first"}
        />
        <UserClass
          name={"Akshith Gunasheelan"}
          location={"Bangalore"}
          social={"@aks__g"}
          id={"second"}
        />
      </div>
    );
  }
}

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
