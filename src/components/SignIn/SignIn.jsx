//import { auth } from '/Users/oriol/Desktop/applibros/firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import "./SignIn.css";

const SignIn = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }

  return (
    <>
      <button 
        className='btn-login' 
        onClick={googleSignIn}
      >
        <i className="fa-brands fa-google"></i>
        Sign in 
      </button>
    </>
  );
}
 
export default SignIn;