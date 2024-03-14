import SignIn from '../SignIn/SignIn'
import LogOut from '../SignIn/LogOut';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '/Users/oriol/Desktop/applibros-main/firebase';
import "./User.css";

const User = () => {
    const [user] = useAuthState(auth);

    const photo = user ? user.photoURL : "/userImage.png";
    const name = user ? user.displayName : "Name User";
    return ( 
        <div className='right-side'>
                    
            <article className='card-user'>
                <img src={photo} alt="user default" />
                <p>{name}</p>
                { user ? <LogOut/> : <SignIn/> }
            </article>
        </div>
    );
}
 
export default User;