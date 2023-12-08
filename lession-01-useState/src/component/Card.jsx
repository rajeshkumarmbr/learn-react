import React from "react";

// function Card({ name,price,url }){
function Card({ name, ...aa }) {
  // const { name, ...aa } = props;

  return (
    <div className="h-72 w-48 bg-zinc-800 flex flex-col text-white m-8 rounded justify-center items-center">
      <img src={aa.url} alt="image" className=" w-11/12" />
      <h2 className="">{name}</h2>
      <h4 className="">{aa.price}</h4>
    </div>
  );
}

export default Card;
