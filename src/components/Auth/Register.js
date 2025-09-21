import React, { useState } from 'react';
import { Building, User, Mail, Lock, Phone, MapPin, Crown } from 'lucide-react';

const Register = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    salonName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.salonName.trim()) {
      newErrors.salonName = 'Название салона обязательно';
    }

    if (!formData.ownerName.trim()) {
      newErrors.ownerName = 'Имя владельца обязательно';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Некорректный email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Телефон обязателен';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Адрес обязателен';
    }

    if (!formData.password) {
      newErrors.password = 'Пароль обязателен';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Подтвердите пароль';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://kosmobob-beauty-crm-salon-45ff.twc1.net/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          salonName: formData.salonName,
          ownerName: formData.ownerName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Регистрация успешна! Теперь войдите в систему.');
        onSwitchToLogin();
      } else {
        setErrors({ submit: data.message || 'Ошибка регистрации' });
      }
    } catch (error) {
      console.error('Registration error:', error);
      setErrors({ submit: 'Ошибка соединения с сервером' });
    } finally {
      setIsLoading(false);
    }
  };

  const InputField = ({ icon: Icon, type = "text", name, placeholder, value, onChange, error }) => (
    <div className="space-y-2">
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full pl-10 pr-4 py-3 bg-white/[0.05] border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
            error 
              ? 'border-red-500/50 focus:ring-red-500/50' 
              : 'border-white/[0.12] focus:ring-blue-500/50 focus:border-blue-500/50'
          }`}
        />
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Glass Card */}
        <div className="relative bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] rounded-2xl shadow-2xl p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent rounded-2xl"></div>
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white">Beauty CRM</h1>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">Регистрация салона</h2>
              <p className="text-gray-400 text-sm">Создайте аккаунт для вашего салона красоты</p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField
                icon={Building}
                name="salonName"
                placeholder="Название салона"
                value={formData.salonName}
                onChange={handleChange}
                error={errors.salonName}
              />

              <InputField
                icon={User}
                name="ownerName"
                placeholder="Имя владельца"
                value={formData.ownerName}
                onChange={handleChange}
                error={errors.ownerName}
              />

              <InputField
                icon={Mail}
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />

              <InputField
                icon={Phone}
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />

              <InputField
                icon={MapPin}
                name="address"
                placeholder="Адрес салона"
                value={formData.address}
                onChange={handleChange}
                error={errors.address}
              />

              <InputField
                icon={Lock}
                type="password"
                name="password"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
              />

              <InputField
                icon={Lock}
                type="password"
                name="confirmPassword"
                placeholder="Подтвердите пароль"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
              />

              {errors.submit && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 text-sm text-center">{errors.submit}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? 'Регистрация...' : 'Зарегистрировать салон'}
              </button>
            </form>

            {/* Switch to Login */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Уже есть аккаунт?{' '}
                <button
                  onClick={onSwitchToLogin}
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Войти
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          <div className="p-3 rounded-xl bg-white/[0.05] border border-white/[0.08]">
            <div className="text-2xl mb-1">📅</div>
            <div className="text-xs text-gray-400">Записи</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.05] border border-white/[0.08]">
            <div className="text-2xl mb-1">👥</div>
            <div className="text-xs text-gray-400">Клиенты</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.05] border border-white/[0.08]">
            <div className="text-2xl mb-1">📊</div>
            <div className="text-xs text-gray-400">Аналитика</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;