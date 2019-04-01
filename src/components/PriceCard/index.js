import React from "react";

const PriceCard = ({ cards = [] }) => ( 
<div className="container">
<div className="card-deck mb-3 text-center">
{cards.map((card , index) => (
    <div className="card mb-4 box-shadow" key={index}>
    <div className="card-header">
      <h4 className="my-0 font-weight-normal">{card.title}</h4>
    </div>
    <div className="card-body">
      <h1 className="card-title pricing-card-title">{card.number} <small className="text-muted">/ mo</small></h1>
      <ul className="list-unstyled mt-3 mb-4">
        <li>{card.users}users included</li>
        <li>{card.storage}GB of storage</li>
        <li>{card.support}</li>
        <li>{card.center}</li>
      </ul>
      <button type="button" className="btn btn-lg btn-block btn-outline-primary">{card.btn}</button>
    </div>
  </div>
))}
 </div>
</div> 
);
export default PriceCard ;