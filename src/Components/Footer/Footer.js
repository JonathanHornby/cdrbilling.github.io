import React from 'react';
import './Footer.css';

// Footer 

class Footer extends React.Component {


    render() {
        return (
            <div className="Footer">
                <div className='FooterLeft'>
                    <p>Footer Left</p>
                </div>
                <div className='FooterRight'>
                    <p>Footer Right</p>
                </div>
            </div>
        )
    }
}

export default Footer;