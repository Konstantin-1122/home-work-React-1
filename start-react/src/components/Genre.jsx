import React from 'react';

const Genre = () => {
       const genreSpan = {
        display: 'inline-block',
        padding:'1px 18px',
        borderLeft: '3px solid white',

    }
    const genreSpan1 = {
        display: 'inline-block',
        borderLeft: 'none',
        paddingLeft: '0px',
        padding:'1px 18px',
    }

    return (
         <div className="genderContainer" style={{ display:'flex', color:'white', fontSize:'32px', fontWeight:'500px', lineHeight:'39px', textAlign:'left', marginTop:'115px', marginBottom:'65px'}} >
        <span style={genreSpan1}>
         Drama
        </span>
         <span style={genreSpan}>
             Thriller
         </span>
         <span style={genreSpan}>
            Supernatural

         </span>
     </div>
    );
};

export default Genre;