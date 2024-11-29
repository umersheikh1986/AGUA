"use client";
import React from 'react'
import CanvasScene from './Animate'
import { useEffect,useRef } from 'react';
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import dynamic from 'next/dynamic';

const loadAmCharts = async () => {
  const am4core = await import("@amcharts/amcharts4/core");
  const am4charts = await import("@amcharts/amcharts4/charts");
  const am4themes_animated = (await import("@amcharts/amcharts4/themes/animated")).default;

  return { am4core, am4charts, am4themes_animated };
};

function Chart() {
  const chartData = [
    { country: "Private sale", litres: 43.35, color: "#edb318" },
    { country: "Pancake Swap", litres: 52.02, color: "#cf9b10" },
    { country: "Future Development And Marketing", litres: 52.02, color: "#9e760b" },
    { country: "Team Allocation", litres: 60.69, color: "#664c07" },
    { country: "Pre-sale", litres: 86.7, color: "#473504" },
    { country: "Burning", litres: 138.72, color: "#BEBEBE" },
    { country: "Reward For Ecosystem", litres: 433.5, color: "#717171" },
  ];
  
  useEffect(() => {
    let chart;
  
    loadAmCharts().then(({ am4core, am4charts, am4themes_animated }) => {
      am4core.useTheme(am4themes_animated);
  
      chart = am4core.create("chartdiv", am4charts.PieChart3D);
      chart.hiddenState.properties.opacity = 0;
  
      chart.legend = null;
      chart.logo.disabled = true;
  
      chart.data = chartData;
  
      const series = chart.series.push(new am4charts.PieSeries3D());
      series.dataFields.value = "litres";
      series.dataFields.category = "country";
      series.slices.template.propertyFields.fill = "color";
  
      // Disable labels and ticks
      series.labels.template.disabled = true;
      series.ticks.template.disabled = true;
    });
  
    return () => {
      if (chart) chart.dispose();
    };
  }, []);
  
//  useEffect(() => {
  //   // Themes begin
  //   am4core.useTheme(am4themes_animated);
  //   // Themes end

  //   // Create chart instance
  //   let chart = am4core.create("chartdiv", am4charts.PieChart3D);
  //   chart.hiddenState.properties.opacity = 0; // Initial fade-in effect



  //   // Add legend
  //   chart.legend = null;

  //   chart.logo.disabled = true;

  //   // Set data
  //   chart.data = [
  //     { country: "Lithuania", litres: 501.9, color: am4core.color("#BA8F17") },
  //     { country: "Czech Republic", litres: 301.9, color: am4core.color("#989896") },
  //     { country: "Ireland", litres: 201.1, color: am4core.color("#BA8F17") },
  //     { country: "Germany", litres: 165.8, color: am4core.color("#989896") },
  //     { country: "Australia", litres: 139.9, color: am4core.color("#BA8F17") },
  //     { country: "Austria", litres: 128.3, color: am4core.color("#989896") },
  //     { country: "UK", litres: 99, color: am4core.color("#BA8F17") },
  //     { country: "Belgium", litres: 60, color: am4core.color("#989896") },
  //     { country: "The Netherlands", litres: 50, color: am4core.color("#BA8F17") },
  //   ];

  //   // Create series
  //   let series = chart.series.push(new am4charts.PieSeries3D());
  //   series.dataFields.value = "litres";
  //   series.dataFields.category = "country";
  //   series.slices.template.propertyFields.fill = "color";

  //   series.labels.template.fill = am4core.color("#ffffff");
  //   series.ticks.template.stroke = am4core.color("#ffffff");

  //   // Cleanup on unmount
  //   return () => {
  //     chart.dispose();
  //   };
  // }, []);


  const divleft = useRef(null);
useEffect(() => {
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-slideInLeft");
      }
    });
  },
  {
    threshold: 0.1, 
  }
);

if (divleft.current) {
  observer.observe(divleft.current);
}

return () => {
  if (divleft.current) {
    observer.unobserve(divleft.current);
  }
};
}, []);

