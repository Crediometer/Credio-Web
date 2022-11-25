import './TransferForm.css';
import { Link } from 'react-router-dom';
const TransferForm = () => {
    return ( 
        <div className="transferform">
            <p className="transfer-to">Transfer To</p>
            <form>
                <input
                type="text"
                placeholder="To"
                className='transfer-input'
                ></input><br></br>
                <input
                type="text"
                placeholder="Comments(Optional)"
                className='transfer-input'
                ></input><br></br>
                <Link to="/bycardsuccess">
                    <input
                    type="submit"
                    value="Proceed"
                    className="transfer-input transfer-submit"
                    ></input>
                </Link>
            </form>
        </div>
     );
}
 
export default TransferForm;