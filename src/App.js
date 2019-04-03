import React, { Component } from 'react';
import ItemList from "./components/ItemList";
import ItemForm from "./components/ItemForm";

import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      groceries: [
        {
        name: 'apple',
        id: 123,
        purchased: false
      },
      {
        name: 'Bread',
        id: 124,
        purchased: false
      },
      {
        name: 'eggs',
        id: 125,
        purchased: false
      }
    ]
    }
  }

  addItem= (event, item) => {
    event.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      groceries: [newItem, ...this.state.groceries]
    });
  }
  

    toggleItem = itemId => {
      this.setState({
        groceries: this.state.groceries.map(item => {
            if (itemId === item.id) {
              return {
                ...item,               
                purchased: !item.purchased
              };
            }
            return item;
        })
      });
    };

    deletePurchased = event => {
      event.preventDefault();
      this.setState({
        groceries: this.state.groceries.filter(item => !item.purchased)
      });
    };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className='App-header'>
          <h1>This is our Shopping list</h1>
        </div>
        
        <ItemForm addItem={this.addItem} />
        <ItemList
         groceries={this.state.groceries} 
         toggleItem={this.toggleItem}
         deletePurchased={this.deletePurchased}
         />
      </div>
    );
  }
}



export default App;
