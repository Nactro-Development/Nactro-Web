import { useState, useEffect } from "react";

const AUTH_KEY = "nactro_auth";
const ADMIN_EMAIL = "admin@nactro.com";
const ADMIN_PASSWORD = "nactro2024";

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem(AUTH_KEY) === "true";
  });

  useEffect(() => {
    const onStorage = () => {
      setIsLoggedIn(localStorage.getItem(AUTH_KEY) === "true");
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const login = (email: string, password: string): boolean => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem(AUTH_KEY, "true");
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
}
