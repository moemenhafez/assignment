// src/App.tsx
import React, { useState } from 'react';
import AuthComponent from './layout/AuthLayout';
import MainLayout from './layout/MainLayout';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = (email: string, password: string) => {
    // Placeholder authentication logic
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  if (isLoggedIn) {
    return <MainLayout />;
  } else {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Main Content */}
        <main className="flex items-center justify-center py-10">
          <AuthComponent onSubmit={handleLogin} />
        </main>
      </div>
    );
  }
};

export default App;