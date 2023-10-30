cmake_minimum_required(VERSION 2.6.0)

project(source-han-serif NONE)

string(REGEX REPLACE "/build.*" "" PROJ_ROOT ${PROJECT_SOURCE_DIR})
set(OUTPUT_DIR ${PROJ_ROOT}/styles/${PROJECT_NAME})

if(WIN32 AND NOT CYGWIN)
  set(BASE_SCRIPT_NAME InstallFont.bat)
else(WIN32 AND NOT CYGWIN)
  set(BASE_SCRIPT_NAME install-font.sh)
endif(WIN32 AND NOT CYGWIN)

add_custom_command(
  OUTPUT ${OUTPUT_DIR}/SourceHanSerifCN-Bold.otf
         ${OUTPUT_DIR}/SourceHanSerifCN-ExtraLight.otf
         ${OUTPUT_DIR}/SourceHanSerifCN-Heavy.otf
         ${OUTPUT_DIR}/SourceHanSerifCN-Light.otf
         ${OUTPUT_DIR}/SourceHanSerifCN-Medium.otf
         ${OUTPUT_DIR}/SourceHanSerifCN-Regular.otf
         ${OUTPUT_DIR}/SourceHanSerifCN-SemiBold.otf
  COMMAND ./${BASE_SCRIPT_NAME}
  DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/${BASE_SCRIPT_NAME}
  VERBATIM)

add_custom_target(
  ${PROJECT_NAME}
  ALL
  DEPENDS ${OUTPUT_DIR}/SourceHanSerifCN-Bold.otf
          ${OUTPUT_DIR}/SourceHanSerifCN-ExtraLight.otf
          ${OUTPUT_DIR}/SourceHanSerifCN-Heavy.otf
          ${OUTPUT_DIR}/SourceHanSerifCN-Light.otf
          ${OUTPUT_DIR}/SourceHanSerifCN-Medium.otf
          ${OUTPUT_DIR}/SourceHanSerifCN-Regular.otf
          ${OUTPUT_DIR}/SourceHanSerifCN-SemiBold.otf
)