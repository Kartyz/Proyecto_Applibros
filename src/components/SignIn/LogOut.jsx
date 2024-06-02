 import { auth } from '/Users/oriol/Desktop/applibros/firebase';
const LogOut = () => {
    const signOut = () => {
        signOut(auth);
    }
    
    return ( 
        <>
            <button 
                onClick={() => auth.signOut()}
                className='btn-login btn-logout'
            >
                
                Logout
            </button>
        </>
    );
}
    
export default LogOut;