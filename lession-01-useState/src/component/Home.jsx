import React from "react";
import Card from "./Card";

function Home() {
  const products = [
    {
      name: "Mobile",
      price: "2000",
      url: "https://www.reliancedigital.in/medias/Oppo-A17-Mobile-Phone-493178364-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNzczNXxpbWFnZS9qcGVnfGltYWdlcy9oMzcvaDhkLzk5MDUxNjA3ODE4NTQuanBnfDM5OGFkYTk0ODk5NDA5Nzg2YWQwZGZmNTI4NzQ2MGM4MmMwNjAwZGI1NzM0NjA2NTBkYzMwMGRkMTY4YmY1ZjI",
      id: "1",
    },
    {
      name: "TV",
      price: "1500",
      url: "https://images.samsung.com/is/image/samsung/in-full-hd-tv-te50fa-ua43te50fakxxl-frontblack-231881877?$650_519_PNG$",
      id: "2",
    },
    {
      name: "Laptop",
      price: "2400",
      url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71p-M3sPhhL.jpg",
      id: "3",
    },
    {
      name: "Desktop",
      price: "2200",
      url: "https://m.media-amazon.com/images/I/71snht4ZY+L._AC_UF1000,1000_QL80_.jpg",
      id: "4",
    },
  ];

  return (
    <>
      <div className="h-[70vh] flex-wrap bg-slate-500 flex justify-center items-center">
        {products.map((product) => (
          <Card
            name={product.name}
            key={product.id}
            price={product.price}
            url={product.url}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
