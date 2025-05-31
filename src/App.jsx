import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
