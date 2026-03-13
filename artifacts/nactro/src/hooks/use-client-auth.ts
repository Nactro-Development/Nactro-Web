import { useState, useEffect, useCallback } from "react";

export type ClientUser = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

const USERS_KEY = "nactro_client_users";
const SESSION_KEY = "nactro_client_session";

function loadUsers(): (ClientUser & { password: string })[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveUsers(users: (ClientUser & { password: string })[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function loadSession(): ClientUser | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function useClientAuth() {
  const [currentUser, setCurrentUser] = useState<ClientUser | null>(() => loadSession());

  useEffect(() => {
    const onStorage = () => setCurrentUser(loadSession());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const register = useCallback(
    (name: string, email: string, password: string): { ok: boolean; error?: string } => {
      const users = loadUsers();
      if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
        return { ok: false, error: "An account with this email already exists." };
      }
      const user: ClientUser & { password: string } = {
        id: crypto.randomUUID(),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
        createdAt: new Date().toISOString(),
      };
      saveUsers([...users, user]);
      const session: ClientUser = { id: user.id, name: user.name, email: user.email, createdAt: user.createdAt };
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      setCurrentUser(session);
      return { ok: true };
    },
    []
  );

  const login = useCallback(
    (email: string, password: string): { ok: boolean; error?: string } => {
      const users = loadUsers();
      const user = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
      );
      if (!user) {
        return { ok: false, error: "Incorrect email or password." };
      }
      const session: ClientUser = { id: user.id, name: user.name, email: user.email, createdAt: user.createdAt };
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      setCurrentUser(session);
      return { ok: true };
    },
    []
  );

  const logout = useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    setCurrentUser(null);
  }, []);

  return { currentUser, register, login, logout };
}
