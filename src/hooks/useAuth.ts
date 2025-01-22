import * as React from 'react';

interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  loading: boolean;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: any | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, phone: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = React.createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<AuthState>({
    isAuthenticated: false,
    user: null,
    loading: true
  });

  const login = async (email: string, password: string) => {
    try {
      // TODO: Implement actual authentication
      setState({ isAuthenticated: true, user: { email }, loading: false });
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const register = async (email: string, phone: string, password: string) => {
    try {
      // TODO: Implement actual registration
      setState({ isAuthenticated: true, user: { email, phone }, loading: false });
    } catch (error) {
      throw new Error('Registration failed');
    }
  };

  const logout = async () => {
    setState({ isAuthenticated: false, user: null, loading: false });
  };

  return (
    <AuthContext.Provider 
      value={{ 
        ...state,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}