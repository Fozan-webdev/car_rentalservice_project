import React, { useEffect, useState } from "react";
import { loginStyles, loginStyles as styles } from "../assets/dummyStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import logo from "../assets/carlogo.svg";
import {toast, ToastContainer } from 'react-toastify';
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [credentials, setCredentails] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(true);
  }, []);
  const handleChange = (e) => {
    setCredentails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login details", credentials);
    localStorage.setItem("authToken", "your-authentication-token-here");
    toast.success("Login Successful! Welcome back", {
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      onClose: () => {
        const redirectPath =  "/";
        navigate(redirectPath, { replace: true });
      },
    });
  };

  // Password Toggle Logic
  const togglePasswordVisibilty = () => setShowPassword(prev => !prev);
  return (
    <div className={loginStyles.pageContainer}>
      {/* ANIMATED BACKGROUND */}
      <div className={styles.animatedBackground.base}>
        <div
          className={`${styles.animatedBackground.orb1} ${isActive ? "translate-x-20 translate-y-10" : ""}`}
        />
        <div
          className={`${styles.animatedBackground.orb2} ${isActive ? "-translate-x-20 -translate-y-10" : ""}`}
        />
        <div
          className={`${styles.animatedBackground.orb3} ${isActive ? "-translate-x-10 translate-y-20" : ""}`}
        />
      </div>

      {/* BACK BUTTON */}
      <a href="/" className={styles.backButton}>
        <FaArrowLeft className="text-sm sm:text-base" />
        <span className="font-medium text-xs sm:text-sm">Back to Home</span>
      </a>

      {/* LOGIN CARD */}
      <div
        className={`${styles.loginCard.container} ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
      >
        <div className={styles.loginCard.card}>
          <div className={styles.loginCard.decor1} />
          <div className={styles.loginCard.decor2} />

          {/* LOGIN CARD HEADER */}
          <div className={styles.loginCard.headerContainer}>
            <div className={styles.loginCard.logoContainer}>
              <div className={styles.loginCard.logoText}>
                <img
                  src={logo}
                  alt="logo"
                  className="h-[1em] w-auto block"
                  style={{ display: "block", objectFit: "contain" }}
                />
                <span className="font-bold tracking-wider">GCB CAR</span>
              </div>
            </div>
            <h1 className={styles.loginCard.title}>PremiumDrive</h1>
            <p className={styles.loginCard.subtitle}>
              LUXURY MOBILITY EXPERIENCE
            </p>
          </div>
          {/* FORM */}
          <form onSubmit={handleSubmit} className={styles.form.container}>
            <div className={styles.form.inputContainer}>
              <div className={styles.form.inputWrapper}>
                <div className={styles.form.inputIcon}>
                  <FaUser />
                </div>
                <input
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className={styles.form.input}
                />
              </div>
            </div>
            <div className={styles.form.inputContainer}>
              <div className={styles.form.inputWrapper}>
                <div className={styles.form.inputIcon}>
                  <FaLock />
                </div>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className={styles.form.input}
                />
                {/* Password Toggle UI */}
                <div
                  onClick={togglePasswordVisibilty}
                  className={styles.form.passwordToggle}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
            <button type="submit" className={styles.form.submitButton}>
              <span className={styles.form.buttonText}>Login</span>
              <div className={styles.form.buttonHover} />
            </button>
          </form>
          <div className={styles.signupSection}>
            <p className={styles.signupText}>Don't have an account?</p>
            <a href="/signup" className={styles.signupButton}>CREATE ACCOUNT</a>
          </div>
        </div>
      </div>
        <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastStyle={{
          backgroundColor: '#fb923c',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(249, 115, 22, 0.25)'
        }}
      />
    </div>
  );
};

export default Login;
