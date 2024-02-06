import { useAuth } from "../hooks/useAuth";
import { Button } from "./ui/button";

const AuthButton = () => {
  const { isAuth, login, navigate } = useAuth();

  return !isAuth ? (
    <Button className="text-sm w-full mb-3 bg-blue-600 text-white" onClick={() => login()}>
      Sign in with Internet Identity
    </Button>
  ) : (
    <Button className="text-sm w-full mb-3 bg-blue-600 text-white" onClick={() => navigate()}>
      Redirect me to app
    </Button>
  );
};

export default AuthButton;
