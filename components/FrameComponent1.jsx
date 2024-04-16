import { useMemo } from "react";

const FrameComponent1 = ({ propFlex, propWidth }) => {
  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  return (
    <div
      className="flex-1 rounded-lg bg-gray-100 shadow-[0px_1.9px_5.7px_rgba(16,_24,_40,_0.1),_0px_1.9px_3.8px_rgba(16,_24,_40,_0.06)] flex flex-col items-start justify-start pt-4 pb-[9px] pr-5 pl-6 box-border gap-[8px] max-w-full z-[2] text-left text-xs text-g-25 font-text-sm-regular"
      style={frameDivStyle}
    >
      <div className="flex flex-row items-center justify-start gap-[12px]">
        <img
          className="h-8 w-8 relative rounded-[50%] object-contain"
          loading="lazy"
          alt=""
          src="/ellipse-20-3@2x.png"
        />
        <div className="flex flex-col items-start justify-start">
          <div className="relative leading-[18px] font-medium inline-block min-w-[104px]">
            Sharmon Votteller
          </div>
          <div className="relative text-3xs leading-[18px] text-g-50">
            Operations Manager. ZR Homes
          </div>
        </div>
      </div>
      <div className="self-stretch h-44 relative text-base leading-[24px] inline-block shrink-0">
        <p className="[margin-block-start:0] [margin-block-end:16px] whitespace-pre-wrap">
          We had an electrical issue in our garage and the owner was very
          responsive and came out the same day! That in itself was impressive.
          Then he did an excellent job at a reasonable price. I would definitely
          recommend Elliotts Electric.
        </p>
      </div>
    </div>
  );
};

export default FrameComponent1;
