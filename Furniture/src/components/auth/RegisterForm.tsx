import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function RegisterForm() {
  return (
    <Card className="w-full max-w-sm border shadow-sm">
      <CardHeader className="px-0">
        <CardTitle className="text-3xl pl-2 font-bold tracking-tight">
          Sign Up
        </CardTitle>

        <CardDescription className="text-muted-foreground pl-2 text-sm">
          Enter your phone number below to create a new account
        </CardDescription>
      </CardHeader>

      <CardContent className="px-0">
        <div className="space-y-5">
          {/* Phone Number */}
          <div className="space-y-3 pl-2">
            <label className="text-sm pl-2 font-semibold">Phone Number</label>

            <Input
              className="h-10 text-sm "
              type="text"
              placeholder="0977********"
            />
          </div>

          {/* Password */}
          <div className="space-y-3 pl-2">
            <label className="text-sm font-semibold pl-2">Password</label>
            <Input className="h-10 text-sm" type="password" />
          </div>

          {/* Confirm Password */}
          <div className="space-y-3 pl-2">
            <label className="text-sm pl-2 font-semibold">Confirm Password</label>

            <Input className="h-10 text-sm" type="password" />
          </div>

          <Button
            type="submit"
            className="h-10 w-full pl-2 text-sm font-medium"
            asChild
          >
            <Link to="/">Sign Up</Link>
          </Button>

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

          <Button variant="outline" className="h-10 w-full text-sm font-medium">
            Continue with Google
          </Button>
        </div>

        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium underline underline-offset-4"
          >
            Sign In
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
