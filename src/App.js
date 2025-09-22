import React, { useState, useEffect } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Обновляем время каждую секунду
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Стили для glass morphism эффектов
  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    borderRadius: '20px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
  };

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    transition: 'all 0.3s ease'
  };

  if (!isLoggedIn) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Floating elements background */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '80px',
          height: '80px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '70%',
          right: '15%',
          width: '60px',
          height: '60px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>
        
        <div style={{
          ...glassStyle,
          padding: '50px',
          textAlign: 'center',
          maxWidth: '450px',
          width: '90%',
          position: 'relative'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '10px'
          }}>
            💎 Beauty CRM
          </div>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.9)', 
            marginBottom: '40px',
            fontSize: '1.1rem'
          }}>
            Система управления салоном красоты
          </p>
          
          <div style={{ marginBottom: '25px', textAlign: 'left' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px',
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: '500'
            }}>Email:</label>
            <input 
              type="email" 
              defaultValue="demo@salon.com"
              style={{ 
                width: '100%', 
                padding: '15px', 
                border: '1px solid rgba(255, 255, 255, 0.3)', 
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '16px',
                outline: 'none',
                backdropFilter: 'blur(5px)'
              }} 
            />
          </div>
          
          <div style={{ marginBottom: '35px', textAlign: 'left' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px',
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: '500'
            }}>Пароль:</label>
            <input 
              type="password" 
              defaultValue="demo123"
              style={{ 
                width: '100%', 
                padding: '15px', 
                border: '1px solid rgba(255, 255, 255, 0.3)', 
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '16px',
                outline: 'none',
                backdropFilter: 'blur(5px)'
              }} 
            />
          </div>
          
          <button 
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: '18px',
              background: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.4)';
            }}
          >
            🚀 Войти в систему
          </button>
          
          <div style={{
            marginTop: '25px',
            padding: '20px',
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '12px',
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{ marginBottom: '10px', fontWeight: '600' }}>🎯 Демо-доступ:</div>
            <div>Email: demo@salon.com</div>
            <div>Пароль: demo123</div>
          </div>
        </div>

        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      position: 'relative'
    }}>
      <header style={{
        ...glassStyle,
        margin: '20px',
        padding: '25px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white'
      }}>
        <div>
          <h1 style={{ 
            margin: 0,
            fontSize: '1.8rem',
            fontWeight: '700'
          }}>💎 Beauty CRM</h1>
          <div style={{ 
            fontSize: '14px', 
            opacity: 0.8,
            marginTop: '5px'
          }}>
            {currentTime.toLocaleDateString('ru-RU')} • {currentTime.toLocaleTimeString('ru-RU')}
          </div>
        </div>
        <button 
          onClick={() => setIsLoggedIn(false)}
          style={{
            padding: '12px 24px',
            background: 'rgba(255, 107, 107, 0.8)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: '500',
            backdropFilter: 'blur(5px)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 107, 107, 1)';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 107, 107, 0.8)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Выйти
        </button>
      </header>

      <main style={{ padding: '0 20px 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px',
          marginBottom: '40px'
        }}>
          {[
            { title: 'ЗАПИСИ СЕГОДНЯ', value: '24', change: '+12%', icon: '📅', color: '#4ade80' },
            { title: 'ВЫРУЧКА ЗА ДЕНЬ', value: '₽47,200', change: '+8.5%', icon: '💰', color: '#22c55e' },
            { title: 'НОВЫЕ КЛИЕНТЫ', value: '8', change: '+15%', icon: '👥', color: '#3b82f6' },
            { title: 'ЗАГРУЗКА САЛОНА', value: '87%', change: '+3%', icon: '⚡', color: '#f59e0b' }
          ].map((stat, index) => (
            <div 
              key={index}
              style={{
                ...glassStyle,
                padding: '30px',
                textAlign: 'center',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                ...(hoveredCard === index ? cardHoverStyle : {})
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={{ 
                fontSize: '2rem', 
                marginBottom: '15px'
              }}>
                {stat.icon}
              </div>
              <h3 style={{ 
                fontSize: '12px', 
                marginBottom: '15px',
                opacity: 0.8,
                letterSpacing: '1px',
                fontWeight: '600'
              }}>
                {stat.title}
              </h3>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold', 
                marginBottom: '10px'
              }}>
                {stat.value}
              </div>
              <div style={{ 
                color: stat.color, 
                fontSize: '14px',
                fontWeight: '600'
              }}>
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          ...glassStyle,
          padding: '35px',
          color: 'white'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '30px'
          }}>
            <h2 style={{ 
              margin: 0,
              fontSize: '1.5rem',
              fontWeight: '700'
            }}>📅 Записи на сегодня</h2>
            <div style={{
              marginLeft: 'auto',
              padding: '8px 16px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              3 записи
            </div>
          </div>
          
          {[
            { time: '09:00', client: 'Анна Светлова', service: 'Окрашивание + стрижка', master: 'Елена Кузнецова', price: 8500, status: 'confirmed', avatar: '👩🏼‍🦰' },
            { time: '11:30', client: 'София Морозова', service: 'Маникюр + дизайн', master: 'Мария Петрова', price: 3200, status: 'in-progress', avatar: '👩🏻‍🦱' },
            { time: '14:00', client: 'Виктория Романова', service: 'Укладка', master: 'Анна Волкова', price: 2500, status: 'waiting', avatar: '👩🏻' }
          ].map((appointment, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              marginBottom: '15px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              e.target.style.transform = 'translateX(5px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'translateX(0)';
            }}
            >
              <div style={{
                fontSize: '2rem',
                marginRight: '15px'
              }}>
                {appointment.avatar}
              </div>
              <div style={{ 
                fontWeight: 'bold', 
                marginRight: '20px',
                minWidth: '70px',
                fontSize: '1.1rem'
              }}>
                {appointment.time}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ 
                  fontWeight: 'bold', 
                  marginBottom: '8px',
                  fontSize: '1.1rem'
                }}>
                  {appointment.client}
                </div>
                <div style={{ 
                  opacity: 0.8, 
                  fontSize: '14px',
                  marginBottom: '4px'
                }}>
                  {appointment.service}
                </div>
                <div style={{ 
                  opacity: 0.7, 
                  fontSize: '13px'
                }}>
                  Мастер: {appointment.master}
                </div>
              </div>
              <div style={{
                textAlign: 'right'
              }}>
                <div style={{ 
                  fontWeight: 'bold', 
                  fontSize: '1.2rem',
                  marginBottom: '5px'
                }}>
                  ₽{appointment.price.toLocaleString()}
                </div>
                <div style={{
                  padding: '4px 12px',
                  borderRadius: '15px',
                  fontSize: '11px',
                  fontWeight: '600',
                  background: appointment.status === 'confirmed' ? 'rgba(34, 197, 94, 0.2)' : 
                            appointment.status === 'in-progress' ? 'rgba(59, 130, 246, 0.2)' : 
                            'rgba(245, 158, 11, 0.2)',
                  color: appointment.status === 'confirmed' ? '#22c55e' : 
                         appointment.status === 'in-progress' ? '#3b82f6' : 
                         '#f59e0b'
                }}>
                  {appointment.status === 'confirmed' ? 'Подтверждена' : 
                   appointment.status === 'in-progress' ? 'В процессе' : 
                   'Ожидание'}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          ...glassStyle,
          color: 'white',
          padding: '40px',
          textAlign: 'center',
          marginTop: '30px'
        }}>
          <h3 style={{ 
            fontSize: '1.5rem',
            marginBottom: '20px',
            fontWeight: '700'
          }}>🎯 Демо-версия Beauty CRM</h3>
          <p style={{ 
            margin: '25px 0',
            fontSize: '1.1rem',
            opacity: 0.9,
            lineHeight: '1.6'
          }}>
            Полная система включает: управление клиентами, SMS-уведомления, 
            аналитику, интеграции с платежными системами, мобильное приложение
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            marginTop: '25px',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '5px' }}>📧</div>
              <div style={{ fontSize: '14px', fontWeight: '600' }}>tralom@yandex.ru</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '5px' }}>📱</div>
              <div style={{ fontSize: '14px', fontWeight: '600' }}>Мобильная версия</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '5px' }}>⚡</div>
              <div style={{ fontSize: '14px', fontWeight: '600' }}>Быстрая настройка</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;