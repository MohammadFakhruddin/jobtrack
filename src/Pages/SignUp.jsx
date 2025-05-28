import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import GoogleSignIn from '../Provider/GoogleSignIn';
import ShowHidePassword from '../Components/ShowHidePassword';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';






const SignUp = () => {


    const { createUser, setUser, updateUser } = use(AuthContext)


    const [passwordError, setPasswordError] = useState('')

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;


    const navigate = useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault();


        const form = e.target;
        const formData = new FormData(form)

        const name = formData.get('name')
        const photo = formData.get('photo')

        const { email, password, ...restFormData } = Object.fromEntries(formData.entries())


        const userProfile = {
            email,
            ...restFormData,

        }


        console.log(email, password, userProfile);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        toast.success('Account Created Successfully!!')
                        navigate('/')
                    })
                    .catch((error) => {
                        console.log(error);
                        setUser(user)
                    })

                fetch('https://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {

                        console.log(data.insertedID)



                    })
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });



        if (passwordRegex.test(password) === false) {
            setPasswordError('The password should be at least 8 characters and include 1 uppercase, 1 lowercase, and a special character.')
            return;
        }
    }



    return (
        <div>



            <div className="card bg-white w-full mx-auto my-20 max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSignUp} className="card-body">
                    <h1 className="text-3xl text-center text-accent font-bold">Register now!</h1>
                    <fieldset className="fieldset">

                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" required />



                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />

                        <label className="label">Photo</label>
                        <input type="text" name='photo' className="input" placeholder="Photo URL" required />

                        <ShowHidePassword></ShowHidePassword>


                        <button type='submit' className="btn btn-primary hover:btn-secondary mt-4">Sign Up</button>
                        <p className='text-center font-bold my-2 text-primary'>OR</p>

                        <GoogleSignIn></GoogleSignIn>

                        <p className='mt-3'>Already have an account? <Link className='text-primary font-semibold hover:text-secondary' to={'/auth/login'}>Log In</Link></p>
                    </fieldset>

                    {passwordError && <p className='text-xs text-error'>{passwordError}</p>}
                </form>
            </div>


        </div>
    );
};

export default SignUp;

