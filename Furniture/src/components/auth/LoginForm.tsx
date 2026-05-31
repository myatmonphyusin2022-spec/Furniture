import { useState } from "react";
import { Link, useNavigate, useNavigation, useActionData } from "react-router";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "./Password-Input";

export default function LoginForm() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const actionData = useActionData();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    navigate("/");
  }
  return (
    <Card className="w-full max-w-sm border-none shadow-none">
      <CardHeader className="px-0">
        <CardTitle className="pl-2 text-3xl font-semibold tracking-tight">
          Sign In
        </CardTitle>

        <CardDescription className="text-muted-foreground pl-2 text-sm">
          Enter your phone number below to login to your account
        </CardDescription>
      </CardHeader>

      <CardContent className="px-0">
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Phone Number */}
          <div className="space-y-2 pl-2">
            <label className="text-sm font-medium">Phone Number</label>

            <Input
              className="h-11"
              type="text"
              placeholder="0977********"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="space-y-2 pl-2">
            <div className="flex items-center">
              <label className="text-sm font-medium">Password</label>

              <Link
                to="/reset"
                className="text-muted-foreground ml-auto pr-2 text-xs hover:underline"
              >
                Forgot your password?
              </Link>
            </div>

            <PasswordInput
              className="h-10 text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Error Message */}
          {actionData?.error && (
            <p className="text-sm text-red-500">{actionData.error}</p>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="h-10 w-full pl-2 text-sm font-medium"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Submitting..." : "Sign In"}
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>

            <div className="relative flex justify-center text-[11px] tracking-wider uppercase">
              <span className="bg-background text-muted-foreground px-2">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Button */}
          <Button
            type="button"
            variant="outline"
            className="h-10 w-full text-sm font-medium"
          >
            Continue with Google
          </Button>
        </form>

        {/* Register Link */}
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-foreground font-semibold underline underline-offset-4"
          >
            Sign Up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
