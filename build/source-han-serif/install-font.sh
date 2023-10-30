#!/bin/bash
#
# Download the font to your computer and extract files if necessary. Font files
# may have a .zip, .otf, or .ttf file extension.
directory="$(cd $(dirname "${BASH_SOURCE[0]:-$0}") && pwd)"
proj_root="${directory%/build*}"
proj_name="source-han-serif"

base_archive_name="14_SourceHanSerifCN.zip"
url="https://github.com/adobe-fonts/${proj_name}/releases/download/2.002R"
url="${url}/${base_archive_name}"
curl -fsSLO --compressed "${url}"
7z e "${base_archive_name}" -aoa -o"${proj_root}/styles/${proj_name}" *.otf -r
rm -f "${base_archive_name}"
