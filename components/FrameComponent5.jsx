import { useMemo } from "react";
import Image from "next/image";
const FrameComponent5 = ({ frame16, electrical, propMinWidth }) => {
  const electricalStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[236px] max-w-[256px] text-left text-base text-g-25 font-text-sm-regular">
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <Image
          className="h-[37px] w-[37px] relative rounded-13xl overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={frame16}
          width={37}
          height={37}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div
            className="relative leading-[24px] font-medium inline-block min-w-[71px]"
            style={electricalStyle}
          >
            {electrical}
          </div>
        </div>
        <div className="self-stretch relative leading-[24px] text-g-50 text-center">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in `}</div>
      </div>
    </div>
  );
};

export default FrameComponent5;
