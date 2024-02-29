import { Navigate } from "react-router-dom";
import Loader from "../../utilities/Loader";
import useLoggedIn from "../../hooks/useLoggedIn";
import { toast } from "react-toastify";

const StudentCheck = ({ children }) => {
  const { authenticated, loading } = useLoggedIn();

  if (loading) {
    return <Loader />;
  }

  return authenticated ? children : <>
    {toast.error('Please Login !', {
      position: toast.POSITION.TOP_CENTER
    })}
    <Navigate to="/student/signin" />
  </>;
};

export default StudentCheck;
