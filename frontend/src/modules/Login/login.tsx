import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useUserStore } from "@/store";
import "./login.scss";
import Logo from "@/assets/images/logo-devlinks-small.svg";
import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import EmailIcon from "@/components/Icons/icon-email";
import PasswordIcon from "@/components/Icons/icon-password";

const Login = () => {
  const history = useHistory();
  const { login, isAuthenticated } = useUserStore();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, []);
  return (
    <main className="login-page">
      <header>
        <img src={Logo} alt="devlinks logo" />
        <h1 className="login-header">DevTree</h1>
      </header>
      <Card>
        <h2>Login</h2>
        <p className="sub-msg">
          Add your details below to get back into the app
        </p>
        <Input
          label="Email address"
          icon={<EmailIcon />}
          placeholder="e.g.alex@email.com"
          type="email"
        />
        <Input
          label="Password"
          icon={<PasswordIcon />}
          placeholder="Enter your password"
          type="password"
        />
        <Button onClick={() => null}>Login</Button>
        <p className="register-msg">
          Don't have an account? <a>Create account</a>
        </p>
      </Card>
    </main>
  );
};

export default Login;
