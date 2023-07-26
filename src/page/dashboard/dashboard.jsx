import React from "react";
import './dashboard.css';
import { Link } from "react-router-dom";
import {AiOutlineRight ,AiFillFacebook ,AiFillLinkedin} from 'react-icons/ai';
import {FaInstagramSquare} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si'
const Dashboard = (props) =>{



    return(
        <>
        <div className="bungkusCardGrafik">
        <div className="bungkusDasboard">
                <div className="cardGraph">
                    <div className="cardKiri"><div className="isiGrafik"
                    style={{backgroundColor: '#0099FF', height:`${props.tinggiminuman}%`}}
                    ></div>
                    </div>
                    <div className="cardKanan">
                        <p>Drinks</p>
                        <div className="target">
                            <h3>Target :</h3>
                            <p>{props.targetminuman}</p>
                        </div>
                        <div className="target">
                            <h3>Sold :</h3>
                            <p>{props.structure.drink}</p>
                        </div>
                        <p>{(props.tinggiminuman.toFixed(2))}%</p>
                    </div>
                    
                </div>
                <div className="cardGraph">
                    <div className="cardKiri">
                        <div className="isiGrafik"
                        style={{backgroundColor: '#FFB800', height:`${props.tinggimakanan}%`}}>
                        </div>
                    </div>
                    <div className="cardKanan">
                        <p>Foods</p>
                        <div className="target">
                            <h3>Target :</h3>
                            <p>{props.targetmakanan}</p>
                        </div>
                        <div className="target">
                            <h3>Sold :</h3>
                            <p>{props.structure.food}</p>
                        </div>
                        <p>{(props.tinggimakanan.toFixed(2))}%</p>
                    </div>      
                </div>
        </div>
            
                <div className="cardLowongan">
                    <p className="looking">Looking For </p>
                    <Link to='/lowongandeveloper' className="isiCardLowongan">
                        <p>Developer({props.structure.developer})</p>
                        <AiOutlineRight/>
                    </Link>
                    <Link to='/lowonganadmin' className="isiCardLowongan">
                        <p>Admin({props.structure.admin})</p>
                        <AiOutlineRight/>
                    </Link>
                    <Link to='/lowonganwaiter' className="isiCardLowongan">
                        <p>Waiters({props.structure.waiters})</p>
                        <AiOutlineRight/>
                    </Link>
                    <Link to='/lowongancashier' className="isiCardLowongan">
                        <p>Cashier({props.structure.cashier})</p>
                        <AiOutlineRight/>
                    </Link>
                    <Link to='/lowonganob' className="isiCardLowongan">
                        <p>Office Boy({props.structure.officeBoy})</p>
                        <AiOutlineRight/>
                    </Link>
                </div>

                <div className="sosmed">
                    <a href="https://instagram.com" target='_blank'  rel='noreferrer' ><FaInstagramSquare/></a>
                    <a href="https://facebook.com"  target='_blank'  rel='noreferrer'><AiFillFacebook/></a>
                    <a href="https://gmail.com"  target='_blank'  rel='noreferrer'><SiGmail/></a>
                    <a href="https://linkin.com"  target='_blank'  rel='noreferrer'><AiFillLinkedin/></a>
                </div>
            </div>
        
        </>
    )
}

export default Dashboard;