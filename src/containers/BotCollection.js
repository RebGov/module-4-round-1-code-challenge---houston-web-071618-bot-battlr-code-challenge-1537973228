import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  const

  render(){
    const generateBotCard = results => (
      <BotCard bot={results} key={results.id} />
    );
    const cardComponents = this.props.allBots.map(generateBotCard)

  	return (
  	  <div className="ui four column grid">
    		<div className="row" >
    		  {cardComponents}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
