import React from 'react';
import Tooltip from './Tooltip.js';

const Projects = (props) =>
{
  let aStyle = {};
  return(
    <div id="projects" className="section">
      <h1>Here's some of my work</h1>
      <div id="projectBox">
         {props.projects.map(item =>{
           aStyle = {
            backgroundImage: `url(${item.picture})`};
            return(
              <div className="projectLinkBox">
                <h2>{item.title}</h2>
                <a href={item.url}
                   data-tip="adasd"
                   className="projectLink"
                   style = {aStyle}
                   target="_blank">
                   <Tooltip text={item.tooltip} /> 
                 </a>
              </div>
          )
        })}
        </div>
      </div>
  )
}

export default Projects;