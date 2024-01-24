import React, { useState } from 'react'

import Styles from"./Navbar.module.css";
import search_logo from "../NavLogos/search.png"
import arrow from "../NavLogos/arrow.png";
import search2 from "../NavLogos/download.png";
import msg from "../NavLogos/msg.png";
import bell from "../NavLogos/bell.png";
import sell from "../NavLogos/sell.png";
import {Link, useNavigate} from "react-router-dom"
import Dropdown from './Dropdown';
const Navbar = () => {
  const navigate=useNavigate();
  const [show, setShow] = useState(false);
 
  return (
    <div className={Styles.navbar}>
        <div className={Styles.nav1}>
            <div className={Styles.n1}>
                <img width='50px' height='35px'
                src="https://icones.pro/wp-content/uploads/2021/05/icone-globe-jaune.png" alt="" 
                onClick={()=>navigate("/")} />
            </div>
              <div className={Styles.inp1}>
                <div className={Styles.slogo}>
                  <img width='30px' height='30px'
                  src={search_logo}  />
                </div>
                <input className={Styles.s1}   />
                <select>
                  <option><h5>Manila</h5></option>
                  <option><h5>Navotas</h5></option>
                  <option><h5>Malabon</h5></option>
                  <option><h5>Caloocan</h5></option>
                  </select>
                {/* <img width='30px' height='30px' src={arrow} /> */}
             </div>
            <div className={Styles.inp2}>
              <input className={Styles.s2} placeholder='WHAT ARE YOU LOOKING FOR?'/>
  
            </div>
            <div className={Styles.last}>
              <div>
                <select>
                  <option><h5>ENGLISH</h5></option>
                  <option><h5>TAGALOG</h5></option>

                </select>
                </div>
            {/* <div className={Styles.a}><img width='30px' height='30px' src={arrow} /></div> */}
            <div className={Styles.b}><img width='30px' height='30px' src={msg} /></div>
            <div className={Styles.c}><img width='30px' height='30px' src={bell} /></div>
            <div className={Styles.d}><h5 onClick={()=>navigate("/signin")}>LOGIN</h5></div>
            <div className={Styles.e}><img src={sell} onClick={()=>navigate("/sell")} width='90px' height='70px'/></div>
            </div>
        </div>
            <div className={Styles.nav2}>
            <div className={Styles.nav2a}>
            <div className={Styles.nav2a1}><h6>ALL CATEGORIES</h6></div>
            <div className={Styles.a}>
            <img className={Styles.arrowicon} width='40px' height='30px' src={arrow }onClick={()=>{
             
                setShow(!show);
              
              console.log(show);
              }}/>