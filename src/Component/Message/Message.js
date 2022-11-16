import './Message.css';
const Message = (props) => {
    return ( 
        <div className="message">
            <div className="message-left">
                <img src={props.image} className='message-image'></img>
                <div className="message-overview">
                    <p className="sender-name">{props.name} </p>
                    <p className="sender-message">{props.message}</p>
                </div>
            </div>
            <div className="message-right">
                <p className='message-time'>{props.time}</p> 
            </div>
        </div>
     );
}
 
export default Message;