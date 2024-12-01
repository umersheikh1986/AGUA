import React from 'react'

// calendar icon import
import { FaCalendarAlt } from "react-icons/fa";


import './stepper.css';


const Stepper = () => {

    return (

        <>

            <h2 className="heading mb-12 text-[#9C7509]" >Roadmap</h2>


            <section class="timeline">

                <div class="timeline-row">

                    <div class="timeline-column">

                        {/* <h3 class="title">Education <span class="animate " style={{ "--i": 2 }}></span></h3> */}

                        <div class="education-box">

                            <div class="education-content">

                                <div class="content">

                                    {/* <div class="year"> <FaCalendarAlt className='icon' />2019-2024</div> */}

                                    <h3 className='text-2xl'  >Phase 1: Foundation and Whitepaper Finalization (Q3 2024)</h3>

                                    <p>
                                    <input
          type="checkbox"
          defaultChecked
          className=" checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /> <span className='text-xl'> Whitepaper Completion</span><br />
                                     <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /><span className='text-xl'> Legal and Regulatory Preparation</span><br />
                                     <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /> <span className='text-xl'>  Initial Community </span> 
                                    </p>

                                </div>


                            </div>

                            <div class="education-content">

                                <div className='content mt-3'>

                                    {/* <div class="year"> <FaCalendarAlt className='icon' />2017-2019</div> */}

                                    <h3  className='text-2xl' > Phase 2: Token Launch and Initial Platform Development (Q4 2024)</h3>

                                    <p>
                                    {/* Token launch<br />
                                    Smart Contract Deployment<br />
                                    Initial Exchange Listings<br />
                                    Staking Platform Launch */}
                                     <input
          type="checkbox"
          defaultChecked
          className=" checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /> <span className='text-xl'> Token launch</span><br />
                                     <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /><span className='text-xl'>  Smart Contract Deployment</span><br />
                                     <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /> <span className='text-xl'>  Initial Exchange Listings </span> <br />
          <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /> <span className='text-xl'>  Staking Platform Launch </span> 
                                    </p>

                                </div>


                            </div>

                            <div class="education-content">

                                <div class="content">

                                    {/* <div class="year"> <FaCalendarAlt className='icon' />2015-2017</div> */}

                                    <h3  className='text-2xl'  >Phase 3: Mining Integration and Reserve Management (Q1-Q2 2025)</h3>

                                    <p>
                                    {/* Mining Partnerships<br />
                                    Reserve Establishment<br />
                                    Smart Contract Enhancements<br />
                                    Revenue Sharing Implementation */}
                                         <input
          type="checkbox"
          defaultChecked
          className=" checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /> <span className='text-xl'> Mining Partnerships</span><br />
                                     <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /><span className='text-xl'>   Reserve Establishment</span><br />
                                     <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /> <span className='text-xl'>   Smart Contract Enhancements </span> <br />
         <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /> <span className='text-xl'>  Revenue Sharing Implementation </span> 
                                    </p>

                                </div>


                            </div>

                            <span class="animate " style={{ "--i": 3 }}></span>


                        </div>

                    </div>


                    {/* Experience  */}

                    <div class="timeline-column">

                        {/* <h3 class="title">Experience <span class="animate " style={{ "--i": 5 }}></span></h3> */}

                        <div class="education-box">

                            <div class="education-content">

                                <div class="content">

                                    {/* <div class="year"> <FaCalendarAlt className='icon' />2023-2024</div> */}

                                    <h3  className='text-2xl' >Phase 4: Platform Expansion and DeFi Integration (Q3-Q4 2025)</h3>

                                    <p>
                                    {/* DeFi Platform Integration<br />
                                    Governance Launch<br />
                                    Advanced Analytics and Reporting<br />
                                    Community Incentive Programs */}
                                     <input
          type="checkbox"
          defaultChecked
          className=" checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /> <span className='text-xl'> DeFi Platform Integration</span><br />
                                     <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /><span className='text-xl'>    Governance Launch</span><br />
                                     <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /> <span className='text-xl'>  Advanced Analytics and Reporting</span> <br />
         <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /> <span className='text-xl'>   Community Incentive Programs </span> 
                                    </p>

                                </div>


                            </div>

                            <div class="education-content">

                                <div class="content">

                                    {/* <div class="year"> <FaCalendarAlt className='icon' />2021-2022</div> */}

                                    <h3  className='text-2xl' >Phase 5: Global Expansion and Regulatory Alignment (2026)</h3>

                                    <p>
                                    {/* Regulatory Expansion<br />
                                    Cross-Chain Integration<br />
                                    Institutional Partnerships<br />
                                    Global Marketing Campaign */}
                                        <input
          type="checkbox"
          defaultChecked
          className=" checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /> <span className='text-xl'> Regulatory Expansion</span><br />
                                     <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /><span className='text-xl'>     Cross-Chain Integration</span><br />
                                     <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /> <span className='text-xl'>  Institutional Partnerships</span> <br />
         <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /> <span className='text-xl'>    Global Marketing Campaign</span> 
                                    </p>

                                </div>


                            </div>

                            <div class="education-content">

                                <div class="content">

                                    {/* <div class="year"> <FaCalendarAlt className='icon' />2020-2021</div> */}

                                    <h3  className='text-2xl' >Phase 6: Continuous Improvement and Ecosystem Growth (2027 and Beyond)</h3>

                                    <p>

                                    {/* Platform Upgrades<br />
                                    Ecosystem Expansion<br />
                                    Sustainability Initiatives<br />
                                    Global Adoption Initiatives */}
                                       <input
          type="checkbox"
          defaultChecked
          className=" checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /> <span className='text-xl'> Platform Upgrades</span><br />
                                     <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /><span className='text-xl'>    Ecosystem Expansion</span><br />
                                     <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /> <span className='text-xl'>  Sustainability Initiatives</span> <br />
         <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        /> <span className='text-xl'>    Global Adoption Initiatives</span> 
                                    </p>

                                </div>


                            </div>

                            <span class="animate scroll" style={{ "--i": 6 }}></span>


                        </div>

                    </div>



                </div>

            </section>


        </>


    )
}

export default Stepper;