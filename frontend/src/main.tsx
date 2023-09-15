import Login from "@/modules/Login/login";
import Home from "./modules/home/home";
import { useUserStore } from "./store";
const Main = () => {
  const { isAuthenticated } = useUserStore();
  return <>{isAuthenticated ? <Home /> : <Login />}</>;
};

export default Main;
