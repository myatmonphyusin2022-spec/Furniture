import api from "@/api";
export const homeloader = async () => {
  try {
    const response = await api.get("users/products");
    return response.data;
  } catch (error) {
    console.log("HomeLoader error:", error);
  }
};
