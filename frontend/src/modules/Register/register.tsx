import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useUserStore } from "@/store";
import { useFormik } from "formik";
import "./register.scss";
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
  confirmPassword: string;
};

const Register = () => {
  const history = useHistory();
  const { isAuthenticated } = useUserStore();
  const passwordLength = 8;

  const validate = (values: FormValues) => {
    const errors: FormValues = {} as FormValues;
    if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (values.password.length < passwordLength) {
      errors.password = `Password must be at least ${passwordLength} characters`;
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {},
  });

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
            label="Create password"
            icon={<PasswordIcon />}
            placeholder="At least 8 characters"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            errorMessage={formik.touched.password ? formik.errors.password : ""}
          />
          <Input
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm password"
            icon={<PasswordIcon />}
            placeholder="At least 8 characters"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            errorMessage={
              formik.touched.confirmPassword
                ? formik.errors.confirmPassword
                : ""
            }
          />
        </form>
        <p className="password-check">
          Password must contain at least 8 characters{" "}
          {formik.values.password.length >= passwordLength && "✅"}
        </p>
        <Button
          onClick={() => null}
          disabled={!formik.isValid || !formik.dirty}
        >
          Create new account
        </Button>
        <p className="login-msg">
          Already have an account? <Link to={"login"}>Login</Link>
        </p>
      </Card>
    </main>
  );
};

export default Register;
