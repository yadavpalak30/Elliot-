import FrameComponent5 from "./FrameComponent5";

const FrameComponent4 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-3 box-border max-w-full text-left text-base text-g-25 font-text-sm-regular">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[68px] max-w-full z-[3] mq450:gap-[17px] mq675:gap-[34px]">
        <FrameComponent5 frame16="/frame-16.svg" electrical="Electrical" />
        <FrameComponent5
          frame16="/frame-16-1.svg"
          electrical="Contracting"
          propMinWidth="91px"
        />
        <FrameComponent5
          frame16="/frame-16-2.svg"
          electrical="Installations"
          propMinWidth="93px"
        />
        <FrameComponent5
          frame16="/frame-16-3.svg"
          electrical="Repairs"
          propMinWidth="58px"
        />
      </div>
    </div>
  );
};

export default FrameComponent4;
