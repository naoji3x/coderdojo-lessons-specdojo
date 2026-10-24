#!/usr/bin/env bash
# 投影スライドの kata（sample・template）を Slidev で表示する、または全ページを PNG に書き出す。
#
# kata のファイルには活動のコンポーネント（ScratchBlocks.vue など）がないため、
# 教材のリポジトリの活動から components/ を写した作業用のディレクトリ（tmp/ の下）で動かす。
#
# 使い方:
#   tools/preview-lsd.sh serve <kata の .md> [slidev のオプション...]  # 既定は --port 3030 --remote
#   tools/preview-lsd.sh png   <kata の .md>                          # tmp/lsd-preview/<名前>/png/ に書き出す
#
# 環境変数:
#   SPECDOJO_REPO_CODERDOJO_LESSONS  教材のリポジトリ（既定: ../coderdojo-lessons）
#   LSD_PREVIEW_LESSON               components/ を写す活動（既定: courses/scratch-basic/lessons/020-balloon-game）
set -euo pipefail

usage() {
  sed -n '7,9p' "$0" | sed 's/^# //' >&2
  exit 2
}

[ $# -ge 2 ] || usage
mode=$1
kata=$2
shift 2
[ -f "$kata" ] || {
  echo "kata のファイルが見つかりません: $kata" >&2
  exit 1
}

root=$(git rev-parse --show-toplevel)
lessons=${SPECDOJO_REPO_CODERDOJO_LESSONS:-$root/../coderdojo-lessons}
lesson=${LSD_PREVIEW_LESSON:-courses/scratch-basic/lessons/020-balloon-game}
components="$lessons/$lesson/components"
[ -d "$components" ] || {
  echo "活動の components/ が見つかりません: $components" >&2
  exit 1
}

name=$(basename "$kata" .md)
dir="$root/tmp/lsd-preview/$name"
rm -rf "$dir"
mkdir -p "$dir"
cp "$kata" "$dir/slides.md"
cp -r "$components" "$dir/components"

cd "$root"
case "$mode" in
serve)
  if [ $# -eq 0 ]; then
    set -- --port 3030 --remote
  fi
  exec npx slidev "$dir/slides.md" "$@"
  ;;
png)
  exec npx slidev export "$dir/slides.md" --format png --output "$dir/png"
  ;;
*)
  usage
  ;;
esac
