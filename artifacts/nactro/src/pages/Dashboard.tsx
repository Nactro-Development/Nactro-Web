import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import {
  Monitor, Globe, Cpu, Code2, LogOut, Plus, Trash2,
  X, Upload, Edit2, Save, LayoutDashboard, ChevronRight, Image as ImageIcon, Shield,
} from "lucide-react";
import logoImg from "/logo.png";
import { useAuth } from "@/hooks/use-auth";
import { useProjects, type ProductId, type Project } from "@/hooks/use-projects";

const PRODUCTS: { id: ProductId; label: string; icon: React.ReactNode; color: string }[] = [
  { id: "attendance", label: "Nactro Attendance System", icon: <Shield className="w-5 h-5" />, color: "text-primary" },
  { id: "desktop", label: "Desktop Applications", icon: <Monitor className="w-5 h-5" />, color: "text-accent" },
  { id: "web", label: "Web Development", icon: <Globe className="w-5 h-5" />, color: "text-primary" },
  { id: "iot", label: "IoT & Arduino Projects", icon: <Cpu className="w-5 h-5" />, color: "text-accent" },
  { id: "custom", label: "Custom Software Development", icon: <Code2 className="w-5 h-5" />, color: "text-primary" },
];

type FormState = {
  title: string;
  description: string;
  image: string;
  tech: string;
};

const EMPTY_FORM: FormState = { title: "", description: "", image: "", tech: "" };

