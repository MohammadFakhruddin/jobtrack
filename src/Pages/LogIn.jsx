import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import GoogleSignIn from '../Provider/GoogleSignIn';
import ShowHidePassword from '../Components/ShowHidePassword';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';


const LogIn = () => {
    const [error, setError] = useState('')


    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value

        signIn(email, password)
            .then((result) => {
                const user = result.user
                console.log(user);
                toast.success('Login Successfull!!')

                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch((error) => {
                const errorCode = error.code;

                setError(errorCode)
            })
    }


    return (
        <div>


            <div className="card bg-white w-full mx-auto my-20 max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogIn} className="card-body">
                    <h1 className="text-3xl text-center text-accent font-bold">Login now!</h1>
                    <fieldset className="fieldset">

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />

                        <ShowHidePassword></ShowHidePassword>

            {error && <p className='text-red-600'>{error}</p>}


                        <button type='submit' className="btn btn-primary hover:btn-secondary mt-4">Log In</button>

                        <p className='text-center font-bold my-2 text-primary'>OR</p>

                        <GoogleSignIn></GoogleSignIn>
                        <p className='mt-3'>Don't have an account? <Link className='text-primary font-semibold hover:text-secondary' to={'/auth/signup'}>Sign Up</Link></p>
                    </fieldset>
                </form>
            </div>

        </div>
    );
};

export default LogIn
