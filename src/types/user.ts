export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  // Add other user fields as needed
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
