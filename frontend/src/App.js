import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    api.get("/hello")
       .then(res => setMsg(res.data.message));
  }, []);

  return <h1>{msg}</h1>;
}

export default App;
