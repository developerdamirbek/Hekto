import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Input } from '../../../../components/ui/input/input';
import { Button } from '../../../../components/ui/button';

export const LoginCard = () => {
    const navigate = useNavigate(); 
    const [isRegistering, setIsRegistering] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(false); 

    const handleToggleMode = () => {
        setIsRegistering(!isRegistering);
        setError(false);
    };

    const handleRegister = () => {
        if (password !== confirmPassword) {
            setError(true);
            return;
        }

        const existingUser = JSON.parse(localStorage.getItem('user'));
        if (existingUser && existingUser.email === email) {
            setError(true); 
            return;
        }

        localStorage.setItem('user', JSON.stringify({ email, password }));

        navigate('/'); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const existingUser = JSON.parse(localStorage.getItem('user'));
        if (existingUser && existingUser.email === email && existingUser.password === password) {
            navigate('/');
        } else {
            setError(true);
        }
    };

    return (
        <div className='pt-[120px] pb-[120px] flex items-center justify-center'>
            <div className='shadow-custom py-[50px] px-[55px] max-w-[544px] w-[100%]'>
                <div className='text-center gap-2 mb-[37px]'>
                    <h3 className='font-josefinSans text-[32px] font-bold'>
                        {isRegistering ? 'Register' : 'Login'}
                    </h3>
                    <p className='text-[17px] text-[#9096B2]'>
                        {isRegistering ? 'Please enter your details to register.' : 'Please login using your account details.'}
                    </p>
                </div>
                <form onSubmit={isRegistering ? handleRegister : handleSubmit}>
                    <div className='flex flex-col gap-6 mb-[13px]'>
                        <Input
                            name="email"
                            type="email"
                            className={`p-4 rounded-sm ${error ? 'border-red-500' : ''}`}
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            name="password"
                            type="password"
                            className={`p-4 rounded-sm ${error ? 'border-red-500' : ''}`}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {isRegistering && (
                            <Input
                                name="confirmPassword"
                                type="password"
                                className={`p-4 rounded-sm ${error ? 'border-red-500' : ''}`}
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        )}
                    </div>
                    {!isRegistering && (
                        <p className='text-[17px] text-[#9096B2] mb-6 cursor-pointer' onClick={handleToggleMode}>Forgot Password?</p>
                    )}
                    {error && (
                        <p className='text-red mb-2'>
                            {isRegistering ? 'Passwords do not match or user already exists. Please try again.' : 'Invalid email or password. Please try again.'}
                        </p>
                    )}
                    <div className='mb-[28px]'>
                        <Button type="submit" className="w-full text-white rounded-md">
                            {isRegistering ? 'Register' : 'Login'}
                        </Button>
                    </div>
                    <div className='text-center'>
                        <p className='text-[17px] text-[#9096B2] mb-[23px]'>
                            {isRegistering
                                ? 'Already have an account?'
                                : 'Don’t have an account?'}
                            <span
                                className="text-blue-600 cursor-pointer"
                                onClick={handleToggleMode}
                            >
                                {isRegistering ? ' Login' : ' Create account'}
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};
