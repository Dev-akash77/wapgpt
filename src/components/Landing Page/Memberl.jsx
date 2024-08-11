import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaUpwork  } from "react-icons/fa6";
const Memberl = () => {
  return (
    <>
    <div className="member_main">
        <div className="member_heading_main cc">
            <div className="container fc">
            <h2 className="s2_heading">Our <span>Team</span></h2>
            </div>
            <div className="container mastar_behind fc">
                <h3>Meet the Master Mind Behind The Project</h3>
            </div>
            <div className="container cc">
                <div className="mastar_div_me_main cc">
                  <div className="myimgdivmain cc">
                  <div className="my_image_div cc">
                        <img src="/images/akash.jpg" alt="founder image" />
                    </div>
                  </div>
                    <div className="name_role_main cc">
                        <p className="name">Akash Biswas</p>
                        <p className="who">Founder of Wap<span>GPT</span></p>
                        <p className="role">Full Stack Web Developer</p>
                    </div>
                    <div className="my_foter fc">
                        <a href="https://www.facebook.com/profile.php?id=100044966861269"><FaFacebookF/></a>
                        
                        <a href="https://www.instagram.com/developer_akash77/"><FaInstagram/></a>
                        
                        <a href="https://www.linkedin.com/in/akash-biswas-486435289/"><FaLinkedinIn /></a>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Memberl