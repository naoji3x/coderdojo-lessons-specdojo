#!/usr/bin/env bash
set -euo pipefail

RUN_ID="manual-$(date -u +%Y%m%dT%H%M%SZ)"
PROJECT="prj-0001"
TARGET="deliverable"
SUBJECT_PATH=""
EXECUTOR_BY="${SPECDOJO_GRADE_BY:-agy-expert-executor}"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --run-id)
      RUN_ID="$2"
      shift 2
      ;;
    --project)
      PROJECT="$2"
      shift 2
      ;;
    --target)
      TARGET="$2"
      shift 2
      ;;
    --kind)
      shift 2
      ;;
    --path)
      SUBJECT_PATH="$2"
      shift 2
      ;;
    --by)
      EXECUTOR_BY="$2"
      shift 2
      ;;
    *)
      echo "Unknown option: $1" >&2
      exit 1
      ;;
  esac
done

if [[ -z "$SUBJECT_PATH" ]]; then
  echo "--path is required" >&2
  exit 1
fi

node tools/grade/enable-multirepo-grade.mjs

PLAN_OUTPUT="$(npx specdojo grade plan --target "$TARGET" --project "$PROJECT" --path "$SUBJECT_PATH" --embed-documents)"
echo "$PLAN_OUTPUT"

PLAN_PATH="$(printf '%s\n' "$PLAN_OUTPUT" | awk -F': ' '/-grade-plan\.md$/ {print $2; exit}')"
if [[ -z "$PLAN_PATH" ]]; then
  echo "Failed to resolve grade executor plan path" >&2
  exit 1
fi

ANALYSIS_DIR="docs/ja/projects/${PROJECT}/execution/grade/generated/analysis"
mkdir -p "$ANALYSIS_DIR"
SAFE_RUN_ID="$(printf '%s' "$RUN_ID" | tr -c 'A-Za-z0-9_-' '-')"
ANALYSIS_OUT="${ANALYSIS_DIR}/${SAFE_RUN_ID}.txt"

npx specdojo agent run \
  --project "$PROJECT" \
  --plan "$PLAN_PATH" \
  --by "$EXECUTOR_BY" \
  --out "$ANALYSIS_OUT"

npx specdojo grade apply \
  --target "$TARGET" \
  --project "$PROJECT" \
  --path "$SUBJECT_PATH" \
  --analysis-from "$ANALYSIS_OUT" \
  --by "$EXECUTOR_BY"

GRADE_RESULTS_DIR="docs/ja/projects/${PROJECT}/execution/grade/results"
GRADE_CRITERIA_DIR="docs/ja/projects/${PROJECT}/execution/grade/criteria"
for dir in "$GRADE_RESULTS_DIR" "$GRADE_CRITERIA_DIR"; do
  if [[ -d "$dir" ]]; then
    git add "$dir"
  fi
done

if ! git diff --cached --quiet; then
  git commit -m "chore(grade): record grade result for ${SUBJECT_PATH} (${RUN_ID})"
fi
