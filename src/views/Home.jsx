import { Navbar, Messages } from "../components/Components";

const Home = () => {
  return (
    <div className="bg-backg h-screen m-auto">
      <Navbar />
      <Messages onClick={() => alert("kontol ")} />
      <Messages />
    </div>
  );
};

export default Home;
