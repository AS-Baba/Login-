import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { FcGoogle } from "react-icons/fc";
import { TfiFacebook } from "react-icons/tfi";
import { getFormValues } from "./getFormValues";
import { OrLoginWith } from "./OrLoginWith";
import { PasswordForm } from "./PasswordForm";

export const Form = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isEmpty, data } = getFormValues(e.currentTarget);

    console.log(data)

    if (isEmpty) {
      toastr.error("Provide all the values!");
    } else {
      e.currentTarget.reset();
    }
  };

  return (
    <div className="col container form-container ">
      <form action="" className="form m-1" onSubmit={handleSubmit}>
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
          <PasswordForm onSubmit ={handleSubmit}/>
        </div>
        <div className="">
          <button className="btn btn-block login-btn w-100"> Log In</button>
          <OrLoginWith />
          <button className="btn  login-btn-option w-100 mb-3">
            <FcGoogle className="icons" />
            Continue with google
          </button>
          <button className="btn  login-btn-option w-100">
            <TfiFacebook className="icons facebook" />
            Continue with facebook
          </button>
        </div>
      </form>
    </div>
  );
};
