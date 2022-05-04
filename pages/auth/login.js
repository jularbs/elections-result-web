import styles from "styles/LoginPage.module.scss";

const LoginPage = () => {
  return (
    <>
      <main className={styles["form-signin"]}>
        <h1 className="h3 mb-3 fw-normal text-center">Sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label>Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label>Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </main>
    </>
  );
};

export default LoginPage;
