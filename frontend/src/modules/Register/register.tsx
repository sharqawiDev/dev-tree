import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useUserStore } from "@/store";
import "./register.scss";
import Logo from "@/assets/images/logo-devlinks-small.svg";
import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import EmailIcon from "@/components/Icons/icon-email";
import PasswordIcon from "@/components/Icons/icon-password";

const Register = () => {
  const history = useHistory();
  const { isAuthenticated } = useUserStore();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, []);
  return (
    <main className="register-page">
      <header>
        <img src={Logo} alt="devlinks logo" />
        <h1 className="login-header">DevTree</h1>
      </header>
      <Card>
        <h2>Create account</h2>
        <p className="sub-msg">Let's get you started sharing your links!</p>
        <Input
          label="Email address"
          icon={<EmailIcon />}
          placeholder="e.g.alex@email.com"
          type="email"
        />
        <Input
          label="Create password"
          icon={<PasswordIcon />}
          placeholder="At least 8 characters"
          type="password"
        />
        <Input
          label="Confirm password"
          icon={<PasswordIcon />}
          placeholder="At least 8 characters"
          type="password"
        />
        <p className="password-check">
          Password must contain at least 8 characters {true && "✅"}
        </p>
        <Button onClick={() => null}>Login</Button>
        <p className="login-msg">
          Already have an account? <Link to={"login"}>Login</Link>
        </p>
      </Card>
    </main>
  );
};

export default Register;
