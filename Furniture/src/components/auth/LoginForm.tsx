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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  phone: z
    .string()
    .min(7, "Phone number is too short")
    .max(12, "Phone number is too long")
    .regex(/^\d+$/, "Phone number must be numbers"),
  password: z
    .string()
    .min(8, "Password must be 8 digits.")
    .max(8, "Password must be 8 digits.")
    .regex(/^\d+$/, "Password must be numbers"),
});

export default function LoginForm() {
  const submit = useSubmit();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const actionData = useActionData() as { error?: string } | undefined;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    submit(values, { method: "post", action: "/login" });
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>
          Enter your phone number below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
          autoComplete="off"
        >
          {/* Phone Number Field */}
          <div className="space-y-2">
            <label className="text-sm leading-none font-medium">
              Phone Number
            </label>
            <Input
              type="tel"
              placeholder="0977**********"
              inputMode="numeric"
              {...form.register("phone")}
            />
            {form.formState.errors.phone && (
              <p className="text-xs text-red-500">
                {form.formState.errors.phone.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex items-center">
              <label className="text-sm leading-none font-medium">
                Password
              </label>
              <Link
                to="/reset"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
            <PasswordInput inputMode="numeric" {...form.register("password")} />
            {form.formState.errors.password && (
              <p className="text-xs text-red-500">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>

          {actionData?.error && (
            <p className="text-xs text-red-400">{actionData.error}</p>
          )}

          <div className="grid gap-4">
            <Button
              type="submit"
              className="mt-2 w-full"
              disabled={navigation.state === "submitting"}
            >
              {isSubmitting ? "Submitting..." : "Sign In"}
            </Button>
            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span className="bg-background text-muted-foreground relative z-10 px-2">
                Or continue with
              </span>
            </div>
            <Button type="button" variant="outline" className="w-full">
              Sign In with Google
            </Button>
          </div>
        </form>

        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="underline">
            Sign Up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
