import { useState, useEffect, useCallback } from "react";

export type ProductId = "attendance" | "desktop" | "web" | "iot" | "custom";

export type Project = {
  id: string;
  productId: ProductId;
  title: string;
  description: string;
  image: string | null;
  tech: string[];
  createdAt: string;
};

const STORAGE_KEY = "nactro_projects";

function load(): Project[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function save(projects: Project[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

export function useProjects(productId?: ProductId) {
  const [projects, setProjects] = useState<Project[]>(() => load());

  useEffect(() => {
    const onStorage = () => setProjects(load());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const all = productId ? projects.filter((p) => p.productId === productId) : projects;

  const addProject = useCallback((data: Omit<Project, "id" | "createdAt">) => {
    const next: Project = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setProjects((prev) => {
      const updated = [...prev, next];
      save(updated);
      return updated;
    });
    return next;
  }, []);

  const updateProject = useCallback((id: string, data: Partial<Omit<Project, "id" | "createdAt">>) => {
    setProjects((prev) => {
      const updated = prev.map((p) => (p.id === id ? { ...p, ...data } : p));
      save(updated);
      return updated;
    });
  }, []);

  const deleteProject = useCallback((id: string) => {
    setProjects((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      save(updated);
      return updated;
    });
  }, []);

  return { projects: all, addProject, updateProject, deleteProject };
}
