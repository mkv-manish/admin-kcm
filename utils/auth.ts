export const login = (email: string, password: string) => {
 
  if (email === "admin@example.com" && password === "Admin@123") {
    localStorage.setItem("token", "admin-token");
    return { success: true };
  }
  return { success: false };
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isLoggedIn = () => !!localStorage.getItem("token");
