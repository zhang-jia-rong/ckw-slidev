cmake_minimum_required(VERSION 2.6.0)

project(maple-font NONE)

string(REGEX REPLACE "/build.*" "" PROJ_ROOT ${PROJECT_SOURCE_DIR})
set(OUTPUT_DIR ${PROJ_ROOT}/styles/${PROJECT_NAME})

if(WIN32 AND NOT CYGWIN)
  set(BASE_SCRIPT_NAME InstallFont.bat)
else(WIN32 AND NOT CYGWIN)
  set(BASE_SCRIPT_NAME install-font.sh)
endif(WIN32 AND NOT CYGWIN)

add_custom_command(
  OUTPUT ${OUTPUT_DIR}/MapleMono-SC-NF-Bold.ttf
         ${OUTPUT_DIR}/MapleMono-SC-NF-BoldItalic.ttf
         ${OUTPUT_DIR}/MapleMono-SC-NF-Italic.ttf
         ${OUTPUT_DIR}/MapleMono-SC-NF-Light.ttf
         ${OUTPUT_DIR}/MapleMono-SC-NF-LightItalic.ttf
         ${OUTPUT_DIR}/MapleMono-SC-NF-Regular.ttf
         ${OUTPUT_DIR}/MapleMono-Bold.woff2
         ${OUTPUT_DIR}/MapleMono-BoldItalic.woff2
         ${OUTPUT_DIR}/MapleMono-Italic.woff2
         ${OUTPUT_DIR}/MapleMono-Light.woff2
         ${OUTPUT_DIR}/MapleMono-LightItalic.woff2
         ${OUTPUT_DIR}/MapleMono-Regular.woff2
  COMMAND ./${BASE_SCRIPT_NAME}
  DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/${BASE_SCRIPT_NAME}
  VERBATIM)

add_custom_target(
  ${PROJECT_NAME}
  ALL
  DEPENDS ${OUTPUT_DIR}/MapleMono-SC-NF-Bold.ttf
          ${OUTPUT_DIR}/MapleMono-SC-NF-BoldItalic.ttf
          ${OUTPUT_DIR}/MapleMono-SC-NF-Italic.ttf
          ${OUTPUT_DIR}/MapleMono-SC-NF-Light.ttf
          ${OUTPUT_DIR}/MapleMono-SC-NF-LightItalic.ttf
          ${OUTPUT_DIR}/MapleMono-SC-NF-Regular.ttf
          ${OUTPUT_DIR}/MapleMono-Bold.woff2
          ${OUTPUT_DIR}/MapleMono-BoldItalic.woff2
          ${OUTPUT_DIR}/MapleMono-Italic.woff2
          ${OUTPUT_DIR}/MapleMono-Light.woff2
          ${OUTPUT_DIR}/MapleMono-LightItalic.woff2
          ${OUTPUT_DIR}/MapleMono-Regular.woff2
)