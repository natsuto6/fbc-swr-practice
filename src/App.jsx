import "./App.css";
import useSWR from 'swr';

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };

  const fetcher = url => fetch(url, { headers }).then(res => res.json());

  const { data, error } = useSWR(url, fetcher);

  if (error) return <p>Failed to load.</p>;
  if (!data) return <p>Loading...</p>;

  return <p>Status: {data.description}</p>
}

export default App;
