import React, { Component } from 'react';
import './App.css';
import About from './About.js';
import Links from './Links.js';
import Menu from './Menu.js';
import Projects from './Projects.js';

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      projects: [],
    }  
  }
  
  componentWillMount()
  {
  fetch('https://gist.githubusercontent.com/Aeris94/a7468c0fed21d5194bfc9c073de88a47/raw/c7571092a392c0ac959219105401f3761f9aef22/Projects.json')
  .then(response => response.json())
  .then(myJson => {
      this.setState({projects: myJson.projects});
    });     
  }
     
  render()
  {
    return(
      <div id="portfolio">
        <Menu />
        
        <About />
        <Projects projects={this.state.projects} />  
        <Links />
      </div>
    )
  }
}

export default App;
