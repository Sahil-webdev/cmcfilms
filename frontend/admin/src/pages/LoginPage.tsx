import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { API_URL } from '../lib/environment';
import { Lock, Mail, Eye, EyeOff, Film, ArrowRight, UserRound } from 'lucide-react';

type SetupState = 'checking' | 'required' | 'complete' | 'unavailable';

const inputClass =
  'w-full bg-[#1A1E2E] text-sm text-white pl-10 pr-4 py-3 rounded-xl border border-[#2B3147] focus:outline-none focus:border-[#8C90C1] transition-colors';

export const LoginPage: React.FC = () => {
  const { login, registerFirstAdmin } = useAuth();
  const [setupState, setSetupState] = useState<SetupState>('checking');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const checkSetup = async () => {
    setSetupState('checking');
    setError('');
    try {
      const response = await fetch(`${API_URL}/api/auth/setup-status`);
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.success) {
        setSetupState('unavailable');
        setError(data.message || 'The secure server is unavailable.');
        return;
      }
      setSetupState(data.setupRequired ? 'required' : 'complete');
    } catch {
      setSetupState('unavailable');
      setError('Could not reach the secure server.');
    }
  };

  useEffect(() => {
    void checkSetup();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (setupState === 'required' && password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    const result =
      setupState === 'required'
        ? await registerFirstAdmin(name, email, password)
        : await login(email, password);
    setIsLoading(false);

    if (!result.success) {
      setError(result.message || 'Please try again.');
      if (setupState === 'required' && result.message?.includes('already complete')) void checkSetup();
    }
  };

  const isSetup = setupState === 'required';
  const submitLabel = isSetup ? 'Create Secure Admin Account' : 'Sign In to Dashboard';

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center bg-[#0B0D14] overflow-hidden px-4 py-8 font-sans">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1600"
          alt=""
          className="h-full w-full object-cover opacity-15 scale-105 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D14] via-[#0B0D14]/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-md bg-[#121522]/90 backdrop-blur-xl border border-[#202435] rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-[#8C90C1]/15 border border-[#8C90C1]/30 text-[#8C90C1] mb-2 shadow-inner">
            <Film className="h-7 w-7" />
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#8C90C1]">CMC FILMS STUDIO</p>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            {isSetup ? 'Set up administrator' : 'Admin Console Login'}
          </h1>
          <p className="text-xs text-slate-400">
            {isSetup
              ? 'Create the only initial administrator account for this studio.'
              : 'Sign in to securely manage your studio content.'}
          </p>
        </div>

        {setupState === 'checking' && <p className="text-center text-sm text-slate-400 py-8">Checking secure setup…</p>}

        {setupState === 'unavailable' && (
          <div className="space-y-4 text-center py-4">
            <p className="text-sm text-red-300">{error}</p>
            <button type="button" onClick={() => void checkSetup()} className="text-sm font-semibold text-[#AEB2E8] hover:text-white">
              Try again
            </button>
          </div>
        )}

        {(setupState === 'required' || setupState === 'complete') && (
          <>
            {error && (
              <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs text-center font-semibold">{error}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {isSetup && (
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Full name</label>
                  <div className="relative">
                    <UserRound className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      minLength={2}
                      maxLength={80}
                      autoComplete="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Email address</label>
                <div className="relative">
                  <Mail className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    autoComplete={isSetup ? 'email' : 'username'}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="name@company.com"
                    className={inputClass}
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
                    autoComplete={isSetup ? 'new-password' : 'current-password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-[#1A1E2E] text-sm text-white pl-10 pr-10 py-3 rounded-xl border border-[#2B3147] focus:outline-none focus:border-[#8C90C1] transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {isSetup && (
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Confirm password</label>
                  <div className="relative">
                    <Lock className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={(event) => setConfirmPassword(event.target.value)}
                      placeholder="Re-enter your password"
                      className={inputClass}
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-[#8C90C1] hover:bg-[#787CAE] text-white text-sm font-semibold py-3.5 rounded-xl shadow-lg shadow-[#8C90C1]/25 transition-all duration-200 active:scale-95 disabled:opacity-50"
              >
                <span>{isLoading ? 'Please wait…' : submitLabel}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
