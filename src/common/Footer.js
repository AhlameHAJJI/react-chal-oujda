import React from "react";

const Footer = ({ footerTitles = [],footerLinks= []}) => (
    <div className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-12 col-md">
        <img className="mb-2" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" />
        <small className="d-block mb-3 text-muted">&copy; 2017-2019</small>
      </div>
     
      {footerTitles.map((col, index) => (
        <div className="col-6 col-md" key={index}>
        <h5>{col.title}</h5>
       <ul key={index} className="list-unstyled text-small">
        <li ><a className="text-muted" href={col.link1}>{col.link1}</a></li>
        <li ><a className="text-muted" href={col.link2}>{col.link2}</a></li> 
        <li ><a className="text-muted" href={col.link3}>{col.link3}</a></li>
        <li ><a className="text-muted" href={col.link4}>{col.link4}</a></li> 
        <li ><a className="text-muted" href={col.link5}>{col.link5}</a></li>
        <li ><a className="text-muted" href={col.link6}>{col.link6}</a></li> 
        </ul>
      </div>
      ))} 
  
    </div>
  </div>
)
export default Footer;