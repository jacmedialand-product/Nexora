# Progress Indicators Specification

Used for syllabus coverage, attendance completion, or file upload progress.

## 1. Linear Progress Bars
*   **Track Background:** Dark Gray (`#2A2A2A`), height `8px` or `12px`, rounded pill edges (`9999px`).
*   **Fill (Value):**
    *   Default: Primary Gold (`#D4AF37`).
    *   Success: Green (`#10B981`) if reaching 100% is a goal.
    *   Warning: Red (`#EF4444`) if critical (e.g., low attendance).
*   **Label:** Usually placed above the bar, aligned right (e.g., "75%").

## 2. Circular Progress (Gauges)
*   **Track:** Dark Gray (`#2A2A2A`) stroke.
*   **Fill:** Primary Gold (`#D4AF37`) stroke.
*   **Center Text:** The percentage value (e.g., "80%"), large and bold (`1.5rem`), White (`#FFFFFF`).
*   **Stroke Width:** Generally `8px` to `12px` depending on gauge size.
