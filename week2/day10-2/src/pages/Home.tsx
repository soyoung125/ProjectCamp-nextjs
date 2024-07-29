import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home Component</h1>
      <button onClick={() => navigate("/about")}>About page 가기</button>
    </>
  );
};

export default Home;
