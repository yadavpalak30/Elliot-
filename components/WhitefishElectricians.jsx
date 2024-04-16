import Image from "next/image";
import { useMemo } from "react";

const WhitefishElectricians = ({
  talkWithJosh,
  propAlignSelf,
  propColor,
  propMinWidth,
}) => {
  const whitefishElectriciansStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const talkWithJoshStyle = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  return (
    <button
      className="cursor-pointer [border:none] py-3 px-6 bg-w-300 rounded-lg shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start gap-[1px]"
      style={whitefishElectriciansStyle}
    >
      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
        <div className="rounded-lg shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start py-0 px-[10.5px]">
          <div
            className="relative text-base leading-[24px] font-medium font-text-sm-regular text-gray-500 text-left inline-block min-w-[110px] whitespace-nowrap"
            style={talkWithJoshStyle}
          >
            {talkWithJosh}
          </div>
        </div>
      </div>
      <Image
        className="h-[38px] w-[38px] relative rounded-[50%] object-contain"
        alt=""
        src="/round-shapes@2x.png"
        width={38}
        height = {38}
      />
    </button>
  );
};

export default WhitefishElectricians;
