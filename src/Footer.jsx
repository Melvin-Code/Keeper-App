import React, { Component } from 'react';

class Footer extends Component {
    dinamycCopyrigth=()=>{
        let time = new Date()
        let year = time.getFullYear()
        return year
    }
    render() {
        return (
            <footer>
               <p>Copyrigth &copy; {this.dinamycCopyrigth()}</p>
            </footer>
        );
    }
}

export default Footer;