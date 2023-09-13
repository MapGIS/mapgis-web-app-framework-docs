@echo off
echo.
echo [信息] 发布
echo.

cd /d %~dp0

setlocal

set CURRENT_DIR=%cd%

set RELEASE_DIR=%CURRENT_DIR%/docs/.vuepress/dist
set SERVER_DIR=\\192.168.82.89\mapgis-resources\mapgis-web-app-framework-docs

cd %DOCS_DIR%
call yarn docs:build

xcopy /y /e "%RELEASE_DIR%\" "%SERVER_DIR%" 

endlocal