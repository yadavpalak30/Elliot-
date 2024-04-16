import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";

const SocialProof = () => {
  return (
    <div className="w-full relative bg-gray-500 overflow-hidden flex flex-col items-start justify-start pt-[157px] pb-[228px] pr-[75px] pl-[131px] box-border gap-[24px] leading-[normal] tracking-[normal] mq450:pl-5 mq450:box-border mq750:pl-[65px] mq750:pr-[37px] mq750:box-border">
      <footer className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <div className="absolute top-[2833.15px] left-[-815px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0]" />
        <div className="absolute top-[1817.15px] left-[-634px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[1]" />
        <div className="absolute top-[2912.15px] left-[-270px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[2]" />
        <div className="absolute top-[3223.15px] left-[516px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[3]" />
        <div className="absolute top-[1875.15px] left-[248px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[3]" />
        <div className="absolute top-[690.15px] left-[-931px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[5]" />
        <div className="absolute top-[341.15px] left-[410px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[7]" />
      </footer>
      <FrameComponent3 />
      <FrameComponent2 />
      <section className="w-[1129px] h-full !m-[0] absolute top-[0px] right-[0px] bottom-[0px] flex flex-col items-start justify-end py-[120px] px-[308px] box-border">
        <div className="w-[1749px] h-[548px] absolute !m-[0] right-[-620px] bottom-[-445.15px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[4]" />
        <button className="cursor-pointer [border:none] py-3 px-6 bg-w-300 w-[274px] rounded-lg shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start box-border gap-[1px] z-[8]">
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              alt=""
              src="/phone.svg"
            />
          </div>
          <div className="flex-1 relative text-5xl leading-[32px] font-semibold font-text-sm-regular text-gray-400 text-center mq450:text-lgi mq450:leading-[26px]">
            (406) 862 1622
          </div>
        </button>
      </section>
      <div className="w-[526px] hidden max-w-full z-[4]" />
    </div>
  );
};

export default SocialProof;
