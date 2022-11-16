import './Transaction.css';
import { FaSearch } from 'react-icons/fa';
import SearchBar from '../../Component/Searchbar/SearchBar';
import Message from '../../Component/Message/Message';
import TransactionCard from '../../Component/Message/TransactionCard';
const Transaction = () => {
    return ( 
        <div className="transaction">
            <p className="transaction-header">Transactions</p>
            <div className="transaction-body2">
                <SearchBar/>
                <div className="transaction-list">
                    <p className="transaction-date">TODAY | 19 NOV,2021</p>
                    <TransactionCard
                        image="https://source.unsplash.com/random/?person"
                        name = "Lee Alexander"
                        time = "10:07pm"
                        amount = "₦ 100"
                        detail = "Online food order"
                    />
                    <TransactionCard
                        image="https://source.unsplash.com/random/?person"
                        name = "Lee Alexander"
                        time = "10:07pm"
                        amount = "₦ 100"
                        detail = "Online food order"
                    />
                    <TransactionCard
                        image="https://source.unsplash.com/random/?person"
                        name = "Lee Alexander"
                        time = "10:07pm"
                        amount = "₦ 100"
                        detail = "Online food order"
                    />
                    <TransactionCard
                        image="https://source.unsplash.com/random/?person"
                        name = "Lee Alexander"
                        time = "10:07pm"
                        amount = "₦ 100"
                        detail = "Online food order"
                    />
                    <TransactionCard
                        image="https://source.unsplash.com/random/?person"
                        name = "Lee Alexander"
                        time = "10:07pm"
                        amount = "₦ 100"
                        detail = "Online food order"
                    />
                    <p className="transaction-date">TODAY | 19 NOV,2021</p>
                    <TransactionCard
                        image="https://source.unsplash.com/random/?person"
                        name = "Lee Alexander"
                        time = "10:07pm"
                        amount = "₦ 100"
                        detail = "Online food order"
                    />
                    <TransactionCard
                        image="https://source.unsplash.com/random/?person"
                        name = "Lee Alexander"
                        time = "10:07pm"
                        amount = "₦ 100"
                        detail = "Online food order"
                    />
                    <TransactionCard
                        image="https://source.unsplash.com/random/?person"
                        name = "Lee Alexander"
                        time = "10:07pm"
                        amount = "₦ 100"
                        detail = "Online food order"
                    />
                    <TransactionCard
                        image="https://source.unsplash.com/random/?person"
                        name = "Lee Alexander"
                        time = "10:07pm"
                        amount = "₦ 100"
                        detail = "Online food order"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Transaction;