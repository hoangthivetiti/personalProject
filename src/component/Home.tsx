import { RightOutlined } from "@ant-design/icons";
import React from "react";

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <div className="relative font-[Epilogue]">
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://lh3.googleusercontent.com/i0liLyeyVhiAzCIhpkBpL-7bkR7x2nPksHs6alQvz6gsa5YbkocCQ_x9I2scCmMu4gv2f3v0l8BYuVJJ6vCMKXOY1Aa5SmXQ=w4000"
          alt=""
        />
        <div className="absolute top-1/2 w-[100%] text-[#ffff] p-10 text-center  transform -translate-y-1/2">
          <p className="text-xl font-medium">
            This is an example paragraph. You can replace the content here with
            your own text This is an example paragraph. <br />
            This is an example paragraph. You can replace the content here with
            your own text
          </p>
          <p className="text-[64px] font-semibold">
            Establishing a Robustr <br /> NbS Project Framework
          </p>
          <button className="bg-white text-black rounded-2xl px-10 py-3">
            CONTACT INFOMATION {<RightOutlined />}
          </button>
        </div>
      </div>
    </>
  );
}
