import { useState, useEffect, useRef } from "react";
import Message from "./Message";
import {db} from "/Users/oriol/Desktop/applibros-main/firebase";
import {query, collection, orderBy, onSnapshot} from 'firebase/firestore';
import SendMessage from "./SendMessage";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '/Users/oriol/Desktop/applibros-main/firebase';
import Footer from "../../components/footer/footer";
import User from "../../components/User/User";
import "./Chat.css";



const Chat = () => {
    const [message, setMessage] = useState([]);
    const scroll = useRef();
    const [user] = useAuthState(auth);
    
    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach(doc => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessage(messages);
        });
        return () => unsubscribe();
    }, []);

    return (
        
        <><User /><>
            <section className="chat-content">
                {message && message.map(item => (
                    <Message
                        key={item.id}
                        message={item} />
                ))
            }
        {user && <SendMessage scroll={scroll} />}

                <span ref={scroll}></span>
            </section>
        </><Footer /></>
        
        
    );
    
}
 
export default Chat;