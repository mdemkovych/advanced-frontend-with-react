# Sprint 03: Asynchronous JS, Closures & Exceptions

## Overview
This sprint explores the non-blocking of JavaScript(**single-threaded** programming language). Mastery of the Event Loop and asynchronous patterns is essential for handling API communication. Additionally, we dive into lexical closures for memory efficiency and robust error management strategies to ensure application resilience.

---

## Learning Materials

### 1. Concurrency & The Event Loop Architecture
Understanding the JavaScript engine's internal mechanics is crucial for writing performant, non-blocking code:
* **Call Stack:** The primary location where synchronous code execution occurs (LIFO).
* **Web APIs:** Environment-provided interfaces (Browser/Node.js) where timers, network requests, and DOM events are handled outside the main thread.
* **Callback Queue / Task Queue (Macrotasks):** The staging area where asynchronous callbacks wait for execution.
* **Event Loop:** The orchestrator that monitors the Call Stack and moves callbacks from the Queue to the Stack only when the Stack is empty.
* **Important Distinction:** Recognizing that `setTimeout()` is a **Browser/Runtime API**, not a feature of the core JavaScript language itself.

### 2. Asynchronous Programming Patterns
* **Promises:** Managing the lifecycle of asynchronous operations (Pending, Fulfilled, Rejected) and avoiding "callback hell."
* **Async/Await:** Leveraging modern syntactic sugar to write asynchronous code that is as readable and maintainable as synchronous logic.
* **Generators:** Utilizing `function*` and `yield` for pauseable and resumable execution flows, laying the groundwork for advanced state management (like Redux-Saga).

### 3. Language Internals & Error Handling
* **Closures:** Practical application of lexical scoping to preserve access to outer variables, creating private data structures, and understanding memory management.
* **Exception Handling:** Implementing comprehensive error boundaries using `try...catch...finally` blocks to handle runtime failures gracefully.
* **The `throw` Statement:** Creating and throwing custom error objects for better debugging and flow control.