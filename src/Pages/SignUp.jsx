import React from 'react';

const SignUp = () => {
    return (
        <div>
                        <div className="card bg-white mt-16 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold text-[#005D45]">Register now!</h1>
                    <form onSubmit={handleSignUp}>
                        <fieldset className="fieldset">
                            <label className="label primary">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="input"
                                placeholder="Full Name"
                            />
                            {nameError && <p className='text-xs text-error'>{nameError}</p>}

                            <label className="label primary">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input"
                                placeholder="Email"
                            />

                            <label className="label primary">Photo URL</label>
                            <input
                                type="url"
                                name="photo"
                                className="input"
                                placeholder="Photo URL"
                            />

                            <PassWordHide />

                            <button type='submit' className="btn btn-neutral bg-[#005D45] mt-4">Register</button>

                            <p className='text-center font-bold my-2 text-[#005D45]'>OR</p>
                            <GoogleSignIn />
                        </fieldset>

                        {passwordError && <p className='text-xs text-error'>{passwordError}</p>}

                        <p className='mt-3'>
                            Already have an account?{' '}
                            <Link className='text-[#005D45] font-semibold ' to='/auth/login'>
                                Log In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;