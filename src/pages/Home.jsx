import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center bg-[#001E2B] h-[934px] relative">
      <div className="flex flex-col items-center w-screen z-10 p-[100px]">
        <h1 className="flex-none grow-0 w-[700px] text-4xl font-semibold text-transparent bg-clip-text text-center bg-gradient-to-b from-[#FFFFFF,#FFFFFF] to-[#001E2B] leading-[68px]">
          We’re loved from clients
        </h1>
        <p className="flex-none grow-0 w-[700px] text-center text-[#F7F8F8] opacity-50 leading-[21.6px]">
          We are proud of the great projects Angle Brackets has taken part in.
          Here is what our customers say about our expertise in Android.
        </p>
      </div>

      <div className="w-[1140px] h-[490px] flex flex-row bg-[#21313C] p-[80px] rounded-[20px] ">
        <div className="basis-1/2 flex-none grow-0 ">
          <p className="w-[450px] h-[82px] font-semibold text-[#FFFFFF] text-[30px] font-[700]">
            "Angle Brackets is professional & top-notch"
          </p>
          <p className="w-[450] h-[194] text-[#F7F8F8] opacity-50 leading-[26px] mt-7">
            Angle Brackets delivered the mobile app right to our expectations.
            Their swift workflow complemented their professional management
            style. Andersen's team is available to its clients.
          </p>
          <div className="w-[60px] h-[60px] mt-[60px] bg-[url('../public/1.jpg')] bg-cover rounded-full">
            <h1 className="w-[72px] h-[22px] text-[#FFFFFF] leading-[22px] text-[16px] font-[700] ml-20">
              John Doe
            </h1>
            <p className="w-[250px] h-[19px] text-[#F7F8F8] leading-[19px] text-[14px] font-[400] opacity-50 ml-20">
              CEO & Founder Of Designership
            </p>
          </div>
        </div>
        <div className="basis-1/2 flex-none grow-0 space-y-6 ml-20">
          <h1 className="w-[450px] h-[22px] text-[#FFFFFF] font-[700] text-[16px] leading-[22px]">
            Country
          </h1>
          <p className="w-[22px] h-[22px] bg-[url('../public/2.jpg')] bg-cover rounded-full">
            <h1 className="w-[418px] h-[22px] text-[#FFFFFF] font-[400] text-[16px] leading-[22px] opacity-50 ml-8">
              Germany
            </h1>
          </p>
          <h1 className="w-[450px] h-[22px] text-[#FFFFFF] font-[700] text-[16px] leading-[22px]">
            Project Summary
          </h1>
          <p className="w-[450px] h-[22px] text-[#FFFFFF] font-[400] text-[16px] leading-[22px] opacity-50">
            A Fintech App For A New Startup
          </p>
          <div className="flex flex-row flex-wrap">
            <h1 className="w-[61px] h-[22px] text-[#FFFFFF] font-[700] text-[16px] leading-[22px]">
              Industry
              <p className="w-[56px] h-[22px] text-[#FFFFFF] font-[400] text-[16px] leading-[22px] opacity-50 mt-4">
                Finance
              </p>
            </h1>
            <h1 className="w-[80px] h-[22px] text-[#FFFFFF] font-[700] text-[16px] leading-[22px] ml-10">
              Team Size
              <p className="w-[100px] h-[22px] text-[#FFFFFF] font-[400] text-[16px] leading-[22px] opacity-50 mt-4">
                11 Specialists
              </p>
            </h1>
            <h1 className="w-[70px] h-[22px] text-[#FFFFFF] font-[700] text-[16px] leading-[22px] ml-10">
              Duration
              <p className="w-[70px] h-[22px] text-[#FFFFFF] font-[400] text-[16px] leading-[22px] opacity-50 mt-4">
                6 Months
              </p>
            </h1>
            <h1 className="w-[80px] h-[22px] text-[#FFFFFF] font-[700] text-[16px] leading-[22px] ml-10 ">
              Budget
              <p className="w-[100px] h-[22px] text-[#FFFFFF] font-[400] text-[16px] leading-[22px] opacity-50 mt-4">
                Over $40k
              </p>
            </h1>
            <h1 className="w-[450px] h-[22px] text-[#FFFFFF] font-[700] text-[16px] leading-[22px] mt-16">
              Technologies
              <div className="flex justify-between mt-6">
                <p className="w-[34px] h-[22px] text-[#FFFFFF] font-[400] text-[16px] leading-[22px] opacity-50 ">
                  Swift
                </p>
                <p className="w-[34px] h-[22px] text-[#FFFFFF] font-[400] text-[16px] leading-[22px] opacity-50 mr-80 ">
                  Swift UI
                </p>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
