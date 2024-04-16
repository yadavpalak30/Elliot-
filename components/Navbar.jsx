import WhitefishElectricians from "./WhitefishElectricians";

const Navbar = () => {
  return (
    <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full z-[8]">
      <div className="flex flex-col items-start justify-start pt-[11.5px] pb-0 pr-[27px] pl-0">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[39px] w-[39px] relative rounded-[5.57px] [background:linear-gradient(180deg,_#2d2c2c,_#010101)] overflow-hidden shrink-0">
            <div className="absolute top-[10.4px] left-[10.4px] rounded-[5.57px] bg-white shadow-[0px_0.7px_1.39px_rgba(0,_0,_0,_0.25)] w-[20.2px] h-[4.9px]" />
            <div className="absolute top-[24.4px] left-[10.4px] rounded-[5.57px] bg-white shadow-[0px_0.7px_1.39px_rgba(0,_0,_0,_0.25)] w-[20.2px] h-[4.9px]" />
            <div className="absolute top-[17.4px] left-[10.4px] rounded-[5.57px] bg-white shadow-[0px_0.7px_1.39px_rgba(0,_0,_0,_0.25)] w-[15.3px] h-[4.9px]" />
          </button>
          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-text-sm-regular text-g-25 text-left inline-block">
              <p className="m-0">EllioTt</p>
              <p className="m-0">Electric</p>
            </button>
          </div>
        </div>
      </div>
      <nav className="m-0 w-[487px] flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0 box-border max-w-full mq1125:hidden">
        <nav className="m-0 self-stretch rounded-2xl [filter:drop-shadow(0px_1px_2px_rgba(0,_0,_0,_0.1))] flex flex-row items-start justify-between py-[7px] px-[17px] gap-[20px] text-left text-base text-g-50 font-text-sm-regular">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[24px] font-medium font-text-sm-regular text-g-50 text-left inline-block min-w-[47px]">
            About
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[24px] font-medium font-text-sm-regular text-g-50 text-left inline-block min-w-[67px]">
            Services
          </button>
          <div className="relative leading-[24px] font-medium inline-block min-w-[53px]">
            Pricing
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[24px] font-medium font-text-sm-regular text-g-50 text-left inline-block min-w-[62px]">
            Contact
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[24px] font-medium font-text-sm-regular text-g-50 text-left inline-block min-w-[88px]">
            Testimonial
          </button>
        </nav>
      </nav>
      <WhitefishElectricians talkWithJosh="Talk with Josh" />
    </div>
  );
};

export default Navbar;
