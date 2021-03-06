import React from 'react';
import './Home.css';

// Home

class Home extends React.Component {


    render() {
        return (
            <div className="Home borderdiv">
                <div className='homecontent'>
                    <h3>Welcome to my interview project - React application</h3>
                    <p>This is a React recreation of a PHP/MySQL application I wrote in 2009 for the company I was working for at the time. I have written this
                         from scratch in the evenings from 14th to 18th April 2022 for the purpose of my interview.</p>
                    <p><b>Context of the application:</b> The company supplies post paid mobile sim cards to businesses who assign the sim cards to users to make work phone calls.
                        The company charges for all phone calls made from the sim cards on a per second basis.
                        The company needs to invoice customers each month for the correct amount based on the phone calls made by it's users for the month. </p>
                    <p>Each business customer needs a breakdown of the total spend of each of it's users for each period, and needs to be able to view reports and
                        data for analysis of calling patterns and to pick up on any abuse by it's users.</p>
                    <p>A customer is a business which pays for it's users to make phone calls. </p>
                    <p>a user is a staff member at a specific customer who has a sim card allocated to them and makes phone calls from it.</p>
                    <p><b>Skills: </b>I have tried to demonstrate a range of skills, including:</p>
                    <div className='SkillsList'>
                        <ul>
                            <li>HTML</li>
                            <li>Responsive</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Stateless/Stateful</li>
                            <li>Async</li>
                            <li>JSX</li>
                            <li>Json</li>
                            <li>Git</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <p>Please browse the Navigation menu on the left</p>
                    <p>Due to only having a few days to get this done, I have used local json files to store data, rather than using an external database
                         and implmenting an API. There are also certain features which I couldnt get to complete, but which I have left in place unfinished 
                         as they are required for context of the application as a whole. EG. Certain links might point to # instead of actually doing something</p>
                </div>
            </div>
        )
    }
}

export default Home;