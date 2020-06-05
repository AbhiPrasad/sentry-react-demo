import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as Sentry from "@sentry/react";

function Link() {
  return (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  );
}

function Bam() {
  return { ok: 3934 };
}

// const ALink = withProfiler(React.memo(Link));

const TestApp = ({ children, ...props }) => {
  const [isError, setError] = React.useState(false);
  return (
    <Sentry.ErrorBoundary {...props}>
      {isError ? <Bam /> : children}
      <button
        data-testid="errorBtn"
        onClick={() => {
          setError(true);
        }}
      >
        OK{" "}
      </button>
    </Sentry.ErrorBoundary>
  );
};

function App() {
  return (
    <div className="App">
      <TestApp fallback={<h1>Fallback</h1>} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

// export default withProfiler(React.memo(App));
export default App;
