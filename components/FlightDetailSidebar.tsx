// import type { NextPage } from "next";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import AirlineLogo from "/components/assets/airline-logo@2x.png"
// import line10 from "/components/assets/line-10.svg";
// import Slider from "react-slick";
// import leftArrowPink from "/components/assets/leftarrowPink.svg";
// import planeSeatsImage from "/components/assets/planeSeatsImage.png";
// import dropDownIcon from "/components/assets/dropdownIcon.svg";


// const cardData = [
//     {
//         title: "Basic Economy",
//         onboard: "Onboard experience",
//         Ticketing: "Ticket features",
//         TicketFeature: [
//             { title: "Cancellation: Not Available" },
//             { title: "Changes: Not Available" },
//             { title: "Personal item: Available at no charge" },
//             { title: "Lounge access: Available at charge" },
//             { title: "Priority check-in: Not Available" },
//         ],
//         price: "1,584",
//     },
//     {
//         title: "Premium Economy",
//         onboard: "Onboard experience",
//         Ticketing: "Ticket features",
//         TicketFeature: [
//             { title: "Cancellation: Not Available" },
//             { title: "Changes: Not Available" },
//             { title: "Personal item: Available at no charge" },
//             { title: "Lounge access: Available at charge" },
//             { title: "Priority check-in: Not Available" },
//         ],
//         price: "1,584",
//     },
//     {
//         title: "Premium Economy",
//         onboard: "Onboard experience",
//         Ticketing: "Ticket features",
//         TicketFeature: [
//             { title: "Cancellation: Not Available" },
//             { title: "Changes: Not Available" },
//             { title: "Personal item: Available at no charge" },
//             { title: "Lounge access: Available at charge" },
//             { title: "Priority check-in: Not Available" },
//         ],
//         price: "1,584",
//     },
//     {
//         title: "Premium Economy",
//         onboard: "Onboard experience",
//         Ticketing: "Ticket features",
//         TicketFeature: [
//             { title: "Cancellation: Not Available" },
//             { title: "Changes: Not Available" },
//             { title: "Personal item: Available at no charge" },
//             { title: "Lounge access: Available at charge" },
//             { title: "Priority check-in: Not Available" },
//         ],
//         price: "1,584",
//     },
// ];

// const cabinClasses = [
//     { name: "ECONOMY" },
//     { name: "BUSINESS" },
//     { name: "FIRST" },
// ];

// const FlightDetailSidebar = () => {
//     const slider = useRef<any>(null);

//     var settings = {
//         dots: true,
//         infinite: false,
//         arrows: false,
//         speed: 500,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//     };
//     const [upgrade, setUpgrade] = useState(0);
//     const [check, setCheck] = useState(true);
//     const [ticketFeature, setTicketFeature] = useState(true);
//     const [onboardExperience, setonboardExperience] = useState(true);

//     const cardFunc = (prop: any) => {
//         setUpgrade(prop);
//         setCheck(true);
//     };

//     return (
//         <div
//             className="relative w-[600px] bg-white flex flex-row items-start justify-start [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] h-full max-w-[90%] overflow-auto text-left text-xl text-gray-1900 font-plus-jakarta-sans md:w-[500px]"
//             data-animate-on-scroll
//         >
//             <div className="flex-1 self-stretch bg-white-200 overflow-auto flex flex-col p-[30px] box-border items-start justify-start gap-[37px]">
//                 <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-3xs text-green">
//                     <label className="rounded-[12px] bg-[#CDEFDB] flex flex-row p-[4px_12px] box-border items-start justify-start whitespace-nowrap">
//                         <div className="relative leading-[16px] text-[#2EBD68] font-semibold inline-block">
//                             BEST DEAL
//                         </div>
//                     </label>
//                     <h4 className="m-[0] relative text-7xl leading-[32px] font-medium font-inherit text-gray-2000 inline-block">
//                         Daytona Beach to Los Angeles
//                     </h4>
//                     <div className="flex flex-col items-start justify-start gap-[15px] text-5xl text-gray-1900">
//                         <div className="flex flex-row items-center justify-start gap-[20px] text-xl text-gray-2000">

//                             <div className="relative w-[16px] h-[17.96px] shrink-0">
//                                 <Image src={AirlineLogo} />
//                             </div>

