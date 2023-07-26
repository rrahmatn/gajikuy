import React from "react";
import './detaillowongan.css';
import { Link } from "react-router-dom";
import {BiChevronLeft} from 'react-icons/bi'
const DetailLowongan =() =>{
    return(
        <>
            <div className="bungkusDetailLowongan">
                <div className="navDetailLowongan">
                    <Link className="backdetaillowongan" to='/dashboard'><BiChevronLeft/></Link>
                </div>
                <div className="syarat">
                    <div className="detailsyarat">
                        <h2>Developer</h2>
                        <p>Job Type: Full Time, Permanent</p>
                        <p>Salary: IDR 5,000,000 - IDR 7,000,000 per month</p>
                        <p>Design, create & monitor websites/applications and improve according to prevailing trends and improve website performance</p>
                        <ul>
                            <li>Age 20-40 </li>
                            <li>Single maximum age 35 years</li>
                            <li>At least 2 years of experience in the related field is suitable for this position.</li>
                            <li>Preferably Staff (non-management & non-supervisor) specialized in Purchasing/Inventory/Goods & Warehousing Management or equivalent.
                                Have good negotiation skills</li>
                            <li>Education min. S1 Information Systems / Informatics Engineering / Computer Systems</li>
                            <li>Mastering the design, development and maintenance of WordPress-based websites</li>
                            <li>Have a portfolio of WordPress-based website projects</li>
                            <li>Able to create or modify WordPress themes and plugins</li>
                            <li>Mastering website programming languages ​​(HTML, CSS, Bootstrap, PHP, JavaScript, Jquery)</li>
                            <li>Understand website maintenance (Backup, Optimize, Analyze, Security, etc.)</li>
                            <li>Understanding SEO concepts and optimization is a plus</li>
                            <li>Have good problem solving skills</li>
                            <li>Able to work individually and in team</li>
                            <li>Willing to be assigned overseas if needed</li>
                            <li>Understand website maintenance (Backup, Optimize, Analyze, Security, etc.)</li>
                            <li>Understanding SEO concepts and optimization is a plus</li>
                            <li>Have good problem solving skills</li>
                            <li>Able to work individually and in team</li>
                            <li>Willing to be assigned overseas if needed</li>


                        </ul>

                    </div>
                </div>
                <div className="tugas">
                    <h2>Description</h2>
                    <p>It is a Job Developer’s task to walk their client through the whole employment process. The first part of this involves conducting an assessment to find out a client’s intentions and interests; meeting with a client’s possible employers; and providing the client employment options. If the client is interested, the Job developer then helps their client to pursue the position by assisting in resume-writing, getting proper clothes, write out applications, assist in transportation or other support needed, and practice for the interview. The Job developer then follows up with the employer to find out the result of the application, and reports it back to the client. Once the client gets the job, it is also the Job developer’s task to clarify the job description to the client, address any special needs, and formulates a plan for ongoing job coaching. If the client wasn’t hired, the job developer needs to give feedback on why this happened and makes changes in the plan to get another job.</p>
                </div>
            </div>

        
        </>
    )
}

export default DetailLowongan;