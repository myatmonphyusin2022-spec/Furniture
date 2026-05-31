import { Link } from "react-router";
import { Icons } from "@/components/Icons";
import RegisterForm from "@/components/auth/RegisterForm";

function Register() {
  return (
    <div className="flex min-h-screen flex-col p-8">
      <Link to="/" className="flex items-center font-bold tracking-tight">
        <Icons.logo className="mr-2 size-6" aria-hidden="true" />
        <span className="text-lg font-semibold tracking-tight">
          Furniture Shop
        </span>
      </Link>

      <div className="flex flex-1 items-center justify-center">
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
