import React from "react";
import { LoginHeader } from "./LoginHeader";
import { Form } from "./Form";

export function FormContainer() {
 
  return (
    <div className="formContainer">
      <LoginHeader/>
      <div className="col-md-11 container ">
        <Form/>
      </div>

      
    </div>
  );
}