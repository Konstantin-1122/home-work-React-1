import React from 'react';

const Footer = () => {
  let styleAge = {
        width: '174px',
    height: '66px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: '0%',
    bottom: '-11%',
  }
    return (
        <footer>
            <div style={styleAge}>
                <div style={{width: '33px', height: '66px',
    backgroundColor: 'rgba(212, 13, 31, 1)'}}
  ></div>
                <span>16+</span>
                </div>
          
        </footer>
    )
};

export default Footer;