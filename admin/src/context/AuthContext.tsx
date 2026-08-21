import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserProfile | null;
  token: string | null;
  login: (email: string, pass: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('cmc_admin_token') ? true : false;
  });

  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('cmc_admin_token');
  });

  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('cmc_admin_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [activeTab, setActiveTab] = useState<string>('dashboard');

  const login = async (email: string, pass: string) => {
    try {
      // Attempt backend API call first
      const res = await fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: pass }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success && data.token) {
          setToken(data.token);
          setUser(data.user);
          setIsAuthenticated(true);
          localStorage.setItem('cmc_admin_token', data.token);
          localStorage.setItem('cmc_admin_user', JSON.stringify(data.user));
          return { success: true };
        }
      }
    } catch (e) {
      console.log('Backend not active, using built-in demo auth fallback');
    }

    // Fallback instant verification for Demo / Offline
    if (email.trim().toLowerCase() === 'admin@cmcfilms.com' && pass === 'admin123') {
      const mockToken = 'mock_jwt_token_cmc_films_admin_2026';
      const mockUser: UserProfile = {
        id: 'cmc-director-01',
        name: 'Sahil Sharma',
        email: 'admin@cmcfilms.com',
        role: 'Founder & Creative Director',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      };

      setToken(mockToken);
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('cmc_admin_token', mockToken);
      localStorage.setItem('cmc_admin_user', JSON.stringify(mockUser));
      return { success: true };
    }

    return { success: false, message: 'Invalid credentials. Use admin@cmcfilms.com / admin123' };
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setToken(null);
    localStorage.removeItem('cmc_admin_token');
    localStorage.removeItem('cmc_admin_user');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        token,
        login,
        logout,
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
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
