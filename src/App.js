import React, { useEffect, useState } from "react";
import axios from "axios";
import Karakterler from ".//components/Karakterler";
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/").then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <Karakterler data={data} />
    </div>
  );
};

export default App;
