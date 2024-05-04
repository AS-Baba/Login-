import { FcGoogle } from "react-icons/fc";
import { TfiFacebook } from "react-icons/tfi";
import { getFormValues } from "./getFormValues";
import { OrLoginWith } from "./OrLoginWith";
import { PasswordForm } from "./PasswordForm";

export const Form = () => {
  return (
    <div className="col container form-container ">
      <form action="" className="form m-1">
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Enter your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Enter password
          </label>
          <PasswordForm />
        </div>
        <div className="">
          <button className="btn btn-block login-btn w-100"> Log In</button>
          <OrLoginWith />
          <button className="btn  login-btn-option w-100 mb-3">
            <FcGoogle className="icons" />Continue with google
          </button>
          <button className="btn  login-btn-option w-100">
            <TfiFacebook className="icons facebook" />Continue with facebook
          </button>
        </div>
      </form>
    </div>
  );
};
