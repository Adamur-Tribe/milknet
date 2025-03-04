'use client';
import { useState } from "react";
import { AuthForm } from "../../app/(auth)/components/auth-form";
import { UserType } from "../../types/auth";

export const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const handleAuthentication = (authenticated: boolean, userType: UserType) => {
    setIsAuthenticated(authenticated);
  };

  if (showAuth) {
    return <AuthForm setShowAuth={setShowAuth} onAuthenticate={handleAuthentication} />;
  }

  return (
    <header className="shadow-sm bg-gradient-to-br from-green-500 via-green-700 to-green-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <a href="/">
            <div className="text-2xl font-bold text-black text-bold">MilkNet</div>
          </a>
          <div className="space-x-6">
            <a href="/home" className="text-black hover:text-blue-900">Home</a>
            <a href="/about" className="text-black hover:text-blue-900">About</a>
            <a href="/contact" className="text-black hover:text-blue-900">Contact</a>
            {!isAuthenticated ? (
              <button
                onClick={() => setShowAuth(true)}
                className="bg-blue500/10 hover:bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg transition-all"
              >
                Sign In
              </button>
            ) : (
              <button
                onClick={() => setIsAuthenticated(false)}
                className="bg-red-500/10 hover:bg-red-500/20 text-red-400 px-4 py-2 rounded-lg transition-all"
              >
                Log Out
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};