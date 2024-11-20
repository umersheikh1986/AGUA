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
  useEffect(() => {
    let chart;

    loadAmCharts().then(({ am4core, am4charts, am4themes_animated }) => {
      am4core.useTheme(am4themes_animated);

      chart = am4core.create("chartdiv", am4charts.PieChart3D);
      chart.hiddenState.properties.opacity = 0; // Initial fade-in effect

      // Disable legend
      chart.legend = null;

      // Disable amCharts branding
      chart.logo.disabled = true;

      // Set data
      chart.data = [
        { country: "Private sale", litres: 43.35,  color: am4core.color("#8BCEF6")  },
        { country: "Pre-sale", litres: 86.7,  color: am4core.color("#989896")  },
        { country: "REWARD FOR ECOSYSTEM ", litres: 433.5,  color: am4core.color("#CB9F36")  },
        { country: "PANCAKE SWAP", litres: 52.02,  color: am4core.color("#717171")  },
        { country: "TEAM ALLOCATION ", litres: 60.69,  color: am4core.color("#AC8133")  },
        { country: "BURNING", litres: 138.72,  color: am4core.color("#E04146")  },
        { country: "FUTURE DEVELOPMENT AND MARKETING", litres: 52.02,  color: am4core.color("#D2BA70")  },
      ];

      chart

      // Create series
      const series = chart.series.push(new am4charts.PieSeries3D());
      series.dataFields.value = "litres";
      series.dataFields.category = "country";
      series.slices.template.propertyFields.fill = "color";

      // To hide values outside of piechart
      // series.labels.template.disabled = true;
      // series.slices.template.tooltipText = "{category}: {value.percent.formatNumber('#.0')}%";

      // Set text color to white for labels and ticks
      series.labels.template.fill = am4core.color("#ffffff");
      series.ticks.template.stroke = am4core.color("#ffffff");

      series.labels.template.text = "{category}: {value.percent.formatNumber('#.0')}%";
      series.slices.template.tooltipText = "{category}: {value.percent.formatNumber('#.0')}%";
    });

    // Cleanup on unmount
    return () => {
      if (chart) {
        chart.dispose();
      }
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
 <div className='lg:flex flex-col md:flex-row mt-20 w-full h-auto space-y-10 md:space-y-0 md:space-x-20 justify-center items-center'>
 <CanvasScene />
 <div id="chartdiv"  style={{ width: "65%", height: "500px", }}></div>;
  <div className='md:w-2/4 w-full p-16 font-times h-full'>
            <p className='font-extrabold text-4xl pl-12 font-times text-white'>Token Distribution</p>
            {/* <p className="text-[#C7C7C7] pl-12 pt-8">61% of AGC tokens shall be distributed in the market via a Security Token Offering campaign. AGC represents a security token and purchase of it requires a mandatory KYC/AML check.  Holders of AGC token will get a portion of the second token AGT as they are produced and according with their contribution.</p> */}
            <div className='flex justify-between pl-12 pt-8'>
                <p className='text-2xl font-extrabold text-white underline'>Private Sale</p>
                <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>5%</p>
            </div>
            <p className='text-white pl-12'>50,000 tokens are allocated for early investors, providing initial liquidity to kickstart the project.</p>
                <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
                    <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '5%' }}></div>
                </div>

                <div className='flex justify-between pl-12 pt-8'>
                <p className='text-2xl font-extrabold text-white underline'>Pre-Sale</p>
                <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>10%</p>
            </div>
            <p className='text-white pl-12'>100,000 tokens are allocated for the pre-sale, aimed at attracting early adopters and supporters.</p>
                <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
                    <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '10%' }}></div>
                </div>

             <div className='flex justify-between pl-12 pt-8'>
                <p className='text-2xl font-extrabold text-white underline'>REWARD FOR ECOSYSTEM </p>
                <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>50%</p>
            </div>
            <p className='text-white pl-12'>A substantial portion (500,000 tokens) is dedicated to rewarding the ecosystem, incentivizing users to stake, yield farm, and participate in governance. This drives growth and engagement within the AGUA platform.</p>
                <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
                    <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '50%' }}></div>
                </div>

                <div className='flex justify-between pl-12 pt-8'>
                <p className='text-2xl font-extrabold text-white underline'>PANCAKE SWAP</p>
                <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>6%</p>
            </div>
            <p className='text-white pl-12'>60,000 tokens will be listed on PancakeSwap, a decentralized exchange (DEX), to provide liquidity for users who wish to trade AGUA.</p>
                <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
                    <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '6%' }}></div>
                </div>

             <div className='flex justify-between pl-12 pt-8'>
                <p className='text-2xl font-extrabold text-white underline'>TEAM ALLOCATION </p>
                <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>7%</p>
            </div>
            <p className='text-white pl-12'>70,000 tokens are allocated to the development team and advisors, with vesting schedules to align their incentives with the long-term success of the project.</p>
                <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
                    <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '7%' }}></div>
                </div>       

              <div className='flex justify-between pl-12 pt-8'>
                <p className='text-2xl font-extrabold text-white underline'>BURNING</p>
                <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>16%</p>
            </div>
            <p className='text-white pl-12'>160,000 tokens will be burned periodically to reduce supply and enhance the scarcity and value of the AGUA token.</p>
                <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
                    <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '16%' }}></div>
                </div>       

              <div className='flex justify-between pl-12 pt-8'>
                <p className='text-2xl font-extrabold text-white underline'>FUTURE DEVELOPMENT<br /> AND MARKETING</p>
                <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>6%</p>
            </div>
            <p className='text-white pl-12'>60,000 tokens will be reserved for future development and marketing initiatives, ensuring the continued growth and global reach of the AGUA platform.</p>
                <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
                    <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '6%' }}></div>
                </div>              

        </div>
</div>

<hr className="border-[#D2BA57] mt-10" />

 </>
  )}

  export default dynamic(() => Promise.resolve(Chart), { ssr: false });