import Image from "next/image";
import { useMemo } from "react";

const FrameComponent = ({
  thereWasAThunderstormAndO,
  ellipse20,
  propWidth,
}) => {
  const frameButtonStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <button
      className="cursor-pointer [border:none] p-0 bg-[transparent] w-[241px] flex flex-col items-center justify-start gap-[16px]"
      style={frameButtonStyle}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[5px]">
        <div className="flex flex-row items-start justify-start gap-[3px]">
          <Image
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            loading="lazy"
            alt=""
            src="/star.svg"
            width={5}
            height={5}
          />
          <Image
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            alt=""
            src="/star.svg"
            width={5}
            height={5}
          />
          <Image
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            alt=""
            src="/star.svg"
            width={5}
            height={5}
          />
          <Image
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            alt=""
            src="/star.svg"
            width={5}
            height={5}
          />
          <Image
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            alt=""
            src="/star.svg"
            width={5}
            height={5}
          />
        </div>
        <div className="self-stretch relative text-xs leading-[18px] font-semibold font-text-sm-regular text-g-50 text-center">
          {thereWasAThunderstormAndO}
        </div>
      </div>
      <Image
        className="h-7 w-7 relative rounded-[50%] object-contain"
        alt=""
        src={ellipse20}
        width={7}
        height={7}
      />
    </button>
  );
};

export default FrameComponent;
