import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '20px',
          textAlign: 'center',
          maxWidth: '400px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ color: '#333', marginBottom: '20px' }}>💎 Beauty CRM</h1>
          <p style={{ color: '#666', marginBottom: '30px' }}>
            Система управления салоном красоты
          </p>
          
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
            <input 
              type="email" 
              defaultValue="demo@salon.com"
              style={{ 
                width: '100%', 
                padding: '10px', 
                border: '1px solid #ddd', 
                borderRadius: '5px' 
              }} 
            />
          </div>
          
          <div style={{ marginBottom: '30px', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Пароль:</label>
            <input 
              type="password" 
              defaultValue="demo123"
              style={{ 
                width: '100%', 
                padding: '10px', 
                border: '1px solid #ddd', 
                borderRadius: '5px' 
              }} 
            />
          </div>
          
          <button 
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: '15px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Войти в систему
          </button>
          
          <div style={{
            marginTop: '20px',
            padding: '15px',
            background: '#f0f0f0',
            borderRadius: '10px',
            fontSize: '14px'
          }}>
            <strong>Демо-доступ:</strong><br/>
            Email: demo@salon.com<br/>
            Пароль: demo123
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{
        background: 'white',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ color: '#333' }}>💎 Beauty CRM - Dashboard</h1>
        <button 
          onClick={() => setIsLoggedIn(false)}
          style={{
            padding: '10px 20px',
            background: '#ff6b6b',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Выйти
        </button>
      </header>

      <main style={{ padding: '30px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>ЗАПИСИ СЕГОДНЯ</h3>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>24</div>
            <div style={{ color: '#22c55e', fontSize: '14px' }}>+12%</div>
          </div>

          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>ВЫРУЧКА ЗА ДЕНЬ</h3>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>₽47,200</div>
            <div style={{ color: '#22c55e', fontSize: '14px' }}>+8.5%</div>
          </div>

          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>НОВЫЕ КЛИЕНТЫ</h3>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>8</div>
            <div style={{ color: '#22c55e', fontSize: '14px' }}>+15%</div>
          </div>

          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>ЗАГРУЗКА САЛОНА</h3>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>87%</div>
            <div style={{ color: '#22c55e', fontSize: '14px' }}>+3%</div>
          </div>
        </div>

        <div style={{
          background: 'white',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ marginBottom: '20px' }}>📅 Записи на сегодня</h2>
          
          {[
            { time: '09:00', client: 'Анна Светлова', service: 'Окрашивание + стрижка', master: 'Елена', price: 8500 },
            { time: '11:30', client: 'София Морозова', service: 'Маникюр + дизайн', master: 'Мария', price: 3200 },
            { time: '14:00', client: 'Виктория Романова', service: 'Укладка', master: 'Анна', price: 2500 }
          ].map((appointment, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              padding: '15px',
              background: '#f8f9fa',
              borderRadius: '10px',
              marginBottom: '10px',
              borderLeft: '4px solid #667eea'
            }}>
              <div style={{ 
                fontWeight: 'bold', 
                color: '#667eea', 
                marginRight: '20px',
                minWidth: '60px'
              }}>
                {appointment.time}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{appointment.client}</div>
                <div style={{ color: '#666', fontSize: '14px' }}>{appointment.service}</div>
                <div style={{ color: '#666', fontSize: '14px' }}>Мастер: {appointment.master}</div>
              </div>
              <div style={{ 
                fontWeight: 'bold', 
                color: '#22c55e',
                fontSize: '18px'
              }}>
                ₽{appointment.price.toLocaleString()}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          color: 'white',
          padding: '30px',
          borderRadius: '15px',
          textAlign: 'center',
          marginTop: '30px'
        }}>
          <h3>🎯 Демо-версия Beauty CRM</h3>
          <p style={{ margin: '20px 0' }}>
            Полная система включает: управление клиентами, SMS-уведомления, 
            аналитику, интеграции с платежными системами
          </p>
          <p><strong>📧 Контакт:</strong> tralom@yandex.ru</p>
        </div>
      </main>
    </div>
  );
}

export default App;