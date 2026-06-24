# Reusable Counter App Using a Custom Hook

## Overview

This project demonstrates how to create and use a custom React hook to manage reusable counter logic across multiple components.

The application contains multiple counters that share the same logic through a custom hook called `useCounter`.

## Features

* Reusable custom hook (`useCounter`)
* Multiple counter components
* Increment functionality
* Decrement functionality
* Reset functionality
* Clean and reusable component structure
* Built with React functional components and hooks

## Project Structure

```text
counter-app/
├── src/
│   ├── components/
│   │   └── Counter.jsx
│   ├── hooks/
│   │   └── useCounter.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── README.md
├── .gitignore
├── package.json
```

## Custom Hook

The `useCounter` hook:

* Accepts an `initialValue`
* Manages counter state using `useState`
* Returns:

  * `count`
  * `increment()`
  * `decrement()`
  * `reset()`

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd counter-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Usage

The application renders multiple counters with different starting values.

Example:

```jsx
<Counter title="Counter One" initialValue={0} />
<Counter title="Counter Two" initialValue={5} />
<Counter title="Counter Three" initialValue={10} />
```

Each counter can:

* Increment the count
* Decrement the count
* Reset to its initial value

## Technologies Used

* React
* JavaScript (ES6+)
* Vite
* React Hooks

## Learning Objectives

This project demonstrates:

* Creating custom React hooks
* Reusing logic across components
* Component-based architecture
* State management using hooks
* Writing clean and maintainable React code

## Author

amarsahu21724-max

## License

This project is created for educational purposes.
