import {MdOutlineArrowForwardIos} from 'react-icons/md';
import './ActionCard.css';
const ActionCard = (props) => {
    return ( 
        <div className="actioncard">
            <div className="actioncard-left">
                <div className="actioncard-left-inner">
                    <div className="avater">

                    </div>
                    <div className="action-word">
                        <p className="action-word-header">{props.header}</p>
                        <p className="action-word-text">{props.text}</p>
                    </div>
                </div>
            </div>
            <div className="actioncard-right">
                <MdOutlineArrowForwardIos/>
            </div>
        </div>
     );
}
 
export default ActionCard;