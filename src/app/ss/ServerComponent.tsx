import { fetchData } from "../lib/fetchData";


export default async function ServerComponent() {
  const data = await fetchData();
  return <div>Server Data: {data}</div>;
}
