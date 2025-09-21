import React, { useState, useEffect } from 'react';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('login'); // 'login', 'register', 'dashboard'
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Проверяем сохраненную сессию при загрузке
  useEffect(() => {
    const savedUser = localStorage.getItem('beauty_crm_user');
    const savedToken = localStorage.getItem('beauty_crm_token');
    
    if (savedUser && savedToken) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setCurrentView('dashboard');
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('beauty_crm_user');
        localStorage.removeItem('beauty_crm_token');
      }
    }
    
    setIsLoading(false);
  }, []);

  const handleLoginSuccess = (userData, token) => {
    setUser(userData);
    localStorage.setItem('beauty_crm_user', JSON.stringify(userData));
    localStorage.setItem('beauty_crm_token', token);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('beauty_crm_user');
    localStorage.removeItem('beauty_crm_token');
    setCurrentView('login');
  };

  const switchToRegister = () => {
    setCurrentView('register');
  };

  const switchToLogin = () => {
    setCurrentView('login');
  };

  // Показываем загрузку пока проверяем сессию
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 flex items-center justify-center">
        <div className="relative bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] rounded-2xl shadow-xl p-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-white text-lg">Загрузка Beauty CRM...</span>
          </div>
        </div>
      </div>
    );
  }

  // Рендерим соответствующий компонент
  switch (currentView) {
    case 'register':
      return <Register onSwitchToLogin={switchToLogin} />;
    
    case 'dashboard':
      return <Dashboard user={user} onLogout={handleLogout} />;
    
    case 'login':
    default:
      return (
        <Login 
          onLoginSuccess={handleLoginSuccess}
          onSwitchToRegister={switchToRegister}
        />
      );
  }
}

export default App;