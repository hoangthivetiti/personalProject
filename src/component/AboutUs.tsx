import { RightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {};

export default function AboutUs({ }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
        transition={{ duration: 1 }}
        className="flex justify-between w-full mt-16 container mx-auto h-[525px] items-center"
      >
        <div className="flex w-[30%] space-x-5 h-full">
          <motion.img
            className="w-[270px] max-h-[425px]"
            src="https://lh3.googleusercontent.com/4-9CkrtGFLloU_L81Tl96EEa0krHPh8FVz0J-K7lTDyE_3ioFjCOrXUuCDfPeHT6PcCCALGoIU9kTDYRI6WY4hlGf9epLyo=rw-w384"
            alt=""
            ref={ref}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            className="w-[270px] max-h-[425px] mt-[100px]"
            src="https://lh3.googleusercontent.com/9E-SDeJqKigI-h2NG5SwPjuW6b79qfzgORGmVNOK_uL3IpRmehWHqz59LpMsINbbZVAkqBFhRySkUX2CeBtNuHlAUX62tPB1=rw-w384"
            alt=""
            ref={ref}
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
          />
        </div>

        <div className="w-[51%] ">
          <motion.p
            ref={ref}
            className="text-[64px] font-medium pb-7"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Our Work
          </motion.p>
          <p className="text-[#384A38] text-xl font-medium">
            This is an example paragraph. You can replace the content here with
            your own text This is an example paragraph. This is an example
            paragraph. You can replace the content here with your own text. This
            is an example paragraph. You can replace the content here with your
            own text This is an example paragraph. This is an example paragraph.
            You can replace the content here with your own text
          </p>
          <motion.button
            className="bg-[#384A38] flex items-center py-2 px-7 rounded-full text-white text-lg font-medium mt-5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p>LEARN MORE</p>
            <RightOutlined className="text-sm pl-2" />
          </motion.button>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 justify-items-center gap-y-10 mt-8">
        <div className="text-center">
          <p className="text-7xl font-[550] text-[#384A38]">20+</p>
          <p className="text-lg font-medium text-[#384A38]">Years of experience</p>
        </div>
        <div className="text-center">
          <p className="text-7xl font-[550] text-[#384A38]">1.5M</p>
          <p className="text-lg font-medium text-[#384A38]">Cubic Metres of Log</p>
        </div>
        <div className="text-center">
          <p className="text-7xl font-[550] text-[#384A38]">15K</p>
          <p className="text-lg font-medium text-[#384A38]">Happy Customers</p>
        </div>
        <div className="text-center">
          <p className="text-7xl font-[550] text-[#384A38]">1.2M</p>
          <p className="text-lg font-medium text-[#384A38]">Made of wooddas</p>
        </div>
      </div>
    </>
  );
}