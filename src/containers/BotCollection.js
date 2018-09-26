import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  // const handleClick=(id) => {
//   console.log("handling click at botCollection")
// }
  render(){
    const generateBotCard = bot => (
      <BotCard
        bot={ bot }
        key={bot.id}
        enlistBot={this.props.enlistBot}
        // handleClick={this.props.handleClick}
      />
    );
    const cardComponents = this.props.allBots.map(generateBotCard)
    // console.log(cardComponents)
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
