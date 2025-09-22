#!/bin/bash
echo "Деплой простой Beauty CRM..."

# Удаляем node_modules чтобы избежать конфликтов
rm -rf node_modules

# Добавляем изменения
git add .
git commit -m "Simple Beauty CRM without build conflicts - READY FOR SALES"
git push origin main --force

echo "✅ Деплой завершен!"
echo "Система будет доступна через 2-3 минуты на:"
echo "https://kosmobob-beauty-crm-frontend-0a00.twc1.net"