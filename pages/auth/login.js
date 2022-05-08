import styles from "styles/LoginPage.module.scss";
import { useState, useRef } from "react";
import ReCaptchaV2 from "react-google-recaptcha";
import { signIn, authenticate } from "actions/auth";
import { Spinner, Alert } from "reactstrap";
import Router from "next/router";

const LoginPage = () => {
  const recaptchaRef = useRef(null);


  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    token: null,
  });

  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState({
    error: "",
    success: "",
  });

  const handleSubmit = (e) => {
    console.log("values: ", formValues);
    setLoading(true);
    setMessages({
      ...messages,
      error: "",
      success: "",
    });

    if (formValues.token == null) {
      setLoading(false);
      setMessages({
        ...messages,
        error:
          "Please prove you are not a robot by clicking the checkbox below",
        success: "",
      });
    } else {
      const user = {
        email: formValues.email,
        password: formValues.password,
        token: formValues.token,
      };

      signIn(user)
        .then((data) => {
          console.log("Signin success: ", data);
          setLoading(false);
          setMessages({
            ...messages,
            error: "",
            success: "Login successful. Please wait to be redirected.",
          });
          authenticate(data, () => {
            Router.push(`/`);
          });
        })
        .catch((error) => {
          console.log("Signin failed: ", error);

          setLoading(false);
          if (recaptchaRef.current != null) {
            recaptchaRef.current.reset();
          }
          setFormValues({ ...formValues, token: null });
          setMessages({
            ...messages,
            error: error.response.data.error,
            success: "",
          });
        });
    }
  };

  const handleFormValues = (name) => (e) => {
    setFormValues({ ...formValues, [name]: e.target.value });
  };

  const handleToken = (token) => {
    setFormValues({ ...formValues, token });
  };

  const handleExpire = () => {
    setFormValues({ ...formValues, token: null });
  };

  const showSuccessMessage = () =>
    messages.success && <Alert color="success">{messages.success}</Alert>;

  const showErrorMessage = () =>
    messages.error && <Alert color="danger">{messages.error}</Alert>;

  return (
    <>
      <main className={styles["form-signin"]}>
        <h1 className="h3 mb-1 fw-normal text-center">
          This webpage is password protected
        </h1>
        <p className="fw-normal text-center">
          Please input your password to access page
        </p>

        {showSuccessMessage()}
        {showErrorMessage()}
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="StationID"
            onChange={handleFormValues("email")}
          />
          <label>Username</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={handleFormValues("password")}
          />
          <label>Password</label>
        </div>
        <div className={styles.captchaContainer}>
          <ReCaptchaV2
            ref={recaptchaRef}
            style={{ display: "inline-block" }}
            onChange={handleToken}
            sitekey={`6Lejy9EfAAAAAMEI0ZEhONGya8d_5Y8OntkuHho-`}
          />
        </div>
        <button
          className="w-100 btn btn-lg btn-primary d-flex justify-content-center align-items-center"
          type="submit"
          onClick={handleSubmit}
        >
          {loading && (
            <Spinner color="white" size="sm" style={{ marginRight: "5px" }} />
          )}
          Submit
        </button>
      </main>
    </>
  );
};

export default LoginPage;
