import React, { useState, useEffect } from 'react';
import './App.css';

// Простая версия без Tailwind - только обычный CSS
function App() {
  const [currentView, setCurrentView] = useState('login');
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    // Демо-логика входа
    if (email === 'demo@salon.com' && password === 'demo123') {
      setUser({ email, name: 'Демо Салон' });
      setCurrentView('dashboard');
    } else {
      alert('Используйте демо-данные: demo@salon.com / demo123');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('login');
  };

  if (currentView === 'login') {
    return (
      <div className="app">
        <div className="login-container">
          <div className="login-card">
            <h1>Beauty CRM</h1>
            <p>Система управления салоном красоты</p>
            
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" placeholder="demo@salon.com" required />
              </div>
              
              <div className="form-group">
                <label>Пароль:</label>
                <input type="password" name="password" placeholder="demo123" required />
              </div>
              
              <button type="submit" className="login-btn">Войти в систему</button>
            </form>
            
            <div className="demo-info">
              <h3>Демо-доступ:</h3>
              <p>Email: demo@salon.com</p>
              <p>Пароль: demo123</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'dashboard') {
    return (
      <div className="app">
        <header className="header">
          <h1>Beauty CRM - Dashboard</h1>
          <div className="user-info">
            <span>Добро пожаловать, {user.name}!</span>
            <button onClick={handleLogout} className="logout-btn">Выйти</button>
          </div>
        </header>

        <div className="dashboard">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Записи сегодня</h3>
              <div className="stat-value">24</div>
              <div className="stat-change">+12%</div>
            </div>
            
            <div className="stat-card">
              <h3>Выручка за день</h3>
              <div className="stat-value">₽47,200</div>
              <div className="stat-change">+8.5%</div>
            </div>
            
            <div className="stat-card">
              <h3>Новые клиенты</h3>
              <div className="stat-value">8</div>
              <div className="stat-change">+15%</div>
            </div>
            
            <div className="stat-card">
              <h3>Загрузка салона</h3>
              <div className="stat-value">87%</div>
              <div className="stat-change">+3%</div>
            </div>
          </div>

          <div className="appointments-section">
            <h2>Записи на сегодня</h2>
            <div className="appointments-list">
              <div className="appointment-card">
                <div className="appointment-time">09:00</div>
                <div className="appointment-info">
                  <h4>Анна Светлова</h4>
                  <p>Окрашивание + стрижка</p>
                  <p>Мастер: Елена Кузнецова</p>
                </div>
                <div className="appointment-price">₽8,500</div>
              </div>
              
              <div className="appointment-card">
                <div className="appointment-time">11:30</div>
                <div className="appointment-info">
                  <h4>София Морозова</h4>
                  <p>Маникюр + дизайн</p>
                  <p>Мастер: Мария Петрова</p>
                </div>
                <div className="appointment-price">₽3,200</div>
              </div>
              
              <div className="appointment-card">
                <div className="appointment-time">14:00</div>
                <div className="appointment-info">
                  <h4>Виктория Романова</h4>
                  <p>Укладка</p>
                  <p>Мастер: Анна Волкова</p>
                </div>
                <div className="appointment-price">₽2,500</div>
              </div>
            </div>
          </div>

          <div className="demo-note">
            <h3>🎯 Это демо-версия Beauty CRM</h3>
            <p>Полная система включает:</p>
            <ul>
              <li>Управление клиентами и записями</li>
              <li>Аналитику и отчеты</li>
              <li>SMS/Email уведомления</li>
              <li>Мобильное приложение</li>
              <li>Интеграции с платежными системами</li>
            </ul>
            <p><strong>Контакт:</strong> tralom@yandex.ru</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default App;