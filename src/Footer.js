import React from 'react'
import classes from "./Footer.module.css"
import git from "./assets/github.png"

function footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.center}>
                <p>Made with ❤️ by <a href="https://github.com/Ashutosh741" target="_blank">Ashutosh</a> <img src={git} alt="" /></p>
                <p>Copyright © 2021</p>
            </div>
        </div>
    )
}

export default footer
