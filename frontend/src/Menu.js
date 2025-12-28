import { useEffect, useState } from "react";
import API from "../api";

export default function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    API.get("/menu").then(res => setMenu(res.data));
  }, []);

  return (
    <div>
      <h3>Our Menu</h3>
      {menu.map((item, i) => (
        <div key={i}>
          <h4>{item.name} - ₦{item.price}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
