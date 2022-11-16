import PeopleCard from "../../Component/Message/PeopleCard";
import SearchBar from "../../Component/Searchbar/SearchBar";
import "./People.css";
import {FiChevronRight} from 'react-icons/fi';
const People = () => {
    return ( 
        <div className="people">
            <p className="chatoverview-header">Transfering between accounts</p>
            <div className="people-body">
                <p className="people-header">People</p>
                <SearchBar/>
                <div className="people-list">
                    <PeopleCard
                        image="https://source.unsplash.com/random/?person"
                        name = "Lee Alexander"
                        phone = "+234 802 3456 324"
                    />
                    <PeopleCard
                        image="https://source.unsplash.com/random/?person"
                        name = "Lee Alexander"
                        phone = "+234 802 3456 324"
                    />
                    <PeopleCard
                        image="https://source.unsplash.com/random/?person"
                        name = "Lee Alexander"
                        phone = "+234 802 3456 324"
                    />
                    <PeopleCard
                        image="https://source.unsplash.com/random/?person"
                        name = "Lee Alexander"
                        phone = "+234 802 3456 324"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default People;