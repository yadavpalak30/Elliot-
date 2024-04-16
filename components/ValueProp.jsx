import Image from "next/image";
import FrameComponent4 from "../components/FrameComponent4";
import WhitefishElectricians from "../components/WhitefishElectricians";

const ValueProp = () => {
  return (
    <div className="w-full relative bg-gray-500 overflow-hidden flex flex-col items-center justify-start pt-[115px] px-5 pb-[216px] box-border gap-[50px] leading-[normal] tracking-[normal] text-left text-xl text-g-25 font-text-sm-regular mq675:gap-[25px]">
      <div className="w-[1749px] h-[548px] absolute !m-[0] right-[-825px] bottom-[-2844.15px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] [transform:_rotate(-29.8deg)] [transform-origin:0_0]" />
      <div className="w-[1240px] flex flex-row items-start justify-center py-0 pr-0 pl-[29px] box-border max-w-full">
        <div className="relative leading-[30px] font-medium z-[3] mq450:text-base mq450:leading-[24px]">{`Residential & Commercial Services`}</div>
      </div>
      <main className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <section className="absolute top-[1875.15px] left-[248px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0]" />
        <section className="absolute top-[690.15px] left-[-931px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[1]" />
        <section className="absolute top-[341.15px] left-[410px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[2]" />
        <Image
          className="absolute top-[50px] left-[706px] rounded-13xl w-[57px] h-[57px] overflow-hidden z-[3]"
          loading="lazy"
          alt=""
          src="/frame-15.svg"
          width={57}
          height={57}
        />
        <Image
          className="absolute top-[435px] left-[859px] w-[473px] h-[403px] object-contain z-[5]"
          loading="lazy"
          alt=""
          src="/image-png-1-1@2x.png"
          width={473}
          height={403}
        />
      </main>
      <div className="w-[1240px] flex flex-col items-start justify-start gap-[120px] max-w-full text-[64px] mq450:gap-[30px] mq675:gap-[60px]">
        <FrameComponent4 />
        <div className="w-[784.4px] flex flex-col items-start justify-start gap-[45px] max-w-full mq450:gap-[22px]">
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[40px] font-extrabold font-inherit inline-block max-w-full z-[3] mq450:text-19xl mq450:leading-[24px] mq750:text-[51px] mq750:leading-[32px]">
            <p className="[margin-block-start:0] [margin-block-end:40px]">
              In an emergency?
            </p>
            <p className="m-0">We are available 24/7</p>
          </h1>
          <div className="self-stretch flex flex-row items-end justify-between gap-[20px] text-center text-[18.4px] text-black mq450:flex-wrap">
            <div className="w-[218px] flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border">
              <WhitefishElectricians
                talkWithJosh="Speak with Josh"
                propAlignSelf="stretch"
                propColor="#0f0f0f"
                propMinWidth="126px"
              />
            </div>
            <div className="h-[30px] w-[30px] relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white shadow-[0px_1.2px_3.49px_rgba(16,_24,_40,_0.1),_0px_1.2px_2.33px_rgba(16,_24,_40,_0.06)] w-full h-full z-[3]" />
              <div className="absolute top-[0.02px] left-[11.56px] leading-[24px] font-semibold inline-block [transform:_rotate(29.9deg)] [transform-origin:0_0] min-w-[19px]">
                ⚡️
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueProp;
