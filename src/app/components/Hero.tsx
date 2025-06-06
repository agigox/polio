import Image from "next/image";
const Hero = () => {
  return (
    <div className="hero flex flex-col items-center gap-16 pt-24">
      <div className="container">
        <div className="content flex flex-col gap-12 items-center">
          <div className="headin-supporting flex flex-col gap-6 items-center">
            <div className="heading w-full text-gray-900 text-center text-display-lg-bold font-bold leading-display-lg tracking-display-lg">
              Manage your customers using AI
            </div>
            <div className="supporting flex w-full px-60">
              <div className="w-full text-gray-400 text-center font-text-xl-medium text-text-xl-medium leading-text-xl-medium relative flex-1">
                Powerful, flexible and data-driven, Polio makes it easy to build
                the exact CRM your business need
              </div>
            </div>
          </div>
          <div
            data-layer="buttons"
            className="Buttons inline-flex justify-start items-center gap-2.5"
          >
            <div
              data-layer="Button/Sign In"
              className="ButtonSignIn px-6 py-3 rounded-xl outline-1 outline-offset-[-1px] outline-gray-300 flex justify-center items-center"
            >
              <div
                data-layer="Sign in"
                className="SignIn text-center justify-center text-gray-500 text-base font-semibold font-['Plus_Jakarta_Sans'] leading-normal"
              >
                Sign in
              </div>
            </div>
            <div
              data-layer="Button/Start for free"
              className="ButtonStartForFree px-6 py-3 bg-gray-950 rounded-xl flex justify-center items-center"
            >
              <div
                data-layer="Start for free"
                className="StartForFree text-center justify-center text-white text-base font-semibold font-['Plus_Jakarta_Sans'] leading-normal"
              >
                Start for free
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content flex justify-center">
          <div className="image">
            <Image src="/Hero.png" width={1140} height={756} alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
