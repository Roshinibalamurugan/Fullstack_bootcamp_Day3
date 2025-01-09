import React from 'react';   // type rafc - for arrow function

const Header = () => {         // functional component
    let data = [1, 2, 3, 4, 5];
   return(
    <div>
        {data.map((i, k) => {  // Corrected syntax: added parentheses around (i, k)
            return(
                <li key={k}>{i}</li>  // Corrected key usage and syntax
            );
        })}
    </div>
   );
};

export default Header;


/*
//<></> - fragments
//rfce+enter the below code will display
import React from 'react'
function header() {
  return (
    <div>header</div>
  )
}
export default header  
*/