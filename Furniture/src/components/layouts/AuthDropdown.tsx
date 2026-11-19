import { Link, Form } from "react-router-dom";
import type { User } from "@/types";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "../Icons";

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
  const initialName = `${user.firstName.charAt(0) ?? ""}${user.lastName.charAt(0) ?? ""}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="size-8 rounded-full">
          <Avatar className="size-8 rounded-full">
            <AvatarImage src={user.imageUrl} alt={initialName} />
            <AvatarFallback>{initialName}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm leading-none font-medium">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-muted-foreground text-sm leading-none">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* Note: Added 'w-full flex items-center' to the Link so it spreads properly with the shortcut */}
          <DropdownMenuItem asChild>
            <Link to="#" className="flex w-full items-center">
              <Icons.dashboard className="mr-2 size-4" aria-hidden="true" />
              <span>Dashboard</span>
              <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>

          {/* Fixed missing asChild on Settings dropdown item */}
          <DropdownMenuItem asChild>
            <Link to="#" className="flex w-full items-center">
              <Icons.dashboard className="mr-2 size-4" aria-hidden="true" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Form method="POST" action="/logout" className="w-full">
            <button type="submit" className="w-full">
              Logout
            </button>
          </Form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AuthDropdown;
