import './App.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Sidebar from './Component/Sidebar/Sidebar';
import Overview from './Pages/Overview/Overview';
import Transaction from './Pages/Transactions/Transaction';
import ChatOverview from './Pages/Chat/ChatOverview';
import People from './Pages/Chat/People';
import Chat from './Pages/Chat/Chat';
import Transfer from './Pages/Chat/Transfer';
import Receipt from './Pages/Receipt/Receipt';
import Cards from './Pages/Cards/Card';
import ByCard from './Pages/Cards/ByCard';
import ByCardSuccess from './Pages/Cards/ByCardSuccess';
function App() {
  return (
      <div className="App">
        <Sidebar/>
        <div className="app-contain">
          <Navbar/>
          <div className="container">
            <Routes>
              <Route exact path='/' element={ <Overview/>}></Route>
              <Route exact path='/transaction' element={<Transaction/>}></Route>
              <Route exact path='/chatoverview' element={<ChatOverview/>}></Route>
              <Route exact path='/people' element={<People/>}></Route>
              <Route exact path='/chat' element={<Chat/>}></Route>
              <Route exact path='/transfer' element={<Transfer/>}></Route>
              <Route exact path='/receipt' element={<Receipt/>}></Route>
              <Route exact path='/card' element={<Cards/>}></Route>
              <Route exact path='/bycard' element={<ByCard/>}></Route>
              <Route exact path='/bycardsuccess' element={<ByCardSuccess/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
