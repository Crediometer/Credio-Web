import SearchBar from '../../Component/Searchbar/SearchBar';
import './Receipt.css'
const Receipt = () => {
    return ( 
        <div className="receipt">
            <p className="receipt-header">Receipt</p>
            <div className="receipt-body">
                <SearchBar/>
                <div className="receipt-list">
                    <p className="transaction-date">TODAY | 19 NOV,2021</p>
                </div>
            </div>
        </div>
     );
}
 
export default Receipt;