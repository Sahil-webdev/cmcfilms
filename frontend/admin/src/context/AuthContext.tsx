import React, { createContext, useContext, useEffect, useState } from 'react';
import { API_URL } from '../lib/environment';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

type AuthResult = { success: boolean; message?: string };

interface AuthContextType {
  isAuthenticated: boolean;
  isAuthReady: boolean;
  user: UserProfile | null;
  token: string | null;
  login: (email: string, password: string) => Promise<AuthResult>;
  registerFirstAdmin: (name: string, email: string, password: string) => Promise<AuthResult>;
  logout: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const TOKEN_KEY = 'cmc_admin_token';
const USER_KEY = 'cmc_admin_user';

const readResponse = async (response: Response) => {
  try {
    return await response.json();
  } catch {
    return {};
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(TOKEN_KEY));
  const [user, setUser] = useState<UserProfile | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  const clearSession = () => {
    setIsAuthenticated(false);
    setUser(null);
    setToken(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  };

  const saveSession = (nextToken: string, nextUser: UserProfile) => {
    setToken(nextToken);
    setUser(nextUser);
    setIsAuthenticated(true);
    localStorage.setItem(TOKEN_KEY, nextToken);
    localStorage.setItem(USER_KEY, JSON.stringify(nextUser));
  };

  useEffect(() => {
    const validateStoredSession = async () => {
      const savedToken = localStorage.getItem(TOKEN_KEY);
      if (!savedToken) {
        setIsAuthReady(true);
        return;
      }

      try {
        const response = await fetch(`${API_URL}/api/auth/me`, {
          headers: { Authorization: `Bearer ${savedToken}` },
        });
        const data = await readResponse(response);
        if (response.ok && data.success && data.user) {
          saveSession(savedToken, data.user as UserProfile);
        } else {
          clearSession();
        }
      } catch {
        // Never trust a cached login if the API cannot validate it.
        clearSession();
      } finally {
        setIsAuthReady(true);
      }
    };

    void validateStoredSession();
  }, []);

  const authenticate = async (endpoint: string, payload: Record<string, string>): Promise<AuthResult> => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await readResponse(response);
      if (response.ok && data.success && data.token && data.user) {
        saveSession(data.token as string, data.user as UserProfile);
        return { success: true };
      }
      return { success: false, message: data.message || 'Unable to sign in. Please try again.' };
    } catch {
      return { success: false, message: 'Could not reach the secure server. Please try again.' };
    }
  };

  const login = (email: string, password: string) => authenticate('/api/auth/login', { email, password });
  const registerFirstAdmin = (name: string, email: string, password: string) =>
    authenticate('/api/auth/register-first-admin', { name, email, password });

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isAuthReady,
        user,
        token,
        login,
        registerFirstAdmin,
        logout: clearSession,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
