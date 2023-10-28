:init
  pushd %~dp0
  set "_DIRECTORY=%CD%"
  popd
  set "_PROJ_NAME=Resource-Han-Rounded"
  setlocal
  set "_PROJ_ROOT=%_DIRECTORY:\build="&:%
  set "_OUTPUT_DIR=%_PROJ_ROOT%\styles\%_PROJ_NAME%"
  set "_BASE_ARCHIVE_NAME=RHR-CN-0.990.7z"
  set "_URL=https://github.com/CyanoHao/%_PROJ_NAME%"
  set "_URL=%_URL%/releases/download/v0.990/%_BASE_ARCHIVE_NAME%"
  curl -fsSLO "%_URL%"
  curl -fsSLO "https://www.7-zip.org/a/7zr.exe"
  7zr.exe x "%_BASE_ARCHIVE_NAME%" -aoa -o"%_OUTPUT_DIR%"

:cleanUp
  del /q "7zr.exe"
  del /q "%_BASE_ARCHIVE_NAME%"
  set "_DIRECTORY="
  set "_PROJ_ROOT="
  set "_PROJ_NAME="
  set "_BASE_ARCHIVE_NAME="
  set "_URL="