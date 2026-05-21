# Sprint 04: UI Foundations (JSX & Styling)

## Overview
This sprint marks the official transition from Vanilla JavaScript to React. The primary goal is to master the **declarative** nature of UI development and understand **JSX**, the syntax extension that allows us to describe UI structures directly within JavaScript. We also explore various modern styling strategies to ensure components are visually appealing, maintainable, and scalable.

---

## Learning Materials

### 1. Declarative UI & JSX Architecture
* **The Declarative Paradigm:** Shifting the focus from "how" to update the DOM (imperative) to "what" the UI should look like based on the current state (declarative).
* **JSX Syntax & Rules:** Deep dive into the requirements of JSX: single root elements, camelCase attribute naming (e.g., `className`), and mandatory tag closing.
* **Dynamic Expressions:** Embedding JavaScript logic, expressions, and variables within JSX using curly braces `{}`.
* * **The Compilation Bridge:** Understanding the relationship between JSX syntax and underlying `React.createElement()` calls handled by Babel.
* **React Fragments:** Utilizing `<React.Fragment>` or the short `<>` syntax to group multiple elements without adding extra nodes to the DOM.
* **React vs. Next.js:** Comparing client-side React setups with Next.js folder structures and basic configuration.

### 2. Modern Styling Strategies
* **CSS Modules:** Implementing scoped CSS to prevent global namespace pollution and ensure style isolation across components.
* **CSS-in-JS (Styled Components):** Writing actual CSS within JavaScript files using tagged template literals for highly dynamic, prop-driven styling.
* **Utility-First CSS (Tailwind):** Rapid UI prototyping and development using low-level utility classes directly in the markup.
* **Inline Styles:** Handling dynamic styles via JavaScript objects within the native `style` attribute.

### 3. Component Basics
* **Functional Components:** Building the foundational building blocks of modern React applications as pure JavaScript functions.
* **Component Composition:** Learning how to nest, combine, and reuse small, isolated components to build complex user interfaces.

---

### (in addition) Agile Framework: SCRUM Fundamentals
Understanding team collaboration, project management, and iterative delivery:
* **The SCRUM Framework:** Core pillars of Transparency, Inspection, and Adaptation in software development.
* **Team Roles:** Defining responsibilities of the *Product Owner*, *Scrum Master*, and *Development Team*.
* **SCRUM Artifacts:** Managing product lifecycle via the *Product Backlog* and *Sprint Backlog*.
* **Sprint Events:** Structuring development cycles through *Sprint Planning*, *Daily Standups*, *Sprint Reviews*, and *Sprint Retrospectives*.
* **Delivery Model:** Emphasizing iterative development and *incremental delivery*.