function ProjectForm({
  initial,
  onSave,
  onCancel,
  productId,
}: {
  initial?: Project;
  onSave: (data: Omit<Project, "id" | "createdAt">) => void;
  onCancel: () => void;
  productId: ProductId;
}) {
  const [form, setForm] = useState<FormState>(
    initial
      ? { title: initial.title, description: initial.description, image: initial.image ?? "", tech: initial.tech.join(", ") }
      : EMPTY_FORM
  );
  const [preview, setPreview] = useState<string | null>(initial?.image ?? null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const result = ev.target?.result as string;
      setPreview(result);
      setForm((f) => ({ ...f, image: result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      productId,
      title: form.title.trim(),
      description: form.description.trim(),
      image: form.image || null,
      tech: form.tech.split(",").map((t) => t.trim()).filter(Boolean),
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-background border border-border rounded-2xl w-full max-w-lg shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h3 className="font-bold text-lg">{initial ? "Edit Project" : "Add New Project"}</h3>
          <button onClick={onCancel} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5">Project Title <span className="text-primary">*</span></label>
            <input
              required
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              placeholder="e.g. HR Management System"
              className="w-full h-10 px-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Description <span className="text-primary">*</span></label>
            <textarea
              required
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              placeholder="Describe what this project does..."
              rows={3}
              className="w-full px-3 py-2.5 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm transition-colors resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Project Screenshot</label>
            <div
              onClick={() => fileRef.current?.click()}
              className="relative h-36 border-2 border-dashed border-border hover:border-primary/50 rounded-xl cursor-pointer transition-colors flex items-center justify-center overflow-hidden bg-card"
            >
              {preview ? (
                <>
                  <img src={preview} alt="preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-sm font-medium">
                    <Upload className="w-4 h-4" /> Change Image
                  </div>
                </>
              ) : (
                <div className="text-center text-muted-foreground">
                  <ImageIcon className="w-8 h-8 mx-auto mb-2 opacity-40" />
                  <span className="text-sm">Click to upload screenshot</span>
                  <p className="text-xs mt-1 opacity-60">PNG, JPG, WebP</p>
                </div>
              )}
            </div>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Tech Stack <span className="text-xs text-muted-foreground">(comma separated)</span></label>
            <input
              value={form.tech}
              onChange={(e) => setForm((f) => ({ ...f, tech: e.target.value }))}
              placeholder="e.g. WPF, C#, SQL Server"
              className="w-full h-10 px-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm transition-colors"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 h-10 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 h-10 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" /> {initial ? "Save Changes" : "Add Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ProductSection({ product }: { product: typeof PRODUCTS[0] }) {
  const { projects, addProject, updateProject, deleteProject } = useProjects(product.id);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Project | null>(null);

  const handleSave = (data: Omit<Project, "id" | "createdAt">) => {
    if (editing) {
      updateProject(editing.id, data);
      setEditing(null);
    } else {
      addProject(data);
      setShowForm(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-background/50">
        <div className="flex items-center gap-3">
          <div className={`${product.color}`}>{product.icon}</div>
          <div>
            <h2 className="font-bold text-base">{product.label}</h2>
            <p className="text-xs text-muted-foreground">{projects.length} project{projects.length !== 1 ? "s" : ""}</p>
          </div>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors px-3 py-1.5 rounded-lg hover:bg-primary/10"
        >
          <Plus className="w-4 h-4" /> Add Project
        </button>
      </div>

      <div className="p-6">
        {projects.length === 0 ? (
          <div
            onClick={() => setShowForm(true)}
            className="border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-primary/40 hover:bg-primary/5 transition-all group"
          >
            <Plus className="w-8 h-8 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
            <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
              No projects yet — click to add the first one
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div key={project.id} className="group bg-background border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all">
                <div className="relative h-40 bg-secondary/50 overflow-hidden">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <ImageIcon className="w-8 h-8 opacity-30" />
                    </div>
                  )}
                  <div className="absolute top-2 right-2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => setEditing(project)}
                      className="w-7 h-7 rounded-md bg-background/90 border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => deleteProject(project.id)}
                      className="w-7 h-7 rounded-md bg-background/90 border border-border flex items-center justify-center text-muted-foreground hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-1 truncate">{project.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {(showForm || editing) && (
        <ProjectForm
          initial={editing ?? undefined}
          productId={product.id}
          onSave={handleSave}
          onCancel={() => { setShowForm(false); setEditing(null); }}
        />
      )}
    </div>
  );
}

export default function Dashboard() {
  const { isLoggedIn, logout } = useAuth();
  const [, navigate] = useLocation();
  const [active, setActive] = useState<ProductId | "all">("all");

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) return null;

  const { projects: allProjects } = useProjects();
  const totalProjects = allProjects.length;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const visibleProducts = active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.id === active);

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <aside className="w-64 flex-shrink-0 bg-card border-r border-border flex flex-col">
        <div className="px-5 py-5 border-b border-border">
          <img src={logoImg} alt="Nactro" className="h-7 w-auto object-contain mb-1" />
          <p className="text-xs text-muted-foreground mt-1">Admin Dashboard</p>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          <button
            onClick={() => setActive("all")}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${active === "all" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
          >
            <LayoutDashboard className="w-4 h-4 flex-shrink-0" />
            <span>All Projects</span>
            <span className="ml-auto text-xs bg-secondary px-2 py-0.5 rounded-full">{totalProjects}</span>
          </button>

          <div className="pt-3 pb-1 px-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Products</p>
          </div>

          {PRODUCTS.map((p) => {
            const count = allProjects.filter((proj) => proj.productId === p.id).length;
            return (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${active === p.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
              >
                <span className={`flex-shrink-0 ${active === p.id ? "text-primary" : p.color}`}>{p.icon}</span>
                <span className="truncate text-left">{p.label}</span>
                {count > 0 && (
                  <span className="ml-auto text-xs bg-secondary px-2 py-0.5 rounded-full flex-shrink-0">{count}</span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="px-3 py-4 border-t border-border space-y-2">
          <a
            href="/"
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            View Website
          </a>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="px-8 py-6 border-b border-border bg-background/80 sticky top-0 z-10 backdrop-blur-sm">
          <h1 className="text-xl font-bold">
            {active === "all" ? "All Projects" : PRODUCTS.find((p) => p.id === active)?.label}
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            {active === "all"
              ? `${totalProjects} total project${totalProjects !== 1 ? "s" : ""} across all products`
              : "Manage project samples visible on the website"}
          </p>
        </div>

        <div className="px-8 py-8 space-y-8">
          {visibleProducts.map((product) => (
            <ProductSection key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
