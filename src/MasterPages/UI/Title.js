import React from 'react';
import '../../Styles/MasterCss.css';

const Title = (props) => {
    return (
      <div className='container'>
        <div className="titleContainer">
          <div className="pagetitle">
                {props.title}
          </div>
		    </div>
      </div>
    );
}

export default Title;
