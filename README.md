# JSX
PREACT
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It's commonly used with React to describe what the UI should look like. Here are some key points about JSX:

### Key Features of JSX

1. **HTML in JavaScript**:
   JSX allows you to write HTML elements directly within JavaScript, making it easier to visualize the structure of your UI components.
   ```jsx
   const element = <h1>Hello, world!</h1>;
   ```

2. **Expressions in JSX**:
   You can embed any JavaScript expression within curly braces `{}` inside JSX.
   ```jsx
   const name = 'John';
   const element = <h1>Hello, {name}!</h1>;
   ```

3. **Attributes**:
   JSX uses camelCase for attributes instead of the standard HTML attribute names.
   ```jsx
   const element = <div className="container"></div>;
   ```

4. **Children**:
   JSX can contain child elements, which can be nested inside other elements.
   ```jsx
   const element = (
     <div>
       <h1>Hello, world!</h1>
       <p>This is a paragraph.</p>
     </div>
   );
   ```

5. **Fragments**:
   To avoid adding extra nodes to the DOM, you can use fragments to group multiple elements.
   ```jsx
   const element = (
     <>
       <h1>Hello, world!</h1>
       <p>This is a paragraph.</p>
     </>
   );
   ```

### Example Usage in Preact

Here's how you can use JSX with Preact, a lightweight alternative to React:

1. **Install Preact**:
   ```bash
   npm install preact
   ```

2. **Create a Simple Component**:
   ```jsx
   import { h, render } from 'preact';

   const App = () => (
     <div>
       <h1>Hello, Preact!</h1>
     </div>
   );

   render(<App />, document.getElementById('root'));
   ```

3. **Using JSX with Babel**:
   Ensure you have the necessary Babel setup to compile JSX into JavaScript.

### Resources for Learning JSX

- [React JSX Documentation](https://legacy.reactjs.org/docs/introducing-jsx.html) ¹
- [W3Schools JSX Tutorial](https://www.w3schools.com/react/react_jsx.asp) ²

JSX makes it easier to write and manage your UI components by combining the power of JavaScript with the simplicity of HTML. If you have any specific questions or need further assistance, feel free to ask!

Source : conversation avec Copilot, 07/10/2024
(1) Introduction à JSX – React - reactjs.org. https://fr.legacy.reactjs.org/docs/introducing-jsx.html.
(2) React JSX - W3Schools. https://www.w3schools.com/react/react_jsx.asp.
(3) Introducing JSX – React - reactjs.org. https://legacy.reactjs.org/docs/introducing-jsx.html.
