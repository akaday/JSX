import { h, render } from 'preact';

const App = () => (
  <div>
    <h1>Hello, Preact!</h1>
  </div>
);

render(<App />, document.getElementById('root'));
