import {FiChevronLeft} from 'react-icons/fi';
import {BsArrowRight} from 'react-icons/bs'
import uba from "../../images/uba.png"
import './TransferCard.css';
const TransferCard = () => {
    return ( 
        <div className="transfercard">
            <div className="chat-body-header">
                <div className="chat-back"><FiChevronLeft/></div>
                <div className="chat-image"><img src="https://source.unsplash.com/random/?person"></img></div>
                <div className="chat-details">
                    <p className="chat-name">Lee Alexander</p>
                    <p className="chat-phone">+234-8936523456</p>
                </div>
            </div>
            <div className="amount-input">
                <form>
                    <div className="amount-body">
                        <label className='currency'>₦</label>
                        <input
                            type="number"
                            placeholder="0"
                            className='currency-input'
                        ></input><br></br>
                    </div>
                    <input
                        type='submit'
                        value="Add a note"
                        className='currency-submit'
                    >
                    </input>
                </form>
            </div>
            <div className="transfer-bank">
                <p className="transfer-bank-header">CHOOSE TO PAY WITH</p>
                <div className="transfer-bank-inner">
                    <div className="transfer-bank-left">
                        <div className="bank-logo">
                            <img src={uba}></img>
                        </div>
                        <div className="bank-details">
                            <p className='bank-name'>UBA Bank</p>
                            <p className='account-type'>Savings account</p>
                        </div>
                    </div>
                    <div className="transfer-bank-right">
                        <BsArrowRight/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TransferCard;