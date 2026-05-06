@echo off
setlocal

echo Building Quartz...
call npx quartz build
if %errorlevel% neq 0 (
    echo Build selhal!
    exit /b %errorlevel%
)

echo Deploying to web.elektrika.cz...

winscp.com /command ^
    "open sftp://labs:SHINJUKU-viva-loading@web.elektrika.cz:22060/ -hostkey=*" ^
    "synchronize remote -delete ""%~dp0public"" /var/www_virtual/lab_elektrika_ai/elektropie/" ^
    "exit"

if %errorlevel% neq 0 (
    echo Deploy selhal!
    exit /b %errorlevel%
)

echo Deploy hotovy.
