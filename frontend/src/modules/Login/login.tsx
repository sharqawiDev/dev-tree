import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useUserStore } from "@/store";
import { useFormik } from "formik";
import "./login.scss";
import Logo from "@/assets/images/logo-devlinks-small.svg";
import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import EmailIcon from "@/components/Icons/icon-email";
import PasswordIcon from "@/components/Icons/icon-password";
import { emailRegex } from "@/data/constants";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const history = useHistory();
  const { login, isAuthenticated } = useUserStore();

  const validate = (values: FormValues) => {
    const errors: FormValues = {} as FormValues;
    if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      login(() => null);
    },
  });

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
        <form onSubmit={formik.handleSubmit}>
          <Input
            id="email"
            name="email"
            label="Email address"
            icon={<EmailIcon />}
            placeholder="e.g.alex@email.com"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            errorMessage={formik.touched.email ? formik.errors.email : ""}
          />
          <Input
            id="password"
            name="password"
            label="Password"
            icon={<PasswordIcon />}
            placeholder="Enter your password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            errorMessage={formik.touched.password ? formik.errors.password : ""}
          />
        </form>
        <Button
          onClick={() => null}
          disabled={!formik.isValid || !formik.dirty}
        >
          Login
        </Button>
        <p className="register-msg">
          Don't have an account? <Link to={"register"}>Create account</Link>
        </p>
      </Card>
    </main>
  );
};

export default Login;
