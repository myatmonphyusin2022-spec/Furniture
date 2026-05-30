import { useState } from "react";
import { Link, useSubmit, useNavigation, useActionData } from "react-router";

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
  const submit = useSubmit();
  const navigation = useNavigation();
  const actionData = useActionData();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    submit(
      {
        phone,
        password,
      },
      {
        method: "post",
        action: "/login",
      },
    );
  }

  return (
    <Card className="w-full max-w-sm border-none shadow-none">
      <CardHeader className="px-0">
        <CardTitle className="text-2xl">Sign In</CardTitle>

        <CardDescription>
          Enter your phone number below to login to your account
        </CardDescription>
      </CardHeader>

      <CardContent className="px-0">
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Phone Number */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Phone Number</label>

            <Input
              type="tel"
              placeholder="0977********"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center">
              <label className="text-sm font-medium">Password</label>

              <Link
                to="/reset"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>

            <PasswordInput
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
            className="w-full"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Submitting..." : "Sign In"}
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>

            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background text-muted-foreground px-2">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Button */}
          <Button type="button" variant="outline" className="w-full">
            Sign In with Google
          </Button>
        </form>

        {/* Register Link */}
        <div className="mt-6 text-center text-sm">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium underline underline-offset-4"
          >
            Sign Up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
