import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super();
    this.state= {
      allBots: [],
      // currentBot: {},
      armyCollection: [],
      loaded: false

    }
  }


  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp =>resp.json())
      .then(data => {
        const robots = data;
        this.setState({
          // currentBot: {
          //   id: robots[0].id,
          //   name: robots[0].name,
          //   health: robots[0].health,
          //   damage: robots[0].damage,
          //   bot_class: robots[0].bot_class,
          //   catchphrase: robots[0].Catchphrase,
          //   image: robots[0].avatar_url
          // },
          allBots: robots,
          armyCollection: [],
          loaded: true
        });

      });

  }



  render() {
    console.log("BotPage ", this.state.allBots, this.state.loaded, this.state.armyCollection)
    return (
      <div>

        <YourBotArmy
        armyCollection={this.state.armyCollection}/>
        <BotCollection
          allBots={this.state.allBots}
          // currentBot={this.state.currentBot}
        
        />
      </div>
    );
  }

}

export default BotsPage;