//                             <p className="m-[0] relative leading-[24px] inline-block">
//                                 American Airlines
//                             </p>
//                             <Image src={line10} />
//                             <p className="m-[0] relative leading-[24px] inline-block">
//                                 AA011
//                             </p>
//                             <Image src={line10} />
//                             <p className="m-[0] relative leading-[24px] inline-block">
//                                 Fri, 17 Jun 2022
//                             </p>
//                         </div>
//                         <h5 className="m-[0] relative text-[inherit] leading-[28px] font-normal font-inherit inline-block">
//                             8:00 am - 12:00 pm (1 Stop)
//                         </h5>
//                         <h5 className="m-[0] relative text-[inherit] leading-[28px] font-normal font-inherit inline-block">
//                             1h 30m in ABC (Layover Location)
//                         </h5>
//                     </div>
//                 </div>

//                 <button className="cursor-pointer [border:1px_solid_#e1e3e6] p-[8px_14px] bg-white-200 rounded-[100px] box-border relative overflow-hidden flex flex-row items-center justify-center">

//                     <div className="relative text-base leading-[20px] font-semibold font-plus-jakarta-sans text-gray-1500 text-left inline-block">
//                         Hide Details
//                     </div>
//                 </button>
//                 <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
//                     <div className="flex flex-row items-center justify-start gap-[214px]">
//                         <p className="m-[0] relative min-w-fit leading-[24px] font-medium inline-block">
//                             Upgrade your cabin class
//                         </p>
//                         <div className="flex flex-row items-start justify-start gap-[50px]">
//                             <button className="cursor-pointer focus:outline-none border-none p-[8px] bg-[#FCE8F3] rounded-[18px] flex flex-row box-border items-center justify-center" onClick={() => slider?.current?.slickPrev()}>

//                                 <div className="relative  w-[20px] h-[20px] shrink-0 overflow-hidden">
//                                     <Image src={leftArrowPink} />
//                                 </div>
//                             </button>
//                             <button className="cursor-pointer focus:outline-none border-none p-[8px] bg-[#FCE8F3] rounded-[18px] flex flex-row box-border items-center justify-center" onClick={() => slider?.current?.slickNext()}>

//                                 <div className="relative w-[20px] h-[20px] shrink-0 overflow-hidden">
//                                     <Image className="rotate-180 " src={leftArrowPink} />
//                                 </div>
//                             </button>
//                         </div>
//                     </div>


//                     {/* here new code  */}

//                     <div className="flex mt-10 w-full relative my-5">
//                         <div className="container">
//                             <Slider ref={slider} {...settings}>
//                                 {cardData.map((data, index) => {
//                                     return (
//                                         <div key={index}>
//                                             <div className="flex flex-col w-full shadow-lg mb-5 rounded-lg">

//                                                 <div className={`relative rounded-[10px_10px_0px_0px] flex justify-center  w-full h-[46px] shrink-0 ${upgrade === index && check ? "bg-violet-200"
//                                                     : "bg-[#777E90]"}`}>
//                                                     <h3 className="m-[0] absolute top-[15px]  text-[inherit] text-white leading-[16px] font-bold font-inherit inline-block 
//                          ">
//                                                         {data.title}
//                                                     </h3>
//                                                 </div>



//                                                 <div className="h-38 w-full">
//                                                     <Image src={planeSeatsImage} />
//                                                 </div>

//                                                 <div className="flex flex-col">
//                                                     <div className="flex justify-between px-5 mt-5 col">
//                                                         <h3
//                                                             className={`m-[0] min-w-fit font-bold font-inherit inline-block w-[153px] h-[18px]  ${upgrade === index && check
//                                                                 ? "text-violet-200"
//                                                                 : "text-gray-300"
//                                                                 }`}
//                                                         >
//                                                             {data.onboard}
//                                                         </h3>
//                                                         <div>
//                                                             {onboardExperience && upgrade == index ? (
//                                                                 <Image className="cursor-pointer" src={dropDownIcon} />
//                                                             ) : (
//                                                                 <Image className="cursor-pointer rotate-180" src={dropDownIcon} />
//                                                             )}
//                                                         </div>
//                                                     </div>
//                                                     <div
//                                                         className={`${onboardExperience && upgrade == index
//                                                             ? "onboarding-collapse"
//                                                             : "onboarding-collapse onboarding-close"
//                                                             }`}
//                                                     >
//                                                         <p className="text-3xs font-normal opacity-70 px-4 py-2 dark:text-white">
//                                                             Lorem, ipsum dolor sit amet consectetur
//                                                             adipisicing elit. Quaerat necessitatibus quam
//                                                             totam perspiciatis unde aspernatur facere dolor ut
//                                                             incidunt esse.
//                                                         </p>
//                                                     </div>
//                                                 </div>

