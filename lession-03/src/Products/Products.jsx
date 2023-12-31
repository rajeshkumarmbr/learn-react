import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/search?q=laptop&skip=1&limit=2`)
      .then((data) => setItems(data.data.products))
      .catch((err) => console.log("error", err));
  }, []);
  return (
    <div>
      {items?.map((item) => (
        <div key={item.id}>{item.title} </div>
      ))}
    </div>
  );
}
