import React from 'react'
import { Link } from 'react-router-dom'
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

const SectionL2 = () => {
  return (
    <>
    <div className="section2_main">
        <div className="s2_heading_main fc">
            <div className="container fc">
                <h2 className="s2_heading">Why wapp<span>GPT</span> ?</h2>
            </div>
        </div>
        <div className="allheading cc">
            <div className="container dhcmmm">
                <div className="dchm">

                <div className="data_heading_cont c">
                    <h3>First Response</h3>
                    <p className="wgptc">
                    WAP GPT provides immediate responses, ensuring that users receive quick and accurate answers to their queries. The AI is designed to understand and process questions rapidly, offering solutions without delay.
                    </p>
                </div>
                
                <div className="data_heading_cont c">
                    <h3>Always Online</h3>
                    <p className="wgptc">
                    WAP GPT is always online, providing users with 24/7 access to AI assistance. This reliability ensures that help is available at any time, day or night, making it a dependable resource for information and support.
                    </p>
                </div>

                <div className="data_heading_cont c">
                    <h3>Extra Function</h3>
                    <p className="wgptc">
                    In addition to answering questions, WAP GPT offers a variety of extra functions. These may include task automation, reminders, or even entertainment features. This versatility enhances its value as a multifunctional tool.
                    </p>
                </div>
                <div className="data_heading_cont c">
                    <h3>Top Notch User Interface</h3>
                    <p className="wgptc">
                    WAP GPT boasts a top-notch user interface that is both intuitive and visually appealing. The design ensures a seamless user experience, allowing individuals to interact with the AI effortlessly and enjoyably.
                    </p>
                </div>

                <div className="heading_back_main cc"></div>
                </div>
            </div>
        </div>

        <div className="alldivrotate cc">
            <div className="container cc">
                <div className="adrm cc">
                    <div className="adr fc">
                        <div className="rd cc left_cont"><TbBrandJavascript/></div>
                        <div className="rd cc right_cont"><FaJava/></div>
                        <div className="rd cc top_cont"><FaNodeJs/></div>
                        <div className="rd cc btm_cont"><FaReact/></div>
                    </div>
                    <div className="rd cc cbr"><Link to="/chatbot" className="fc"><img src="/images/wappGPTlogo.svg" alt="logo" /></Link></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SectionL2