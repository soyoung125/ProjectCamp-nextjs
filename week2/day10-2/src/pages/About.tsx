import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname); // /about
  }, []);

  return (
    <>
      <h1>About Component</h1>
    </>
  );
};

export default About;
