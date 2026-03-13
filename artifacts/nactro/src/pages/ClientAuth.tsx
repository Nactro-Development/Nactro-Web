import { useState } from "react";
import { useLocation } from "wouter";
import { Eye, EyeOff, UserPlus, LogIn, User } from "lucide-react";
import { useClientAuth } from "@/hooks/use-client-auth";
import logoImg from "/logo.png";

type Tab = "signin" | "register";

export default function ClientAuth() {
  const { login, register, currentUser } = useClientAuth();
  const [, navigate] = useLocation();
  const [tab, setTab] = useState<Tab>("signin");

  // Sign In state
  const [siEmail, setSiEmail] = useState("");
  const [siPassword, setSiPassword] = useState("");
  const [siShowPw, setSiShowPw] = useState(false);
  const [siError, setSiError] = useState("");
  const [siLoading, setSiLoading] = useState(false);

  // Register state
  const [rName, setRName] = useState("");
  const [rEmail, setREmail] = useState("");
  const [rPassword, setRPassword] = useState("");
  const [rConfirm, setRConfirm] = useState("");
  const [rShowPw, setRShowPw] = useState(false);
  const [rError, setRError] = useState("");
  const [rLoading, setRLoading] = useState(false);

  if (currentUser) {
    navigate("/");
    return null;
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setSiError("");
    setSiLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    const result = login(siEmail, siPassword);
    setSiLoading(false);
    if (result.ok) {
      navigate("/");
    } else {
      setSiError(result.error ?? "Login failed.");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setRError("");
    if (rPassword !== rConfirm) {
      setRError("Passwords do not match.");
      return;
    }
    if (rPassword.length < 6) {
      setRError("Password must be at least 6 characters.");
      return;
    }
    setRLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    const result = register(rName, rEmail, rPassword);
    setRLoading(false);
    if (result.ok) {
      navigate("/");
    } else {
      setRError(result.error ?? "Registration failed.");
    }
  };

  const inputClass =
    "w-full h-11 px-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom-right,rgba(14,165,233,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-5">
            <img src={logoImg} alt="Nactro" className="h-10 w-auto object-contain" />
          </div>
          <p className="text-muted-foreground text-sm">
            {tab === "signin" ? "Welcome back! Sign in to your account." : "Create your Nactro account."}
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl shadow-2xl backdrop-blur-sm overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-border">
            <button
              onClick={() => { setTab("signin"); setSiError(""); }}
              className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-colors ${
                tab === "signin"
                  ? "text-primary border-b-2 border-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <LogIn className="w-4 h-4" /> Sign In
            </button>
            <button
              onClick={() => { setTab("register"); setRError(""); }}
              className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-colors ${
                tab === "register"
                  ? "text-primary border-b-2 border-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <UserPlus className="w-4 h-4" /> Register
            </button>
          </div>

          <div className="p-7">
            {tab === "signin" ? (
              <form onSubmit={handleSignIn} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input
                    type="email"
                    value={siEmail}
                    onChange={(e) => setSiEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Password</label>
                  <div className="relative">
                    <input
                      type={siShowPw ? "text" : "password"}
                      value={siPassword}
                      onChange={(e) => setSiPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className={`${inputClass} pr-11`}
                    />
                    <button
                      type="button"
                      onClick={() => setSiShowPw(!siShowPw)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {siShowPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                {siError && (
                  <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                    {siError}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={siLoading}
                  className="w-full h-11 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60 mt-2"
                >
                  {siLoading ? (
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  ) : <LogIn className="w-4 h-4" />}
                  {siLoading ? "Signing in..." : "Sign In"}
                </button>
                <p className="text-center text-sm text-muted-foreground pt-1">
                  Don't have an account?{" "}
                  <button type="button" onClick={() => setTab("register")} className="text-primary hover:underline font-medium">
                    Register
                  </button>
                </p>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Full Name</label>
                  <input
                    type="text"
                    value={rName}
                    onChange={(e) => setRName(e.target.value)}
                    placeholder="Your Name"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input
                    type="email"
                    value={rEmail}
                    onChange={(e) => setREmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Password</label>
                  <div className="relative">
                    <input
                      type={rShowPw ? "text" : "password"}
                      value={rPassword}
                      onChange={(e) => setRPassword(e.target.value)}
                      placeholder="Min. 6 characters"
                      required
                      className={`${inputClass} pr-11`}
                    />
                    <button
                      type="button"
                      onClick={() => setRShowPw(!rShowPw)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {rShowPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Confirm Password</label>
                  <input
                    type="password"
                    value={rConfirm}
                    onChange={(e) => setRConfirm(e.target.value)}
                    placeholder="••••••••"
                    required
                    className={inputClass}
                  />
                </div>
                {rError && (
                  <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                    {rError}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={rLoading}
                  className="w-full h-11 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60 mt-2"
                >
                  {rLoading ? (
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  ) : <UserPlus className="w-4 h-4" />}
                  {rLoading ? "Creating account..." : "Create Account"}
                </button>
                <p className="text-center text-sm text-muted-foreground pt-1">
                  Already have an account?{" "}
                  <button type="button" onClick={() => setTab("signin")} className="text-primary hover:underline font-medium">
                    Sign In
                  </button>
                </p>
              </form>
            )}
          </div>
        </div>

        <div className="mt-5 text-center">
          <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Back to website
          </a>
        </div>
      </div>
    </div>
  );
}
