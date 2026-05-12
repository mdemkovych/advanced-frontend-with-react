# Sprint 02: Object-Oriented Programming (OOP) & Design

## Overview
This sprint focuses on mastering Object-Oriented paradigms within the JavaScript ecosystem. The goal was to transition from simple scripts to scalable, organized code by leveraging class hierarchies, prototype inheritance, and precise execution context management. Understanding these patterns is vital for managing complex state and logic in enterprise-level React applications.

---

## Learning Materials

### 1. Object-Oriented Design (OOD) Principles
* **Encapsulation:** Protecting data integrity using private fields (`#field`) and providing controlled access via **Getters and Setters**.
* **Abstraction:** Simplifying complex systems by exposing only necessary interfaces and hiding internal implementation details.
* **Inheritance:** Implementing code reuse through the `extends` keyword and the `super()` constructor to establish hierarchical relationships.
* **Polymorphism:** Defining methods that share the same name but exhibit different behaviors across various class implementations (Method Overriding).

### 2. JavaScript Implementation: Prototypes & Classes
* **ES6 Class Syntax:** Modern declarative approach for creating objects, featuring constructors, instance methods, and **Static methods** for utility logic.
* **Prototype Inheritance:** Understanding the `[[Prototype]]` chain, the relationship between `__proto__` and `prototype`, and how JavaScript implements inheritance under the hood.
* **Prototype Chain:** Deep dive into memory efficiency, `Object.create()`, and understanding the relationship between instance properties and prototype-level methods.
* **Legacy Patterns:** Working with **Function Constructors** and understanding the behavior of the `arguments` object and `this` inside traditional functions.

### 3. Context Mastery (The `this` Keyword)
* **Execution Context:** Analyzing how the value of `this` is determined dynamically at runtime.
* **Explicit Binding:** Precise control over function execution using built-in methods:
    * `.call(this, arg1, arg2, …)` – Invokes a function with a specific `this` and comma-separated arguments.
    * `.apply(this, [args])` – Invokes a function with a specific `this` and an arguments array.
    * `.bind(this, arg1, …)` – Returns a new function with a permanently bound context and optional preset arguments.
