import { Form } from "./Components/Form";
import { LoginHeader } from "./Components/LoginHeader";
import Navbar from "./Components/Navbar";
import { SideImage } from "./Components/SideImage";

const App = () => {
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
