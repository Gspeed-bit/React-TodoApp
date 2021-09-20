import React, {Component} from 'react'

const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
}

class Todolist extends Component{
   render (){
    
   
    return (
        <div className="todo-item">
         <input type="checkbox" 
         defaultChecked= {this.props.item.completed} 
         onChange = {()=> this.props.handleChange(this.props.item.id)}
         />
             <p style={this.props.item.completed ? completedStyle: null}>{this.props.item.text}</p> 
        </div>
    )
}
}


export default Todolist
