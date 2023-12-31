import React, { useEffect, useState } from "react";
import ProductsCard from "../Card/ProductsCard";

function Products() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=phone`)
      .then((reaponse) => reaponse.json())
      .then((data) => {
        console.log(data);
        setItems(data.products);
      });
  }, []);
  return (
    <div className="flex flex-wrap">
      {items.map((event) => {
        return <ProductsCard key={items.id} allproducts={event} />;
      })}
    </div>
  );
}

export default Products;
