import { Link } from "react-router-dom";
import { Icons } from "@/components/Icons";
import Banner from "@/data/images/house.webp";
import LoginForm from "@/components/auth/LoginForm";

function Login() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left Side */}
      <div className="flex flex-col p-8">
        <Link to="/" className="flex items-center font-bold tracking-tight">
          <Icons.logo className="mr-2 size-6" aria-hidden="true" />
          <span>Furniture Shop</span>
        </Link>

        <div className="flex flex-1 items-center justify-center">
          <LoginForm />
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:block">
        <img
          src={Banner}
          alt="Furniture Shop"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default Login;
