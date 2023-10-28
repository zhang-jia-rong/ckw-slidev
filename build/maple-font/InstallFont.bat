:init
  pushd %~dp0
  set "_DIRECTORY=%CD%"
  popd
  set "_PROJ_NAME=maple-font"
  setlocal
  set "_PROJ_ROOT=%_DIRECTORY:\build="&:%

  set "_BASE_ARCHIVE_NAME=MapleMono-SC-NF.zip"
  set "_URL=https://github.com/subframe7536/%_PROJ_NAME%"
  set "_URL=%_URL%/releases/download/v6.4/%_BASE_ARCHIVE_NAME%"
  curl -fsSLO "%_URL%"
  tar -xf "%_BASE_ARCHIVE_NAME%" -C "%_PROJ_ROOT%\styles\%_PROJ_NAME%"

  set "_BASE_ARCHIVE_NAME=MapleMono-woff2.zip"
  set "_URL=https://github.com/subframe7536/%_PROJ_NAME%"
  set "_URL=%_URL%/releases/download/v6.4/%_BASE_ARCHIVE_NAME%"
  curl -fsSLO "%_URL%"
  tar -xf "%_BASE_ARCHIVE_NAME%" -C "%_PROJ_ROOT%\styles\%_PROJ_NAME%"

:cleanUp
  del /q "7zr.exe"
  del /q "%_BASE_ARCHIVE_NAME%"
  set "_DIRECTORY="
  set "_PROJ_ROOT="
  set "_PROJ_NAME="
  set "_BASE_ARCHIVE_NAME="
  set "_URL="