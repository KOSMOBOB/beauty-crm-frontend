import React, { useState, useEffect } from 'react';
import { 
  Calendar, Users, TrendingUp, DollarSign, Settings, Bell, Search,
  MoreHorizontal, Filter, Plus, ArrowUpRight, ArrowDownRight,
  Clock, Star, User, Eye, Edit, BarChart3, PieChart, Activity,
  Building, Menu, X, LogOut
} from 'lucide-react';

const Dashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Mock business data - в реальном приложении получается с API
  const businessData = {
    todayStats: {
      appointments: 12,
      revenue: 28900,
      newClients: 5,
      occupancy: 78
    },
    appointments: [
      {
        id: 1,
        time: '09:00',
        client: 'Анна Светлова',
        service: 'Стрижка + укладка',
        master: 'Елена Кузнецова',
        status: 'confirmed',
        price: 3500,
        duration: 120
      },
      {
        id: 2,
        time: '11:30',
        client: 'София Морозова',
        service: 'Маникюр',
        master: 'Мария Петрова',
        status: 'in-progress',
        price: 2200,
        duration: 90
      },
      {
        id: 3,
        time: '14:00',
        client: 'Виктория Романова',
        service: 'Окрашивание',
        master: 'Анна Волкова',
        status: 'waiting',
        price: 6500,
        duration: 180
      }
    ],
    masters: [
      {
        id: 1,
        name: 'Елена Кузнецова',
        speciality: 'Стилист-парикмахер',
        avatar: 'ЕК',
        rating: 4.9,
        appointmentsToday: 6,
        revenue: 15800,
        efficiency: 92
      },
      {
        id: 2,
        name: 'Мария Петрова', 
        speciality: 'Мастер маникюра',
        avatar: 'МП',
        rating: 4.8,
        appointmentsToday: 8,
        revenue: 12100,
        efficiency: 87
      }
    ]
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const GlassPanel = ({ children, className = "" }) => (
    <div className={`relative bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] rounded-2xl shadow-xl ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent rounded-2xl" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );

  const StatCard = ({ title, value, change, trend, icon: Icon, format = 'number' }) => {
    const isPositive = trend === 'up';
    const formattedValue = format === 'currency' ? `₽${value.toLocaleString()}` : 
                          format === 'percentage' ? `${value}%` : value;

    return (
      <GlassPanel className="p-6 hover:bg-white/[0.12] transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 rounded-xl bg-white/[0.08] border border-white/[0.12]">
            <Icon className="w-5 h-5 text-gray-300" />
          </div>
          <div className={`flex items-center space-x-1 text-sm font-medium ${
            isPositive ? 'text-green-400' : 'text-red-400'
          }`}>
            {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
            <span>{change}</span>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white mb-1">{formattedValue}</h3>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
      </GlassPanel>
    );
  };

  const AppointmentCard = ({ appointment }) => {
    const getStatusColor = (status) => {
      switch(status) {
        case 'confirmed': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
        case 'in-progress': return 'bg-green-500/20 text-green-300 border-green-500/30';
        case 'waiting': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
        case 'completed': return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
        default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
      }
    };

    const getStatusText = (status) => {
      switch(status) {
        case 'confirmed': return 'Подтверждена';
        case 'in-progress': return 'В процессе';
        case 'waiting': return 'Ожидание';
        case 'completed': return 'Завершена';
        default: return 'Неизвестно';
      }
    };

    return (
      <GlassPanel className="p-4 hover:bg-white/[0.12] transition-all duration-200">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center">
              <User className="w-5 h-5 text-gray-300" />
            </div>
            <div>
              <h4 className="font-medium text-white">{appointment.client}</h4>
              <p className="text-sm text-gray-400">{appointment.time}</p>
            </div>
          </div>
          <div className={`px-2.5 py-1 rounded-lg border text-xs font-medium ${getStatusColor(appointment.status)}`}>
            {getStatusText(appointment.status)}
          </div>
        </div>
        
        <div className="space-y-2 mb-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Услуга:</span>
            <span className="text-white font-medium">{appointment.service}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Мастер:</span>
            <span className="text-white">{appointment.master}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Стоимость:</span>
            <span className="text-white font-semibold">₽{appointment.price.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
          <div className="text-xs text-gray-400">
            Длительность: {appointment.duration} мин
          </div>
          <div className="flex space-x-2">
            <button className="p-1.5 hover:bg-white/[0.08] rounded-lg transition-colors">
              <Eye className="w-4 h-4 text-gray-400" />
            </button>
            <button className="p-1.5 hover:bg-white/[0.08] rounded-lg transition-colors">
              <Edit className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </GlassPanel>
    );
  };

  const MasterCard = ({ master }) => (
    <GlassPanel className="p-4 hover:bg-white/[0.12] transition-all duration-200">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center">
          <span className="text-lg font-medium text-white">{master.avatar}</span>
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-white">{master.name}</h3>
          <p className="text-sm text-gray-400">{master.speciality}</p>
          <div className="flex items-center space-x-1 mt-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-white">{master.rating}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="text-center p-2 rounded-lg bg-white/[0.05]">
          <div className="text-lg font-semibold text-white">{master.appointmentsToday}</div>
          <div className="text-xs text-gray-400">записей</div>
        </div>
        <div className="text-center p-2 rounded-lg bg-white/[0.05]">
          <div className="text-lg font-semibold text-white">₽{master.revenue.toLocaleString()}</div>
          <div className="text-xs text-gray-400">выручка</div>
        </div>
      </div>

      <div className="mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-400">Эффективность</span>
          <span className="text-xs text-white">{master.efficiency}%</span>
        </div>
        <div className="h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-700"
            style={{ width: `${master.efficiency}%` }}
          />
        </div>
      </div>
    </GlassPanel>
  );

  const sidebarItems = [
    { id: 'dashboard', name: 'Дашборд', icon: BarChart3 },
    { id: 'appointments', name: 'Записи', icon: Calendar },
    { id: 'clients', name: 'Клиенты', icon: Users },
    { id: 'masters', name: 'Мастера', icon: User },
    { id: 'analytics', name: 'Аналитика', icon: PieChart },
    { id: 'settings', name: 'Настройки', icon: Settings },
  ];

  const Sidebar = () => (
    <div className={`fixed inset-y-0 left-0 w-64 p-4 z-50 transform transition-transform duration-300 ${
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:translate-x-0`}>
      <GlassPanel className="h-full">
        {/* Logo */}
        <div className="flex items-center justify-between px-6 py-8 border-b border-white/[0.08]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Building className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white">Beauty CRM</h1>
              <p className="text-xs text-gray-400">{user?.salonName || 'Салон красоты'}</p>
            </div>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-1 hover:bg-white/[0.08] rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6 flex-1">
          <ul className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-white/[0.12] text-white border border-white/[0.12]'
                        : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Menu */}
        <div className="px-4 py-4 border-t border-white/[0.08]">
          <button
            onClick={onLogout}
            className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all duration-200"
          >
            <LogOut className="w-5 h-5" />
            <span>Выйти</span>
          </button>
        </div>
      </GlassPanel>
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Записи сегодня"
          value={businessData.todayStats.appointments}
          change="+12%"
          trend="up"
          icon={Calendar}
        />
        <StatCard
          title="Выручка за день"
          value={businessData.todayStats.revenue}
          change="+8.5%"
          trend="up"
          icon={DollarSign}
          format="currency"
        />
        <StatCard
          title="Новые клиенты"
          value={businessData.todayStats.newClients}
          change="+15%"
          trend="up"
          icon={Users}
        />
        <StatCard
          title="Загрузка салона"
          value={businessData.todayStats.occupancy}
          change="+3%"
          trend="up"
          icon={Activity}
          format="percentage"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Appointments */}
        <div className="lg:col-span-2">
          <GlassPanel className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Записи на сегодня</h2>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-white/[0.08] rounded-lg transition-colors">
                  <Filter className="w-4 h-4 text-gray-400" />
                </button>
                <button className="p-2 hover:bg-white/[0.08] rounded-lg transition-colors">
                  <Plus className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {businessData.appointments.map((appointment) => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
              ))}
            </div>
          </GlassPanel>
        </div>

        {/* Masters */}
        <div>
          <GlassPanel className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Мастера</h2>
              <button className="p-2 hover:bg-white/[0.08] rounded-lg transition-colors">
                <Plus className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <div className="space-y-4">
              {businessData.masters.map((master) => (
                <MasterCard key={master.id} master={master} />
              ))}
            </div>
          </GlassPanel>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'appointments':
        return (
          <GlassPanel className="p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Все записи</h2>
            <div className="space-y-4">
              {businessData.appointments.map((appointment) => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
              ))}
            </div>
          </GlassPanel>
        );
      case 'clients':
        return (
          <GlassPanel className="p-6">
            <h2 className="text-lg font-semibold text-white mb-4">База клиентов</h2>
            <p className="text-gray-400">Раздел в разработке...</p>
          </GlassPanel>
        );
      case 'masters':
        return (
          <GlassPanel className="p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Мастера салона</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {businessData.masters.map((master) => (
                <MasterCard key={master.id} master={master} />
              ))}
            </div>
          </GlassPanel>
        );
      case 'analytics':
        return (
          <GlassPanel className="p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Аналитика</h2>
            <p className="text-gray-400">Раздел в разработке...</p>
          </GlassPanel>
        );
      case 'settings':
        return (
          <GlassPanel className="p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Настройки</h2>
            <p className="text-gray-400">Раздел в разработке...</p>
          </GlassPanel>
        );
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="p-4 lg:p-6">
          <GlassPanel className="p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="lg:hidden p-2 hover:bg-white/[0.08] rounded-lg transition-colors"
                >
                  <Menu className="w-5 h-5 text-gray-400" />
                </button>
                
                <div>
                  <h1 className="text-xl lg:text-2xl font-semibold text-white">Панель управления</h1>
                  <p className="text-gray-400 text-sm">
                    {currentTime.toLocaleDateString('ru-RU', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 lg:space-x-4">
                {/* Search - hidden on mobile */}
                <div className="relative hidden lg:block">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Поиск..."
                    className="pl-10 pr-4 py-2 bg-white/[0.05] border border-white/[0.12] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent backdrop-blur-sm"
                  />
                </div>

                {/* Notifications */}
                <button className="relative p-2 hover:bg-white/[0.08] rounded-lg transition-colors">
                  <Bell className="w-5 h-5 text-gray-400" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* User Menu */}
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-300" />
                  </div>
                  <div className="hidden lg:block text-sm">
                    <div className="font-medium text-white">{user?.ownerName || 'Владелец'}</div>
                    <div className="text-gray-400">Администратор</div>
                  </div>
                </div>
              </div>
            </div>
          </GlassPanel>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;