import useAppStore from "../config/MessageContext";
import { shallow } from "zustand/shallow";

const Login = () => {
  const [user, setUser] = useAppStore((state) => {
    return [state.user, state.setUser];
  }, shallow);
  return (
    <>
      <h1>Login Page</h1>
      <p>{user}</p>
      <input
        type="text"
        onInput={(event) => {
          setUser(event.target.value);
        }}
      />
    </>
  );
};

export default Login;
