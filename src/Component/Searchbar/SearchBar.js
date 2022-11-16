import './Searchbar.css';
import { FaSearch } from 'react-icons/fa';
const SearchBar = () => {
    return ( 
        <div className="search-transaction">
            <div className="searchtran">
                <FaSearch/>
            </div>
            <form>
                <input 
                    type ="text"
                    className="search"
                    placeholder = "Search by name or date"
                />
            </form>
        </div>
     );
}
 
export default SearchBar;