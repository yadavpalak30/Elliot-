import Navbar from "./Navbar";
import FrameComponent from "./FrameComponent";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full h-[844px] relative bg-gray-500 overflow-hidden flex flex-col items-end justify-start pt-[26px] pb-[250px] pr-[100px] pl-[98px] box-border gap-[1796px] tracking-[normal] leading-[normal] mq450:gap-[449px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1300:h-auto mq800:gap-[898px] mq800:pl-[49px] mq800:pr-[50px] mq800:box-border">

      <div className="w-px h-[1146px] absolute !m-[0] bottom-[-269px] left-[205px] box-border border-r-[1px] border-solid border-gray-200" />

      <div className="w-px h-[1152px] absolute !m-[0] right-[204px] bottom-[-289px] box-border z-[7] border-r-[1px] border-solid border-gray-200" />

      <section className="w-full h-full !m-[0] absolute top-[0px] right-[0px] left-[0px] flex flex-col items-start justify-end pt-[200px] px-[105px] pb-[199.8px] box-border mq800:pl-[52px] mq800:pr-[52px] mq800:box-border">
        
        <div className="w-[1749px] h-[548px] absolute !m-[0] top-[368.15px] right-[-174px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[2]" />
        
        <button className="cursor-pointer [border:none] py-3 px-6 bg-w-300 w-[274px] rounded-lg shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start box-border gap-[1px] z-[7]">
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <Image
              className=" w-6 h-6 relative overflow-hidden shrink-0"
              alt=""
              src="/phone.svg"
               width={6}
               height={6}
            />
          </div>
          <div className="flex-1 relative text-5xl leading-[32px] font-semibold font-text-sm-regular text-gray-400 text-center mq450:text-lgi mq450:leading-[26px]">
            (406) 862 1622
          </div>
        </button>
      </section>
      <section className="w-[1749px] h-[548px] absolute !m-[0] right-[-652px] bottom-[-2683.15px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] [transform:_rotate(-29.8deg)] [transform-origin:0_0]" />
      
      <section className="self-stretch flex flex-row items-start justify-end py-0 pr-2 pl-0 box-border max-w-full shrink-0 text-left text-[96px] text-g-25 font-text-sm-regular">
        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
          <div className="h-px w-[1483px] absolute !m-[0] top-[80px] right-[-130px] box-border z-[8] border-t-[1px] border-solid border-gray-200" />
          <div className="flex-1 flex flex-col items-start justify-start gap-[67.5px] shrink-0 [debug_commit:1de1738] max-w-full mq450:gap-[17px] mq800:gap-[34px]">
            <header className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
              <Navbar />
            </header>
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-[50px] box-border max-w-full mq1300:pl-[25px] mq1300:pr-[25px] mq1300:box-border">
              <div className="flex flex-row items-start justify-center gap-[64px] max-w-full z-[8] mq1300:flex-wrap mq800:gap-[16px] mq1125:gap-[32px]">
                <FrameComponent
                  thereWasAThunderstormAndO={`"There was a thunderstorm and our main board had fried. Josh and his team came at middle of the night to fix our issue."`}
                  ellipse20="/ellipse-20-1@2x.png"
                  propWidth="221px"
                />
                <FrameComponent
                  thereWasAThunderstormAndO={`"LIFESAVER! We had an emergency and Josh was available. I recommend him to everyone"`}
                  ellipse20="/ellipse-20-2@2x.png"
                  propWidth="221px"
                />
                <FrameComponent
                  thereWasAThunderstormAndO={`"LIFESAVER! We had an emergency and Josh was available. I recommend him to everyone"`}
                  ellipse20="/ellipse-20-2@2x.png"
                  propWidth="221px"
                />
                <FrameComponent
                  thereWasAThunderstormAndO={`"LIFESAVER! We had an emergency and Josh was available. I recommend him to everyone"`}
                  ellipse20="/ellipse-20-2@2x.png"
                  propWidth="221px"
                />
              </div>
            </div>
            <h1 className="m-0 w-[798px] relative text-inherit tracking-[-0.02em] leading-[110px] font-black font-inherit inline-block max-w-full z-[7] mq450:text-10xl mq450:leading-[44px] mq800:text-29xl mq800:leading-[66px]">{`Best Electricians in Whitefish, MT `}</h1>
          </div>
          <div className="h-[571px] w-full absolute !m-[0] bottom-[-278px] left-[-98px] text-center text-base">
            <div className="absolute top-[322px] left-[403px] leading-[38px] font-semibold inline-block w-[336px] h-[37px] z-[7]">{`Josh and Kevin are available `}</div>
            <div className="absolute top-[0px] left-[-559px] w-[1790.4px] h-[1343.8px]">
              <Image
                className="absolute top-[333px] left-[984px] w-[15px] h-[15px] z-[8]"
                loading="lazy"
                alt=""
                src="/group-14.svg"
                width={15}
                height={15}
              />
              <div className="absolute top-[868.15px] left-[0px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.05),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[10]" />
            </div>
          </div>
        </div>
      </section>
      <div className="w-[1221px] h-px relative box-border shrink-0 [debug_commit:1de1738] max-w-full z-[1] border-t-[1px] border-solid border-gray-200" />
      <footer className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <div className="absolute top-[944.15px] left-[-833px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[1]" />
        <div className="absolute top-[284.15px] left-[478px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[4]" />
        <div className="absolute top-[218.15px] left-[164px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.05),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[6]" />
        <Image
          className="absolute top-[313px] left-[792px] w-[843px] h-[562px] object-contain z-[8]"
          loading="lazy"
          alt=""
          src="/360-f-566389419-hjg05r6gg5vqievxfuk67ieqcuy216yg@2x.png"
          width={843}
          height={562}
        />
        <div className="absolute top-[1032.15px] left-[412px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.05),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[9]" />
        <div className="absolute top-[0px] left-[0px] w-[1042.4px] h-[807.8px]">
          <div className="absolute top-[332.15px] left-[-748px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[3]" />
          <Image
            className="absolute top-[186px] left-[105px] rounded-13xl w-11 h-11 overflow-hidden z-[4]"
            loading="lazy"
            alt=""
            src="/frame-154.svg"
            width={11}
            height={11}
          />
        </div>
        <div className="absolute top-[-222px] left-[412px] w-[1790.4px] h-[1343.8px]">
          <div className="absolute top-[868.15px] left-[0px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.05),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[5]" />
          <Image
            className="absolute top-[408px] left-[899px] rounded-13xl w-11 h-11 overflow-hidden object-contain z-[10]"
            loading="lazy"
            alt=""
            src="/frame-155@2x.png"
            width={11}
            height={11}
          />
        </div>
      </footer>
    </div>
  );
};

export default HeroSection;