const divright = useRef(null);
    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideInRight");
          }
        });
      },
      {
        threshold: 0.1, 
      }
    );

    if (divright.current) {
      observer.observe(divright.current);
    }

    return () => {
      if (divright.current) {
        observer.unobserve(divright.current);
      }
    };
  }, []);

  return (
    <>
    {/* <div className='md:flex mt-20 w-full h-[600px] space-x-20 justify-center'>
       <img className='h-[500px] md:w-2/6' src="https://n1t.301.myftpupload.com/wp-content/uploads/2021/04/Picture11.png" alt="" />
       <img className='md:w-2/5' src="https://n1t.301.myftpupload.com/wp-content/uploads/2021/03/Picture2.png" alt="" />
    </div>
 <img ref={divleft} className='h-auto w-4/5 md:w-1/3' src="https://n1t.301.myftpupload.com/wp-content/uploads/2021/04/Picture11.png" alt="" />
 <hr className="border-[#D2BA57]" /> */}




<h1 className='font-times font-extrabold text-5xl md:text-6xl text-white text-center mt-6'>Tokenomics</h1>
<div className="flex flex-col lg:flex-row w-full h-auto space-y-10 lg:space-y-0 lg:space-x-20 justify-center items-center">
  {/* <CanvasScene /> */}

  <div className="w-full lg:w-3/6 p-6 lg:p-12 font-times h-full">
    <h1 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-white text-center lg:text-left mb-6 break-words">
      Token Distribution
    </h1>
    <div className="space-y-6">
    {/* Token Items */}
    {[
      { title: "Private Sale", percentage: "5%", description: "50,000 tokens are allocated for early investors, providing initial liquidity to kickstart the project.", width: "5%" },
      { title: "Pre-Sale", percentage: "10%", description: "100,000 tokens are allocated for the pre-sale, aimed at attracting early adopters and supporters.", width: "10%" },
      { title: "Reward for Ecosystem", percentage: "50%", description: "500,000 tokens dedicated to rewarding the ecosystem, incentivizing staking and governance participation.", width: "50%" },
      { title: "Pancake Swap", percentage: "6%", description: "60,000 tokens will be listed on PancakeSwap to provide liquidity for users.", width: "6%" },
    ].map((item, index) => (
      <div key={index}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Bullet Point */}
            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
            <p className="text-sm sm:text-base lg:text-xl font-extrabold text-white underline">
              {item.title}
            </p>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-white">{item.percentage}</p>
        </div>
        <p className="text-sm sm:text-base lg:text-lg text-white mt-2 break-words">{item.description}</p>
        <div className="w-full bg-gray-200 mt-2 rounded-full h-1 dark:bg-gray-700">
          <div
            className="bg-[#4C443F] h-1 rounded-full"
            style={{ width: item.width }}
          ></div>
        </div>
      </div>
    ))}
  </div>
  </div>

<div>
  <div
      id="chartdiv"
      className="w-full sm:w-4/6 lg:w-2/3 h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden sm:ml-20 font-times"
      style={{ minHeight: "250px" }}
    ></div>

    <div className="mt-4 flex flex-wrap justify-center items-start gap-4 text-center">
      {chartData.map((item, index) => (
        <div key={index} className="flex items-center gap-2 text-sm lg:text-base">
          <span
            className="w-4 h-4 inline-block rounded-full"
            style={{ backgroundColor: item.color }}
          ></span>
          <span className="text-white">{item.country}: {item.litres}</span>
        </div>
      ))}
    </div>
    </div>


  {/* Text Section */}
  <div className="w-full lg:w-3/6 p-6 lg:p-12 font-times h-full">
    {/* <h1 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-white text-center lg:text-left mb-6 break-words">
      Token Distribution
    </h1> */}
    <div className="space-y-6">
      {/* Token Items */}
      {[
        { title: "Team Allocation", percentage: "7%", description: "70,000 tokens are allocated to the team with vesting schedules aligned with long-term success.", width: "7%" },
        { title: "Burning", percentage: "16%", description: "160,000 tokens will be burned periodically to enhance the token’s scarcity and value.", width: "16%" },
        { title: "Future Development & Marketing", percentage: "6%", description: "60,000 tokens reserved for development and marketing initiatives.", width: "6%" },
      ].map((item, index) => (
        <div key={index}>
          <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
            <p className="text-sm sm:text-base lg:text-xl font-extrabold text-white underline">
              {item.title}
            </p>
          </div>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-white mt-2 break-words">{item.description}</p>
          <div className="w-full bg-gray-200 mt-2 rounded-full h-1 dark:bg-gray-700">
            <div
              className="bg-[#4C443F] h-1 rounded-full"
              style={{ width: item.width }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>













<hr className="border-[#D2BA57] mt-10" />

 </>
  )}

  export default dynamic(() => Promise.resolve(Chart), { ssr: false });