import React from 'react';
const ProgressBar = (props:any) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
        height: '10px',
        borderRadius: '15px',
        width: '190px',
        backgroundColor: '#e4e4e4',
        display: 'flex',
        border: '1px solid #000',
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
    }
  
    const labelStyles = {
      padding: 5,
      color: '#e4e4e4',
      fontSize: '10px'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
        <span style={labelStyles}></span>
      </div>
    );
  }
  
  export default ProgressBar;
  