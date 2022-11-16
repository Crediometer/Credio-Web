import './Chat.css';
import {FiChevronLeft} from 'react-icons/fi';
import {IoPaperPlaneOutline} from 'react-icons/io5'
import Text from '../../Component/Textbox/Text';
import { Link } from 'react-router-dom';
const Chat = () => {
    return ( 
        <div className="chat">
            <p className="chat-header">Transfering between accounts</p>
            <div className="chat-body">
                <div className="chat-body-header">
                    <div className="chat-back"><FiChevronLeft/></div>
                    <div className="chat-image"><img src="https://source.unsplash.com/random/?person"></img></div>
                    <div className="chat-details">
                        <p className="chat-name">Lee Alexander</p>
                        <p className="chat-phone">+234-8936523456</p>
                    </div>
                </div>
                <div className="chat-messages">
                    <div className="sender">
                        <Text/>
                    </div>
                    <div className="receiver">
                        <Text/>
                    </div>
                </div>
                <div className="chat-panel">
                    <div className="pay-request">
                        <div className="pay"><button>Pay</button></div>
                        <Link to="/transfer">
                            <div className="request"><button>Request</button></div>
                        </Link>
                    </div>
                    <div className="input-chat">
                        <input 
                          type="text"
                          placeholder="Message"
                          className='chat-bar'
                        ></input>
                        <IoPaperPlaneOutline/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Chat;