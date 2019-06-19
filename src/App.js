import React, { Component } from 'react';
import './App.css';
import data from './data'

class App extends Component{
  constructor(){
    super();
  }  
  

  renderSubMenu(menuOptions){
        // loop through the menu items 
        const subMenu = Object.values(menuOptions).map((option,i) => {

        
            return(
              
            <div> 
              {/* check if item has subitems */}
              {  (option.children.length > 0 )

              ?
                <div  className="subList">
                <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 14 14"><path d="M5 8l4 4 4-4z"/></svg> <input type="checkbox" id={option.item} />  <label htmlFor={option.item}>{option.item}</label>
                {/* recursive call to loop through the subitems */}
                <ul> {this.renderSubMenu(option.children)} </ul>
                </div>   
                
                  
              :
              //display the individual items 
              <li key={option.item} value= {option.item}><a href="#"> &#9776; &nbsp; {option.item}</a></li>

              }
             
            </div>);
            
          }
        );

        return subMenu;
      
    }

 
   render(){  
    return (
      //nav bar
      <div>
      <div className="nav">
      </div>

      {/*menu area*/}
      <div className="menu"> 
      <h4> MENU</h4>
      <ul className = "main"> { this.renderSubMenu(data) } </ul>
      </div>
     
      {/*content area*/}
      <div className="content"> </div>
      </div>
    );
  }

}

export default App;
