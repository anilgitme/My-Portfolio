import React from 'react';
import { render } from 'react-dom';

const Selector = () => {
    let selectors = [
        {name: 'About'},
        {name: 'Contact'}
    ];
    return(
        <div className="container">
        <ul className="selector-list">
          {selectors.map(index => (
            <li
              key={index.name}
              onClick={this.props.onSelect.bind(null, index.name)}
            >
              {index.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }

 export default Selector;