import { useAuth } from "../hooks/useAuth";
import AuthButton from "./AuthButton.component";

function LoginPage() {
  const { isAuth } = useAuth();

  return (
    <main>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <div className="flex justify-center mb-4">
            <FlagIcon className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-2">Login</h2>
          {/* <p className="text-sm text-gray-500 text-center mb-6">Sign in to continue to {redirectUrl}</p> */}
          {!isAuth && (
            <p className="text-sm text-black text-center my-6">
              We need to open Internet Identity login in a new tab. Tap the button to continue.
            </p>
          )}

          {isAuth && (
            <p className="text-sm text-black text-center my-6">
              Success login in. Tap on the button to be redirected to the app.
            </p>
          )}
          <AuthButton />
        </div>
        <div className="absolute bottom-4 text-center w-full">
          <FlagIcon className="h-6 w-6 mx-auto text-gray-400" />
        </div>
      </div>
    </main>
  );
}

function FlagIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}

export default LoginPage;
