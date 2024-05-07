import Browse from "./Browse";
import Login from "./Login";
import { app } from "../utils/firebase";

const Body = () => {
  return (
    <>
      <Browse />
      <Login />
    </>
  );
};

export default Body;
