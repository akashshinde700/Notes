# 📊 Excel Formula Cheatsheet

Useful formulas and tricks to work with student marksheets or similar datasets.

---

## 🧮 Basic Formulas (Assuming Data Starts at Row 2)

| Column | Formula Type | Formula (for Row 2) |
|--------|---------------|---------------------|
| **H**  | Total (SUM)   | `=SUM(B2:G2)` |
| **I**  | Max           | `=MAX(B2:G2)` |
| **J**  | Min           | `=MIN(B2:G2)` |
| **K**  | Count of Marks| `=COUNT(B2:G2)` |
| **L**  | Average       | `=IF(K2=0, "", H2/K2)` |
| **M**  | Percentage    | `=IF(K2=0, "", (H2 / (K2 * 100)) * 100)` |
| **N**  | Result (Pass/Fail) | `=IF(MIN(B2:G2)>=35, "Pass", "Fail")` |
| **O**  | Grade         | `=IF(N2="Fail", "F", IF(M2>=80, "A", IF(M2>=70, "B", IF(M2>=60, "C", IF(M2>=50, "D", "F")))))` |

---

## 🧠 Notes

- Replace `B2:G2` with your actual data range if different.
- **COUNT** helps avoid errors if some cells are blank or invalid.
- Grades are only calculated if the student has passed all subjects.

---

## 🧮 Grade Criteria

| Grade | Percentage Range |
|-------|------------------|
| A     | 80 - 100         |
| B     | 70 - 79.99       |
| C     | 60 - 69.99       |
| D     | 50 - 59.99       |
| F     | Below 50 / Fail  |

---

## 🖱️ Fill Handle (a.k.a. Pill Handle)

- Located at the **bottom-right corner** of the selected cell.
- Drag down to **copy formulas** to the next rows.
- **Double-click** to auto-fill based on adjacent column length.

**To Enable:**
- Go to `File > Options > Advanced`
- Check ✅ `Enable fill handle and cell drag-and-drop`

---

## 📌 Example Columns Layout

| A      | B     | C    | D    | E     | F     | G      | H   | I   | J   | K   | L   | M   | N      | O     |
|--------|-------|------|------|-------|-------|--------|-----|-----|-----|-----|-----|-----|--------|-------|
| Name   | Hindi | Eng  | Math | Sci   | SST   | Drawing| Sum | Max | Min | Cnt | Avg | %   | Result | Grade |

---

## ⌨️ Pro Tip for Fast Use

- Enter formula in first row (e.g., `H2`)
- Hover over bottom-right corner → **cursor turns to +**
- **Double-click** or **drag down** to apply to all rows

---

## 🧰 Bonus: Highlight Failing Students

Use **Conditional Formatting**:
1. Select Range (e.g., A2:O100)
2. Home → Conditional Formatting → New Rule
3. Use formula:
   ```excel
   =$N2="Fail"
4.Set format (e.g., red fill)
