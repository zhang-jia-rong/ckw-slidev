:init
  pushd %~dp0
  set "_DIRECTORY=%CD%"
  popd
  set "_PROJ_NAME=source-han-serif"
  setlocal
  set "_PROJ_ROOT=%_DIRECTORY:\build="&:%

  set "_BASE_ARCHIVE_NAME=14_SourceHanSerifCN.zip"
  set "_URL=https://github.com/adobe-fonts/%_PROJ_NAME%/releases/download"
  set "_URL=%_URL%/2.002R/%_BASE_ARCHIVE_NAME%"
  set "_OUTPUT_DIR=%_PROJ_ROOT%\styles\%_PROJ_NAME%"
  curl -fsSLO "%_URL%"
  tar -xf "%_BASE_ARCHIVE_NAME%" -C "%_OUTPUT_DIR%" --wildcards "*.otf"

:cleanUp
  del /q "7zr.exe"
  del /q "%_BASE_ARCHIVE_NAME%"
  set "_DIRECTORY="
  set "_PROJ_ROOT="
  set "_PROJ_NAME="
  set "_BASE_ARCHIVE_NAME="
  set "_URL="