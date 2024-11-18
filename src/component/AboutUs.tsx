import { RightOutlined } from "@ant-design/icons";
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

        <div className="w-[51%] ">
          <p>About Our Work</p>
          <p>
            This is an example paragraph. You can replace the content here with
            your own text This is an example paragraph. This is an example
            paragraph. You can replace the content here with your own text. This
            is an example paragraph. You can replace the content here with your
            own text This is an example paragraph. This is an example paragraph.
            You can replace the content here with your own text
          </p>
          <button>
            LEARN MORE
            {<RightOutlined />}
          </button>
        </div>
      </div>
    </>
  );
}
