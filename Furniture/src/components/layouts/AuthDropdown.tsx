import React from "react";

import { Link } from "react-router-dom";
import type { User } from "@/types";
import { Button } from "../ui/button";
interface UserProps {
  user: User;
}

function AuthDropdown({ user }: UserProps) {
  if (!user) {
    return (
      <Button asChild variant="outline">
        <Link to="/signin">
          Sign In
          <span className="sr-only">Signs In</span>
        </Link>
      </Button>
    );
  }
}

export default AuthDropdown;
