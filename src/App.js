import React, { Component } from 'react';
import Card from './Card';
import RImage from './React.png';
import './App.css';

class App extends Component {

  state={
    name:'',
    list:["Make More Project in React","Learn More and More"]
  }



  handlechange=(e)=> {
    this.setState({
      name:e.target.value
    })
  }
  handleKey=(e)=>{
    if(e.key === "Enter")
    { this.setState({
      list:this.state.list.concat(this.state.name),
      name:''
    })
    }
    
  }

  handleDelete=(rem) =>{
    var nlist = this.state.list.filter((item,index)=>index!==rem)
    this.setState({
      list:nlist,
      name:''
    })
  }

  render() {
    const ListItem = this.state.list.map((item,index)=>{
      return <Card key={index} item={item} 
              onDelete={()=>this.handleDelete(index)}
              />
    })

    return (
      <div className="App">
        <div className="Todo-Layout">
          <img src={RImage} alt="React Image" height="100px" width="150px"/>
          <p>Todo app in React</p>
          <input type="text" value={this.state.name} 
                 onChange={this.handlechange}  onKeyPress={this.handleKey}
                 placeholder="Things To do"
                 maxLength="40"
                 />
          <div>
            {ListItem}
          </div>
          <span>{this.state.list.length} Items are Remaining</span>
        </div>
      </div>
    );
  }
}

export default App;
