import api, { authApi } from "@/api";
import { redirect, ActionFunctionArgs } from "react-router";
import { AxiosError } from "axios";

export const loginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const authData = {
    phone: formData.get("phone"),
    password: formData.get("password"),
  };

  try {
    const response = await authApi.post("/auth/login", authData);

    if (response.status !== 200) {
      return {
        error:
          response.data?.message || response.data?.error || "Login Failed!",
      };
    }

    const redirectTo = new URL(request.url).searchParams.get("redirect") || "/";
    return redirect(redirectTo);
  } catch (error) {
    if (error instanceof AxiosError) {
      const data = error.response?.data;
      const errorMessage =
        typeof data === "string"
          ? data.includes("<html") || data.includes("<!DOCTYPE")
            ? "Login Failed!"
            : data
          : data?.message || data?.error;

      return {
        error: errorMessage || "Login Failed!",
      };
    }

    throw error;
  }
};
export const logoutAction = async () => {
  try {
    await authApi.post("/logout");
  } catch (error) {
    console.error("logout failed", error);
  }

  return redirect("/login");
};
