import { PlusOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";

type Props = {};

export default function AboutUs({}: Props) {
  return (
    <>
      <div className="flex justify-between w-full mt-16 container mx-auto h-[525px] items-center">
        <div className="flex w-[30%] space-x-5 h-full">
          <img
            className="w-72 h-[425px] "
            src="https://lh3.googleusercontent.com/4-9CkrtGFLloU_L81Tl96EEa0krHPh8FVz0J-K7lTDyE_3ioFjCOrXUuCDfPeHT6PcCCALGoIU9kTDYRI6WY4hlGf9epLyo=rw-w384"
            alt=""
          />
          <img
            className="w-72 h-[425px] mt-[100px]"
            src="https://lh3.googleusercontent.com/9E-SDeJqKigI-h2NG5SwPjuW6b79qfzgORGmVNOK_uL3IpRmehWHqz59LpMsINbbZVAkqBFhRySkUX2CeBtNuHlAUX62tPB1=rw-w384"
            alt=""
          />
        </div>

        <div className="w-[51%] font-[Epilogue] ">
          <p className="font-bold text-[70px]">About Our Work</p>
          <p className="text-[16px]">
            This is an example paragraph. You can replace the content here with
            your own text This is an example paragraph. This is an example
            paragraph. You can replace the content here with your own text. This
            is an example paragraph. You can replace the content here with your
            own text This is an example paragraph. This is an example paragraph.
            You can replace the content here with your own text
          </p>
          <button className="bg-[#384B38] text-[#ffff] rounded-3xl px-10 py-3 mt-6 text-[17px]">
            LEARN MORE
            {<RightOutlined />}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 justify-items-center m-20 text-center">
        <div>
          <p className="text-[80px] font-[Epilogue] text-[#384C39] font-bold">
            20+
          </p>
          <p className="text-[24px] font-[Epilogue] text-[#212529]">
            Years of experience
          </p>
        </div>
        <div>
          <p className="text-[80px] font-[Epilogue] text-[#384C39] font-bold">
            1.5M
          </p>
          <p className="text-[24px] font-[Epilogue] text-[#212529]">
            Cubic Metres of Log
          </p>
        </div>
        <div>
          <p className="text-[80px] font-[Epilogue] text-[#384C39] font-bold">
            15K
          </p>
          <p className="text-[24px] font-[Epilogue] text-[#212529]">
            Happy Customers
          </p>
        </div>
        <div>
          <p className="text-[80px] font-[Epilogue] text-[#384C39] font-bold">
            1.2M
          </p>
          <p className="text-[24px] font-[Epilogue] text-[#212529]">
            Made of wood
          </p>
        </div>
      </div>

      <div className="relative text-white w-full h-[647px] ">
        <img
          className="w-full h-[647px] "
          src="https://lh3.googleusercontent.com/G-ZeDO53OB8iDQF5NUMpMPrp4RNUrkqt0IgBNEiuyYGlv2MFtHRqaFXpgj8zlVHfIJKrAN-IPlCE50uZUuhl4uuO3eVUMZf5Gg=w5984"
          alt=""
        />
        <div className="absolute top-[70px] bottom-[50px] ml-[10%] mr-[10%] text-center">
          <p className="text-[71px] ">
            A Comprehensive Exploration of Responsible Wood Production Practices
            and Innovation
          </p>
          <button className="text-black bg-white px-10 py-3 rounded-3xl">
            CONSULATION <RightOutlined />
          </button>
        </div>
      </div>
    </>
  );
}
