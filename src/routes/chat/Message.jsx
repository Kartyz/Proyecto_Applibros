//import {auth} from '/Users/oriol/Desktop/applibros-main/firebase';
import {auth} from '/Users/oriol/Desktop/applibros/firebase';
import "./message.css";
//import {formatDate} from "/Users/oriol/Desktop/applibros-main/src/components/helpers/index.js";
import {formatDate} from "/Users/oriol/Desktop/applibros/src/components/helpers/index";
const Message =({ message }) => {
    let newStyles = '';
    if (auth.currentUser) {
        if (message.uid === auth.currentUser.uid) {
            newStyles = 'my-message';
        } else {
            newStyles = 'message';
        }
    } else {
        newStyles = 'message';
    }

    const date = new Date(message.timestamp?.seconds * 1000);
    const options = {
        month: 'long',
        day: 'numeric'
    };
    let h = date.getHours();
    let m = date.getMinutes();
    let time = h + ":" + m;

    const newDate = date.toLocaleDateString('en-US', options);
    return (
        <article className={newStyles}>
            <div>
                <div className='text-message'>
                    <p className="text">{message.text}</p>
                    
                </div>
                <p className="time">{formatDate(message.timestamp)}</p>
                
            </div>
            <img src={message.photo} alt="user photo" />
        </article>
    );
}
 
export default Message;