//                                                 <div className="flex flex-col mt-5 w-full">
//                                                     <div className="border-t-[0.05rem] w-full"></div>
//                                                     <div className="flex mt-5 px-5 justify-between items-center">
//                                                         <h3
//                                                             className={`font-bold font-inherit inline-block w-[153px] h-[18px] ${upgrade === index && check
//                                                                 ? "text-violet-200"
//                                                                 : "text-gray-300"
//                                                                 }`}
//                                                         >
//                                                             {data.Ticketing}
//                                                         </h3>
//                                                         <div>
//                                                             {ticketFeature && upgrade == index ? (
//                                                                 <Image className="cursor-pointer" src={dropDownIcon} />
//                                                             ) : (
//                                                                 <Image className="cursor-pointer rotate-180" src={dropDownIcon} />
//                                                             )}
//                                                         </div>
//                                                     </div>
//                                                     <div
//                                                         className={`${ticketFeature && upgrade == index
//                                                             ? "card-collapse"
//                                                             : "card-collapse card-close"
//                                                             }`}
//                                                     >
//                                                         {upgrade == index && check && (
//                                                             <div className="flex flex-col gap-1 mt-5 ">
//                                                                 {data.TicketFeature.map((data, i) => {
//                                                                     return (
//                                                                         <div
//                                                                             className="flex gap-3 items-center px-5"
//                                                                             key={i}
//                                                                         >

//                                                                             <h3 className="flex text-3xs font-normal opacity-60 dark:text-white">
//                                                                                 {data.title}
//                                                                             </h3>

//                                                                         </div>
//                                                                     );
//                                                                 })}
//                                                             </div>
//                                                         )}
//                                                     </div>


//                                                     <div className=" px-5 py-5 flex flex-row items-start justify-start gap-[3px] text-center text-xl">
//                                                         <div className="relative leading-[54px] font-light inline-block">
//                                                             $
//                                                         </div>
//                                                         <div className={` relative text-13xl leading-[54px] font-light text-right inline-block ${upgrade === index && check
//                                                             ? "text-violet-200"
//                                                             : "text-gray-300"
//                                                             }`}>
//                                                             1,584
//                                                         </div>
//                                                     </div>

//                                                     <div className="flex flex-col items-center  pb-5 justify-center px-10 ">
//                                                         {upgrade == index && check ? (

//                                                             <button className="cursor-pointer outline-none focus:outline-none [border:1px_solid_#eb1f8f] p-[8px_14px] bg-white-200  top-[406px] left-[15px] rounded-[100px] shadow-[0px_0px_0px_4px_rgba(235,_31,_143,_0.2)] box-border w-[210px] overflow-hidden flex flex-row items-center justify-center gap-[8px]">

//                                                                 <div className="relative text-base leading-[20px] font-semibold font-plus-jakarta-sans text-violet-200 text-left inline-block">
//                                                                     Selected
//                                                                 </div>
//                                                             </button>
//                                                         ) : (
//                                                             <button className="cursor-pointer [border:1px_solid_#777e90] focus:outline-none p-[8px_14px] bg-white-200  top-[406px] left-[15px] rounded-[100px] box-border w-[210px] overflow-hidden flex flex-row items-center justify-center gap-[8px]" onClick={() => cardFunc(index)}>

//                                                                 <div className="relative text-base leading-[20px] font-semibold font-plus-jakarta-sans text-gray-1400 text-left inline-block">
//                                                                     {check
//                                                                         ? check && upgrade < index
//                                                                             ? "upgrade"
//                                                                             : "downgrade"
//                                                                         : "upgrade"}
//                                                                 </div>
//                                                             </button>
//                                                         )}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     );
//                                 })}
//                             </Slider>
//                         </div>

//                     </div>
//                     <button className="cursor-pointer [border:1px_solid_#eb1f8f] p-[8px_14px] bg-white-200 rounded-[100px] box-border relative w-[540px] overflow-hidden flex flex-row items-center justify-center [transform:rotate(-0.16deg)] [transform-origin:0_0]">
//                         <div className="relative text-base leading-[20px] font-semibold font-plus-jakarta-sans text-violet-200 text-left inline-block">
//                             Upgrade
//                         </div>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default FlightDetailSidebar

import React from 'react'

const FlightDetailSidebar = () => {
    return (
        <div className="border border-black-100 p-10 text-violet-100">FlightDetailSidebar</div>
    )
}

export default FlightDetailSidebar