import { FormContainer } from "./FormContainer";
import { SideImage } from "./SideImage";

export const LoginPage = (props) => {
  return (
    <>
      <div className="row container-fluid">
        <div className="col-md-6 ">
          <FormContainer/>
        </div>
        {/* Second column */}
        <div className="col-md-6 ">
          <SideImage />
        </div>
      </div>
    </>
  );
};
