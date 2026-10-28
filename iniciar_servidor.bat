@echo off
title Celestia Order - Servidor Web del Clan
echo ========================================================
echo   Iniciando Servidor Web del Clan Celestia Order...
echo   Genshin Impact, Zenless Zone Zero y Star Rail
echo ========================================================
echo.
echo Abriendo tu navegador en http://localhost:8080
start http://localhost:8080
python -m http.server 8080 --directory "%~dp0"
pause
