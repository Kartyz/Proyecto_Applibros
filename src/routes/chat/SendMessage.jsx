import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
//import {auth, db} from '/Users/oriol/Desktop/applibros-main/firebase';
import Picker from "emoji-picker-react";
import "./SendMessage.css";

const SendMessage = ({ scroll }) => {
    const [input, setInput] = useState('');
    const [open, setOpen] = useState('close');

    const sendMessage = async (e) => {
        e.preventDefault();
        if (input === '') {
            alert('Please enter a valid message');
            return;
        }

        const { uid, displayName, photoURL } = auth.currentUser;
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            photo: photoURL,
            timestamp: serverTimestamp()
        });
        setInput('');
        scroll.current.scrollIntoView({ behavior: 'smooth' });
    };

    const emoji = () => {
        setOpen('open');
    };
    const closeEmoji = () => {
        setOpen('close');
    };
    const onEmojiClick = (event, emojiObject) => {
        
            setInput(`${input}${emojiObject.emoji}`);
        
        
        
    };

    return (
        <form onSubmit={sendMessage} className="BarraMensaje">
            
            <button
                type="button"
                className="btn-chat-emoji"
                onClick={emoji}>
                <i className="fa-solid fa-face-laugh-squint"></i>
            </button>
            <div className={open}>
                
                <button
                    className="close-emoji"
                    onClick={closeEmoji}
                    type="button">
                        <i className="fa-solid fa-circle-xmark"></i>
                </button>
                <Picker onEmojiClick={onEmojiClick} />
            </div>

            <input type="text"
                placeholder="Enter your message here"
                value={input}
                onChange={e => setInput(e.target.value)}
                className="message-input" 
            />
            <button type="submit" className="btn-chat">Send <i className="fa-solid fa-paper-plane"></i></button>
        </form>
    );
}
 
export default SendMessage;