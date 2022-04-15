import React from 'react';
import './Footer.css';

// Footer 

class Footer extends React.Component {


    render() {
        return (
            <div className="Footer">
                <div className='FooterLeft'>
                    <p>Created by Jonathan Hornby 2022</p>
                </div>
                <div className='FooterRight'>
                    <p><a href="mailto:jtorn9@gmail.com">Contact me</a></p>
                </div>
            </div>
        )
    }
}

export default Footer;