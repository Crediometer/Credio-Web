import { useState } from 'react';
import Chart from '../../Component/Chart/Chart';
import './Overview.css';

import {UserData} from '../../Component/Chart/Data';
import {BiSliderAlt} from 'react-icons/bi';
import {FaPlus} from 'react-icons/fa'
import master from '../../images/master.png';
import {AiOutlineMinus} from 'react-icons/ai';
import Message from '../../Component/Message/Message';
const Overview = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data)=> data.Date),
        datasets: [{
            label: "Amount Spent", 
            data: UserData.map((data)=> data.Amount),
            backgroundColor:["#861F41"],
        }]
    })
    return ( 
        <div className="overview">
            <div className="overview-outer">
                <p className="overview-header">Your Finance Overview, Michael!</p>
                <div className="overview-body">
                    <div className="financial-report">
                        <div className="overview-subheader">
                            <p>Finance Report</p>
                            <div className="overview-sort">
                                <p>Sort by</p>
                                <BiSliderAlt/>
                            </div>
                        </div>
                        <div className='chart-style'>
                            <Chart chartData={userData}/>
                        </div>
                    </div>
                    <div className="your-card">
                        <p className="card-header">Your Cards</p>
                        <div className="cards">
                            <div className="card-1">
                                <img src={master} className='master-card'></img>
                                <p className='account-balance'>N1,250.69</p>
                                <p className='account-name'>Micheal</p>
                            </div>
                            <div className="card-2">
                                <img src={master} className='master-card-2'></img>
                                <p className='account-balance-2'>$125,069</p>
                                <p className='account-name-2'>Micheal</p>
                            </div>
                        </div>
                    </div>
                    <div className="recent-transaction">
                        <div className="overview-subheader">
                            <p>Recent Transactions</p>
                            <div className="overview-sort">
                                <p>Sort by</p>
                                <BiSliderAlt/>
                            </div>
                        </div>
                        <div className="recent-transaction-body">
                            <p className='recent-date'>TODAY | 19 NOV,2021</p>
                            <div className="recent-data">
                                <div className="first-recent">
                                    <div className="recent-left">
                                        <div className="loss">
                                            <AiOutlineMinus/>
                                        </div>
                                        <div className="transaction-body">
                                            <p className='transfer-name'>Transfer to <span>Mikey</span></p>
                                            <p className="transfer-time">10:07 am</p>
                                        </div>
                                    </div>
                                    <div className="recent-right">
                                        <p className="transfer-amount">₦ 100</p>
                                        <p className="transfer-title">Online food order</p>
                                    </div>
                                </div>
                                <div className="first-recent">
                                    <div className="recent-left">
                                        <div className="loss">
                                            <FaPlus/>
                                        </div>
                                        <div className="transaction-body">
                                            <p className='transfer-name'>Transfer to <span>Mikey</span></p>
                                            <p className="transfer-time">10:07 am</p>
                                        </div>
                                    </div>
                                    <div className="recent-right">
                                        <p className="transfer-amount">₦ 100</p>
                                        <p className="transfer-title">Online food order</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="your-chat">
                        <p className="card-header">Your Charts</p>
                        <div className="recent-messages">
                            <Message
                                image="https://source.unsplash.com/random/?person"
                                name = "Lee Alexander"
                                message = "₦ 267.0 Incoming transaction"
                                time = "10:07 am"
                            />
                            <Message
                                image="https://source.unsplash.com/random/?person"
                                name = "Lee Alexander"
                                message = "₦ 267.0 Incoming transaction"
                                time = "10:07 am"
                            />
                            <Message
                                image="https://source.unsplash.com/random/?person"
                                name = "Lee Alexander"
                                message = "₦ 267.0 Incoming transaction"
                                time = "10:07 am"
                            />
                            <Message
                                image="https://source.unsplash.com/random/?person"
                                name = "Lee Alexander"
                                message = "₦ 267.0 Incoming transaction"
                                time = "10:07 am"
                            />
                            <Message
                                image="https://source.unsplash.com/random/?person"
                                name = "Lee Alexander"
                                message = "₦ 267.0 Incoming transaction"
                                time = "10:07 am"
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Overview;