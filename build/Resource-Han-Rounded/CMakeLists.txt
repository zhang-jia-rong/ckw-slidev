cmake_minimum_required(VERSION 2.6.0)

project(Resource-Han-Rounded NONE)

string(REGEX REPLACE "/build.*" "" PROJ_ROOT ${PROJECT_SOURCE_DIR})
set(OUTPUT_DIR ${PROJ_ROOT}/styles/Resource-Han-Rounded)

if(WIN32 AND NOT CYGWIN)
  set(BASE_SCRIPT_NAME InstallFont.bat)
else(WIN32 AND NOT CYGWIN)
  set(BASE_SCRIPT_NAME install-font.sh)
endif(WIN32 AND NOT CYGWIN)

add_custom_command(
  OUTPUT ${OUTPUT_DIR}/ResourceHanRoundedCN-Bold.ttf
         ${OUTPUT_DIR}/ResourceHanRoundedCN-ExtraLight.ttf
         ${OUTPUT_DIR}/ResourceHanRoundedCN-Heavy.ttf
         ${OUTPUT_DIR}/ResourceHanRoundedCN-Light.ttf
         ${OUTPUT_DIR}/ResourceHanRoundedCN-Medium.ttf
         ${OUTPUT_DIR}/ResourceHanRoundedCN-Normal.ttf
         ${OUTPUT_DIR}/ResourceHanRoundedCN-Regular.ttf
  COMMAND ./${BASE_SCRIPT_NAME}
  DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/${BASE_SCRIPT_NAME}
  VERBATIM)

add_custom_target(
  Resource-Han-Rounded
  ALL
  DEPENDS ${OUTPUT_DIR}/ResourceHanRoundedCN-Bold.ttf
          ${OUTPUT_DIR}/ResourceHanRoundedCN-ExtraLight.ttf
          ${OUTPUT_DIR}/ResourceHanRoundedCN-Heavy.ttf
          ${OUTPUT_DIR}/ResourceHanRoundedCN-Light.ttf
          ${OUTPUT_DIR}/ResourceHanRoundedCN-Medium.ttf
          ${OUTPUT_DIR}/ResourceHanRoundedCN-Normal.ttf
          ${OUTPUT_DIR}/ResourceHanRoundedCN-Regular.ttf
)