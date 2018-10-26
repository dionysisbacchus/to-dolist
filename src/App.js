import React, { Component } from 'react';
import './App.css';
import List from './List';

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     items: [],
      x: {text:'', key:''},
    };
  }

  onChange = (event) => {
    this.setState({
     
      x: {text:event.target.value, key:Date.now()},
    });}
  
    deleteItem = key => {
      const filteredItems = this.state.items.filter(item => {
        return item.key !== key
      })
      this.setState({
        items: filteredItems
      })
    }
  

  
  
  
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      x: {text:'', key:''},
      items: [...this.state.items, this.state.x]
    });
  }

  render() {
    return (
      <div >
     
      <div   className="dion"  >
 <h1>To-Do List</h1>

        <form className="App" onSubmit={this.onSubmit}>

          <input value={this.state.x.text} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <h className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'> My to-dos</h>
        <List items={this.state.items} deleteItem={this.deleteItem} />
      </div>
      </div>
    );
  }
}
export default App;
