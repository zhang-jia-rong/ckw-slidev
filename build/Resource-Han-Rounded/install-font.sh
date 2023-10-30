#!/bin/bash
#
# Download the font to your computer and extract files if necessary. Font files
# may have a .zip, .otf, or .ttf file extension.
directory="$(cd $(dirname "${BASH_SOURCE[0]:-$0}") && pwd)"
proj_root="${directory%/build*}"
proj_name="Resource-Han-Rounded"
base_archive_name="RHR-CN-0.990.7z"
url="https://github.com/CyanoHao/${proj_name}/releases/download/v0.990"
url="${url}/${base_archive_name}"
curl -fsSLO --compressed "${url}"
7z x "${base_archive_name}" -aoa -o"${proj_root}/styles/${proj_name}"
rm -f '${base_archive_name}'
