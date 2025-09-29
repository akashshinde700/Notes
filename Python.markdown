

## 1. What is a Variable?

A variable is like a container that holds data. In Python, you don’t need a special command to create a variable. It’s created as soon as you assign a value to it.

**Example:**
```python
a = 10  # 'a' is the variable, 10 is the value
```

**Key Point:**  
Variable = Name + Value (Data)

## 2. How Python Stores Data

When you assign the same value to different variables, Python may store them in the same memory location (especially for small numbers or simple strings).

**Example:**
```python
a = 10
b = 10
print(id(a), id(b))  # Same memory address for both
```

If the values are different, they get different memory locations:
```python
x = 10
y = 20
print(id(x))  # Memory address for 10
print(id(y))  # Memory address for 20
```

**Key Point:**  
Python allocates memory based on the value, not the variable name. Variable names are just labels pointing to that memory.

## 3. Printing Values

You can display values using the `print()` function.

**Examples:**
```python
a = 10
b = 20
print(a)        # Prints: 10
print(b)        # Prints: 20
print(a, b)     # Prints: 10 20
```

## 4. Variable Naming Rules

Variable names in Python must follow these rules:
- Must start with a letter (a-z, A-Z) or underscore `_`.
- Cannot start with a number.
- Cannot contain special characters like `@`, `$`, `%`, etc.
- Case-sensitive (`Age` and `age` are different).
- Cannot use Python keywords (e.g., `if`, `for`, `while`).

**Correct Examples:**
```python
x = 5
_name = "John"
number1 = 100
```

**Incorrect Examples:**
```python
1num = 10       # Wrong: Starts with a number
my-name = 20    # Wrong: Contains special character
```

## 5. Hello World Program

A simple program to print "Hello, World!":

```python
print("Hello, World!")
```

## 6. Checking Memory Address

The `id()` function shows the memory address of a variable’s value.

**Example:**
```python
a = 10
b = 10
print(id(a), id(b))  # Same address for same value
```

## 7. Checking Data Type

Use the `type()` function to check the type of data stored in a variable.

**Example:**
```python
x = 10
print(type(x))  # Output: <class 'int'> (integer)

y = "hello"
print(type(y))  # Output: <class 'str'> (string)
```

## 8. Strings in Python

A string is text enclosed in single (`'`) or double (`"`) quotes.

**Example:**
```python
name = "Akash"
```

## 9. Concatenating Strings

You can join strings using the `+` operator.

**Example:**
```python
first = "Hello"
second = "World"
print(first + " " + second)  # Output: Hello World
```

## 10. Common String Methods

Python provides many built-in methods to manipulate strings.

**Example:**
```python
text = "  Python Is Fun  "

print(text.lower())           # python is fun
print(text.upper())           # PYTHON IS FUN
print(text.title())           # Python Is Fun
print(text.strip())           # Python Is Fun (removes leading/trailing spaces)
print(text.lstrip())          # Python Is Fun   (removes leading spaces)
print(text.rstrip())          #   Python Is Fun (removes trailing spaces)
print(text.replace("Fun", "Easy"))  #   Python Is Easy
print(text.split())           # ['Python', 'Is', 'Fun']
print(" ".join(['Python', 'Is', 'Fun']))  # Python Is Fun
print(len(text))              # 16 (length of string)
print(text.count("n"))        # 3 (counts occurrences of 'n')
print(text.startswith("  Py"))  # True
print(text.endswith("Fun  "))   # True
print("Python" in text)       # True (checks if "Python" is in text)
```

## 11. Python Syntax

You can run Python code in two ways:
- **Directly in the Command Line:**
  ```python
  >>> print("Hello, World!")
  Hello, World!
  ```
- **From a file:**
  Save code in a file (e.g., `myfile.py`) and run it using:
  ```
  python myfile.py
  ```

## 12. Python Indentation

Python uses indentation (spaces or tabs) to define blocks of code. Indentation is critical for code to work correctly.

**Correct Example:**
```python
if 5 > 2:
    print("Five is greater than two!")
```

**Incorrect Example (will cause an error):**
```python
if 5 > 2:
print("Five is greater than two!")  # Missing indentation
```

## 13. Assigning Multiple Values

You can assign values to multiple variables in one line.

**Example:**
```python
x, y, z = "Orange", "Banana", "Cherry"
print(x)  # Orange
print(y)  # Banana
print(z)  # Cherry
```

## 14. One Value to Multiple Variables

You can assign the same value to multiple variables.

**Example:**
```python
x = y = z = "Orange"
print(x)  # Orange
print(y)  # Orange
print(z)  # Orange
```

## 15. Unpacking a Collection

You can unpack a list or tuple into variables.

**Example:**
```python
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x)  # apple
print(y)  # banana
print(z)  # cherry
```

## 16. Outputting Variables

You can print variables directly or combine them.

**Examples:**
```python
x = "Python is awesome"
print(x)  # Python is awesome

x = "Python"
y = "is"
z = "awesome"
print(x, y, z)  # Python is awesome

x = "Python "
y = "is "
z = "awesome"
print(x + y + z)  # Python is awesome
```

## 17. Global and Local Variables

- **Global Variables:** Defined outside functions and accessible everywhere.
- **Local Variables:** Defined inside a function and only accessible within it.

**Global Variable Example:**
```python
x = "awesome"

def myfunc():
    print("Python is " + x)

myfunc()  # Python is awesome
```

**Local Variable Example:**
```python
x = "awesome"

def myfunc():
    x = "fantastic"
    print("Python is " + x)

myfunc()        # Python is fantastic
print("Python is " + x)  # Python is awesome
```

**Using `global` Keyword:**
```python
def myfunc():
    global x
    x = "fantastic"

myfunc()
print("Python is " + x)  # Python is fantastic
```
