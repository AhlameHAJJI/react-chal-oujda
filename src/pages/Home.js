import React from 'react'
import AppHeader from "../components/AppHeader";
import PriceCard from "../components/PriceCard"
import cardInfo from "../mocks/cardInfo"
class Home extends React.Component {
render(){
    return (
        <div>
    <AppHeader title="Pricing" description="Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization."/>
    <PriceCard cards={cardInfo}/>
       </div>
    );
}
}
  export default Home;