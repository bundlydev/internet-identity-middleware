import { useAuth } from "../hooks/useAuth";
import AuthButton from "./AuthButton.component";
// Fix ts config not loading paths here in runtime
import { Button } from "./ui/button";

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
      {/* {!isAuth ? (
          <div>
            <p>Necesitas ingresar con tu identidad de Internet Identity</p>
            <p></p>
          </div>
        ) : (
          <div>
            <p>Se ha autenticado correctamente</p>
            <p>Da en continuar para ir a la aplicación</p>
          </div>
        )}
        <AuthButton /> */}
    </main>
  );
}

function ChromeIcon(props: { className: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
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

function KeyIcon(props: { className: string }) {
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
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15.5 7.5 3 3L22 7l-3-3" />
    </svg>
  );
}

export default LoginPage;
