import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

const POSTS_QUERY = gql`
  query {
    posts {
      id
      content
      author
    }
  }
`;

function App() {
  const { data, loading } = useQuery(POSTS_QUERY);

  if (loading) {
    return <div>Loading....</div>;
  }

  console.log("data: ", data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
