# 📊 Excel Formula Cheatsheet

Useful formulas and tricks to work with **student marksheets** or similar datasets.

---

## 🧮 Basic Formulas (Assuming Data Starts at Row 2)

| Column | Formula Type     | Formula (for Row 2) |
|--------|------------------|---------------------|
| **H**  | Total (SUM)      | `=SUM(B2:G2)`       |
| **I**  | Max              | `=MAX(B2:G2)`       |
| **J**  | Min              | `=MIN(B2:G2)`       |
| **K**  | Count of Marks   | `=COUNT(B2:G2)`     |
| **L**  | Average          | `=IF(K2=0, "", H2/K2)` |
| **M**  | Percentage       | `=IF(K2=0, "", (H2 / (K2 * 100)) * 100)` |
| **N**  | Result (Pass/Fail) | `=IF(MIN(B2:G2)>=35, "Pass", "Fail")` |
| **O**  | Grade            | `=IF(N2="Fail", "F", IF(M2>=80, "A", IF(M2>=70, "B", IF(M2>=60, "C", IF(M2>=50, "D", "F")))))` |

---

## 🧠 Notes

- Replace `B2:G2` with your actual marks range if different.
- **COUNT** helps ignore blanks and avoids divide-by-zero errors.
- **Grades** are only given to students who **pass all subjects**.

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

- Located at the **bottom-right corner** of a selected cell.
- Drag to copy formulas or continue a pattern.
- **Double-click** to auto-fill down as far as the data goes.

**To Enable:**

```plaintext
File → Options → Advanced → ✅ Enable fill handle and cell drag-and-drop
```

---

## 📌 Example Columns Layout

| A      | B     | C    | D    | E     | F     | G      | H   | I   | J   | K   | L   | M   | N      | O     |
|--------|-------|------|------|-------|-------|--------|-----|-----|-----|-----|-----|-----|--------|-------|
| Name   | Hindi | Eng  | Math | Sci   | SST   | Drawing| Sum | Max | Min | Cnt | Avg | %   | Result | Grade |

---

## ⌨️ Pro Tip for Fast Use

- Type the formula in the **first row** (e.g., `=SUM(B2:G2)` in `H2`)
- Hover on the bottom-right corner → **cursor turns to "+"**
- **Double-click** or **drag down** to fill all rows

---

## 🧰 Bonus: Highlight Failing Students

### 🔴 Conditional Formatting

1. Select Range (e.g., `A2:O100`)
2. Go to `Home → Conditional Formatting → New Rule`
3. Use the formula:
   ```excel
   =$N2="Fail"
   ```
4. Set format (e.g., red fill) to highlight failing students

---

# 🔢 Excel Fill Handle – Pattern Detection in Simple English

The **Fill Handle** in Excel (the small square at the cell’s corner) can **auto-detect patterns** when you **drag** it across cells.

---

## 🧠 What Patterns Can Excel Detect?

When dragging, Excel checks for:

- ➕ Addition patterns  
- ➖ Subtraction sequences  
- ✖️ Multiplication patterns  
- 🔁 Series like **dates**, **weekdays**, **months**

---

## ✅ Pattern Examples

| First Value | Second Value | Pattern Detected | Output                   |
|-------------|---------------|------------------|---------------------------|
| 2           | 4             | +2               | 2, 4, 6, 8, 10...         |
| 3           | 6             | +3               | 3, 6, 9, 12, 15...        |
| 10          | 5             | −5               | 10, 5, 0, -5, -10...      |
| 1           | 2             | +1               | 1, 2, 3, 4, 5...          |
| 5           | 10            | +5               | 5, 10, 15, 20...          |

---

## 🖱️ How to Use Fill Handle

1. Enter two values (e.g., `2` and `4`) in two consecutive cells.
2. Select both cells.
3. Move your mouse to the **bottom-right corner** (plus sign).
4. **Drag down** or across to continue the pattern.

---

## ✅ Tips

- Works with **numbers**, **dates**, **days of the week**, and **months**
- Can also be used for **custom lists** (e.g., "Q1", "Q2", ...)
- Use **double-click** to auto-fill down alongside data

---

## ⚙️ Enable Fill Handle (If Disabled)

> Go to:  
> `File → Options → Advanced → ✅ Enable fill handle and cell drag-and-drop`

---

## 📌 Use Case: Multiplication Tables

| A1 | A2 | Drag Result            |
|----|----|------------------------|
| 4  | 8  | 12, 16, 20, ... (×4)   |
| 7  | 14 | 21, 28, 35, ... (×7)   |

---

✅ **Save this file as `excel_fill_handle.md`**  
Open it with **VS Code**, **Obsidian**, or any Markdown viewer for best experience.
