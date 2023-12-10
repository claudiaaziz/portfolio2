// import { Socials } from "@/constants";
// import Image from "next/image";
import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';

const Navbar = () => {
  return (
    <>
    {/* <!-- ======= Mobile nav toggle button ======= --> */}
    <button type="button" className="mobile-nav-toggle d-xl-none"><i className="bi bi-list mobile-nav-toggle"></i></button>
    <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
    {/* <!-- ======= Header ======= --> */}
    <header id="header" className="d-flex flex-column justify-content-center">

      <nav id="navbar" className="navbar nav-menu">
        <ul>
          <li><a href="#about-me" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
          {/* <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li> */}
          <li><a href="#projects" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Projects</span></a></li>
          {/* <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li> */}
          <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>
      {/* <!-- .nav-menu --> */}

    </header>
    {/* <!-- End Header --> */}
    </>
    // <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
    //   <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
    //     <a
    //       href="#about-me"
    //       className="h-auto w-auto flex flex-row items-center"
    //     >
    //       <Image
    //         src="/NavLogo.png"
    //         alt="logo"
    //         width={70}
    //         height={70}
    //         className="cursor-pointer hover:animate-slowspin"
    //       />

    //       <span className="font-bold ml-[10px] hidden md:block text-gray-300">
    //         WebChain Dev
    //       </span>
    //     </a>

    //     <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
    //       <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
    //         <a href="#about-me" className="cursor-pointer">
    //           About me
    //         </a>
    //         <a href="#skills" className="cursor-pointer">
    //           Skills
    //         </a>
    //         <a href="#projects" className="cursor-pointer">
    //           Projects
    //         </a>
    //       </div>
    //     </div>

    //     <div className="flex flex-row gap-5">
    //       {Socials.map((social) => (
    //         <Image
    //           src={social.src}
    //           alt={social.name}
    //           key={social.name}
    //           width={24}
    //           height={24}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
