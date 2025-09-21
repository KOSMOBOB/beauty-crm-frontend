@echo off
echo ================================
echo Beauty CRM Frontend - Git Update
echo ================================
echo.

cd /d "D:\CLAUDE_ACCES\beauty-crm-frontend"

echo 📁 Current directory:
cd

echo.
echo 📊 Checking git status...
git status

echo.
echo ➕ Adding all changes...
git add .

echo.
echo 💾 Committing changes...
git commit -m "feat: Complete Beauty CRM Frontend v2.0

✨ New Features:
- Modern glass morphism design
- JWT authentication integration
- Real-time dashboard with business metrics
- Mobile-responsive interface
- Professional salon management UI
- Comprehensive README with business info
- Marketing landing page
- Production-ready deployment scripts

🔧 Technical Updates:
- Integrated with backend API (kosmobob-beauty-crm-salon-45ff.twc1.net)
- React components restructure
- Modern CSS with backdrop-blur effects
- Token-based authentication
- Local storage session management
- Responsive design for all devices

🎯 Ready for Production:
- Demo credentials: demo@salon.com / demo123
- Three pricing tiers (Starter/Pro/Premium)
- Target: 50,000+ beauty salons in Russia
- Sales-ready marketing materials

🚀 Business Ready:
- Marketing landing page included
- Pricing strategy documented
- Sales scripts and materials
- API integration tested and working
- Mobile-first responsive design"

echo.
echo 🚀 Pushing to GitHub...
git push origin main

echo.
echo ✅ Checking recent commits...
git log --oneline -3

echo.
echo ================================
echo ✅ GitHub Update Complete!
echo ================================
echo.
echo 🌐 Frontend URL: https://kosmobob-beauty-crm-frontend-0a00.twc1.net
echo 🔗 GitHub Repo: https://github.com/KOSMOBOB/beauty-crm-frontend
echo 📧 Demo Login: demo@salon.com
echo 🔐 Demo Password: demo123
echo.
echo 💰 Ready to start sales!
echo 📞 Contact: tralom@yandex.ru
echo.
pause