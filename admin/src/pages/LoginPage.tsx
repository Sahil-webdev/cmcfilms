import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, Eye, EyeOff, Film, ArrowRight, Shield } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('admin@cmcfilms.com');
  const [password, setPassword] = useState('admin123');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const result = await login(email, password);
    setIsLoading(false);
    if (!result.success) {
      setError(result.message || 'Login failed');
    }
  };

  const handleDemoFill = () => {
    setEmail('admin@cmcfilms.com');
    setPassword('admin123');
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center bg-[#0B0C10] overflow-hidden px-4">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1600"
          alt="CMC Studio Background"
          className="h-full w-full object-cover opacity-20 scale-105 filter blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/80 to-transparent" />
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-[#121520]/90 backdrop-blur-xl border border-[#23283B] rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/80 space-y-6">
        {/* Brand Badge */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-[#C47A65]/15 border border-[#C47A65]/30 text-[#C47A65] mb-2 shadow-inner">
            <Film className="h-7 w-7" />
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C47A65]">
            CMC FILMS STUDIO
          </p>
          <h1 className="font-editorial text-3xl text-white font-medium tracking-tight">
            Admin Console Login
          </h1>
          <p className="text-xs text-slate-400">
            Sign in to manage inquiries, wedding stories & packages
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center font-medium">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Email Address</label>
            <div className="relative">
              <Mail className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@cmcfilms.com"
                className="w-full bg-[#1A1E2C] text-sm text-white pl-10 pr-4 py-3 rounded-xl border border-[#2B3147] focus:outline-none focus:border-[#C47A65] transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Password</label>
            <div className="relative">
              <Lock className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#1A1E2C] text-sm text-white pl-10 pr-10 py-3 rounded-xl border border-[#2B3147] focus:outline-none focus:border-[#C47A65] transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-[#C47A65] hover:bg-[#B36854] text-white text-sm font-semibold py-3.5 rounded-xl shadow-lg shadow-[#C47A65]/25 transition-all duration-200 active:scale-95 cursor-pointer disabled:opacity-50"
          >
            <span>{isLoading ? 'Signing In...' : 'Sign In to Dashboard'}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        {/* Demo Quick Login Card */}
        <div className="p-3.5 rounded-2xl bg-[#171B28] border border-[#252B3E] space-y-2 text-center">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 px-1">
            <span className="flex items-center gap-1.5 text-amber-400">
              <Shield className="h-3.5 w-3.5" />
              Demo Credentials
            </span>
            <button
              onClick={handleDemoFill}
              className="text-[#C47A65] hover:underline font-bold"
            >
              Autofill Demo
            </button>
          </div>
          <div className="font-mono text-xs text-slate-300 bg-[#0E1017] p-2 rounded-lg border border-[#1E2333] flex justify-between px-3">
            <span>admin@cmcfilms.com</span>
            <span className="text-slate-500">admin123</span>
          </div>
        </div>
      </div>
    </div>
  );
};
