import master from '../../images/master.png';
import "./CardDetails.css"
const CardDetails = () => {
    return ( 
        <div className="carddetails">
            <div className="carddetails-inner">
                <div className="carddetails-left">
                    <p className="carddetails-header">Name of Card</p>
                    <p className="carddetails-text">Micheal</p>
                    <p className="carddetails-header">Date of issues</p>
                    <p className="carddetails-text">21-10-2013</p>
                    <p className="carddetails-header">Expiry Date</p>
                    <p className="carddetails-text">20-10-2033</p>
                </div>
                <div className="carddetails-right">
                    <div className="card-1 card-1-detail">
                        <img src={master} className='master-card'></img>
                        <p className='account-balance'>N1,250.69</p>
                        <p className='account-name'>Micheal</p>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default CardDetails;