const Contactus = () => {
    return (
      <div className="w-full relative bg-gray-500 max-w-full flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
        <section className="flex-1 flex flex-row items-start justify-start max-w-full text-left text-sm text-g-50 font-text-sm-regular">
          <div className="flex-1 bg-gray-500 overflow-hidden flex flex-col items-start justify-start pt-[123px] px-[94px] pb-[129px] box-border relative gap-[64px] max-w-full lg:pl-[47px] lg:pr-[47px] lg:box-border mq750:gap-[32px] mq750:pt-20 mq750:px-[23px] mq750:pb-[84px] mq750:box-border mq450:gap-[16px]">
            <div className="w-[1749px] h-[548px] absolute !m-[0] top-[326.15px] left-[-849px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] [transform:_rotate(-29.8deg)] [transform-origin:0_0]" />
            <div className="w-[1749px] h-[548px] absolute !m-[0] top-[405.15px] left-[-304px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[1]" />
            <div className="w-[1749px] h-[548px] absolute !m-[0] right-[-820px] bottom-[-462.15px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[2]" />
            <div className="w-[1228px] flex flex-row items-end justify-between max-w-full gap-[20px] lg:flex-wrap">
              <div className="w-[482px] flex flex-col items-end justify-start gap-[23.5px] min-w-[482px] max-w-full lg:flex-1 mq750:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-start text-11xl text-g-25">
                  <div className="w-[314px] flex flex-col items-start justify-start gap-[8px] z-[2]">
                    <div className="w-[73px] h-[7px] relative">
                      <div className="absolute top-[4.9px] left-[73px] rounded bg-saddlebrown w-12 h-0.5 [transform:_rotate(-180deg)] [transform-origin:0_0]" />
                      <div className="absolute top-[7px] left-[29px] rounded bg-w-300 w-[29px] h-[7px] [transform:_rotate(-180deg)] [transform-origin:0_0] z-[1]" />
                    </div>
                    <h1 className="m-0 self-stretch relative text-inherit leading-[38px] font-bold font-inherit mq1050:text-5xl mq1050:leading-[30px] mq450:text-[18px] mq450:leading-[23px]">
                      Contact us
                    </h1>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full z-[3]">
                  <div className="relative leading-[20px] font-medium">
                    Name/ Organization
                  </div>
                  <input
                    className="w-[399px] [border:none] [outline:none] bg-gray-100 h-9 rounded shadow-[0px_1px_1px_rgba(0,_0,_0,_0.05)] flex flex-row items-start justify-start py-2 px-3 box-border font-text-sm-regular text-sm text-dimgray-300 max-w-full"
                    placeholder="name"
                    type="text"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full z-[3]">
                    <div className="relative leading-[20px] font-medium inline-block min-w-[95px]">
                      Email Address
                    </div>
                    <input
                      className="w-[399px] [border:none] [outline:none] bg-gray-100 h-9 rounded shadow-[0px_1px_1px_rgba(0,_0,_0,_0.05)] flex flex-row items-start justify-start py-2 px-3 box-border font-text-sm-regular text-sm text-dimgray-300 max-w-full"
                      placeholder="email address"
                      type="text"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full z-[3]">
                    <div className="relative leading-[20px] font-medium">
                      Additional information
                    </div>
                    <textarea
                      className="[border:none] bg-gray-100 h-[122px] w-[399px] [outline:none] rounded shadow-[0px_1px_1px_rgba(0,_0,_0,_0.05)] flex flex-row items-start justify-start py-2 px-3 box-border font-text-sm-regular text-sm text-dimgray-300 max-w-full"
                      placeholder="Description"
                      rows={6}
                      cols={20}
                    />
                  </div>
                </div>
              </div>
              <img
                className="w-[602px] relative rounded-2xl max-h-full overflow-hidden shrink-0 max-w-full z-[3] lg:flex-1"
                loading="lazy"
                alt=""
                src="/1.svg"
              />
            </div>
            <div className="w-[1168px] flex flex-row items-start justify-center max-w-full text-base">
              <div className="flex flex-col items-center justify-start gap-[19px] max-w-full z-[3]">
                <div className="relative leading-[24px] font-medium">
                  For more Enquires:
                </div>
                <div className="rounded-13xl flex flex-row items-center justify-center py-1.5 px-[15px] gap-[23px] text-xl border-[1px] border-solid border-w-25 mq750:flex-wrap">
                  <div className="flex flex-row items-center justify-start gap-[4px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/phone-2.svg"
                    />
                    <div className="relative leading-[30px] font-medium mq450:text-base mq450:leading-[24px]">
                      +(406) 862 1622
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[4px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/email.svg"
                    />
                    <div className="relative leading-[30px] font-medium whitespace-nowrap mq450:text-base mq450:leading-[24px]">
                      elliotelectricmt@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Contactus;
  