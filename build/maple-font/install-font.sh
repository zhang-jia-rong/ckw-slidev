#!/bin/bash
#
# Download the font to your computer and extract files if necessary. Font files
# may have a .zip, .otf, or .ttf file extension.
directory="$(cd $(dirname "${BASH_SOURCE[0]:-$0}") && pwd)"
proj_root="${directory%/build*}"
proj_name="maple-font"

# Download and extract the Maple Mono SC NF fonts package.
base_archive_name="MapleMono-SC-NF.zip"
url="https://github.com/subframe7536/${proj_name}/releases"
url="${url}/download/v6.4/${base_archive_name}"
curl -fsSLO --compressed "${url}"
7z x "${base_archive_name}" -aoa -o"${proj_root}/styles/${proj_name}"
rm -f "${base_archive_name}"

# Download and extract the Maple Mono fonts package.
base_archive_name="MapleMono-woff2.zip"
url="https://github.com/subframe7536/${proj_name}/releases"
url="${url}/download/v6.4/${base_archive_name}"
curl -fsSLO --compressed "${url}"
7z x "${base_archive_name}" -aoa -o"${proj_root}/styles/${proj_name}"
rm -f "${base_archive_name}"
