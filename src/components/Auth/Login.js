import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../App';
import { Scissors, Eye, EyeOff, Sun, Moon } from 'lucide-react';

const Login = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || true;
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const success = await login(formData.email, formData.password);
    if (!success) {
      alert('Неверный email или пароль');
      setLoading(false);
    }
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const fillDemoData = () => {
    setFormData({
      email: 'demo@salon.com',
      password: 'demo123'
    });
  };

  // Темы
  const themes = {
    dark: {
      bg: 'from-slate-900 via-gray-900 to-slate-900',
      glass: 'bg-white/[0.08] border-white/[0.12]',
      text: 'text-white',
      textSecondary: 'text-gray-400',
      textMuted: 'text-gray-500',
      icon: 'text-gray-300',
      button: 'hover:bg-white/[0.08]',
      border: 'border-white/[0.08]',
      input: 'bg-white/[0.05] border-white/[0.12] text-white placeholder-gray-400',
      card: 'bg-white/[0.08] border-white/[0.12]'
    },
    light: {
      bg: 'from-gray-50 via-white to-gray-100',
      glass: 'bg-white/90 border-gray-200/50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      textMuted: 'text-gray-500',
      icon: 'text-gray-600',
      button: 'hover:bg-gray-100',
      border: 'border-gray-200',
      input: 'bg-white border-gray-200 text-gray-900 placeholder-gray-400',
      card: 'bg-white border-gray-200'
    }
  };

  const theme = themes[isDarkMode ? 'dark' : 'light'];

  const GlassPanel = ({ children, className = "" }) => (
    <div className={`relative ${theme.glass} backdrop-blur-xl border rounded-2xl shadow-xl ${className}`}>
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-white/[0.06] to-transparent' : 'bg-gradient-to-br from-white/60 to-transparent'} rounded-2xl`} />
      <div className={`absolute top-0 left-0 w-full h-px ${isDarkMode ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-300/30 to-transparent'}`} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} flex items-center justify-center p-4`}>
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 p-3 ${theme.glass} backdrop-blur-xl border rounded-xl transition-all duration-300 hover:scale-105`}
        title={isDarkMode ? 'Светлая тема' : 'Темная тема'}
      >
        {isDarkMode ? (
          <Sun className={`w-5 h-5 ${theme.icon}`} />
        ) : (
          <Moon className={`w-5 h-5 ${theme.icon}`} />
        )}
      </button>

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className={`p-4 ${theme.glass} rounded-2xl border backdrop-blur-xl`}>
              <Scissors className={`w-8 h-8 ${theme.icon}`} />
            </div>
          </div>
          <h1 className={`text-3xl font-bold ${theme.text} mb-2`}>Beauty CRM</h1>
          <p className={theme.textSecondary}>Войдите в свой аккаунт салона красоты</p>
        </div>

        {/* Login Form */}
        <GlassPanel className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className={`block text-sm font-medium ${theme.textSecondary} mb-2`}>
                Email адрес
              </label>
              <input
                type="email"
                name="email"
                className={`w-full px-4 py-3 ${theme.input} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200`}
                placeholder="salon@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className={`block text-sm font-medium ${theme.textSecondary} mb-2`}>
                Пароль
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className={`w-full px-4 py-3 pr-12 ${theme.input} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200`}
                  placeholder="Введите пароль"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 ${theme.button} rounded transition-colors`}
                >
                  {showPassword ? (
                    <EyeOff className={`w-4 h-4 ${theme.textSecondary}`} />
                  ) : (
                    <Eye className={`w-4 h-4 ${theme.textSecondary}`} />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Вход в систему...</span>
                </div>
              ) : (
                'Войти'
              )}
            </button>
          </form>
        </GlassPanel>

        {/* Registration Link */}
        <div className="text-center mt-6">
          <p className={theme.textSecondary}>
            Нет аккаунта?{' '}
            <Link 
              to="/register" 
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Зарегистрировать салон
            </Link>
          </p>
        </div>

        {/* Demo Access */}
        <GlassPanel className="p-6 mt-6">
          <h3 className={`text-sm font-semibold ${theme.text} mb-3`}>Демо доступ:</h3>
          <div className={`space-y-2 mb-4 text-sm ${theme.textSecondary}`}>
            <p><strong className={theme.text}>Email:</strong> demo@salon.com</p>
            <p><strong className={theme.text}>Пароль:</strong> demo123</p>
          </div>
          <button
            type="button"
            onClick={fillDemoData}
            className={`w-full py-2 px-4 ${theme.button} border ${theme.border} rounded-lg text-sm font-medium ${theme.text} transition-all duration-200 hover:scale-[1.02]`}
          >
            Заполнить демо данными
          </button>
        </GlassPanel>
      </div>
    </div>
  );
};

export default Login;