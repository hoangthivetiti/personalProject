import React from "react";

const Array = [
  { id: 1, content: "Home" },
  { id: 2, content: "About Us" },
  { id: 3, content: "Our Projects" },
  { id: 4, content: "Member" },
  { id: 5, content: "Contact Us" },
];

export default function Header() {
  return (
    <>
      <div className="flex bg-[#384B38] justify-between text-white h-24 items-center p-10 font-[Epilogue]">
        <p className="text-4xl font-semibold">HoangVe</p>
        <ul className="flex space-x-5 text-2xl ">
          {Array.map((item) => (
            <li>{item.content}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
