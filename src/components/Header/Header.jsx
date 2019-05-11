import React from "react";


const styles= {
    headerStyle : {
        background: {
            background: "blue"
        },
        headingStyle: {
            fontSize: 100
        }
    }
}
function Header() {
    return (

    <header style={styles.headerStyle} className="header">
        <h1>Avengers Clicky Game</h1>
        <p></p>
    </header>
    

    )
}
export default Header;
