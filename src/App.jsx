import  { useEffect } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { Form } from "./Components/Form";
import { LoginHeader } from "./Components/LoginHeader";
import Navbar from "./Components/Navbar";
import { SideImage } from "./Components/SideImage";

const App = () => {
  useEffect(() => {
    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-top-right",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "5000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="row app">
        <div className="col">
          <LoginHeader />
          <Form />
        </div>

        <div className="col">
          <SideImage/>

        </div>
      </div>
    </>
  );
};

export default App;
