import React from "react";

export const LoginHeader = () => {
  return (
    <div className="col-md-10 container d-flex d-flex justify-content-between bg-primar mt-5 mb-3">
      <h4 className="loginHead">Login</h4>
      <p className="dontHaveAnAccount">
        Don't have an account?{" "}
        <span className="text-primary signUp">Sign Up</span>
      </p>
    </div>
  );
};
