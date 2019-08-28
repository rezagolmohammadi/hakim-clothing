import  React from 'react';
import './signinAndSignup.scss';
import Signin from '../../components/signin/signin';
import SignUp from '../../components/signup/signup';

const SigninAndSignupPage = () => {
  return(
    <div className='sign-in-and-sign-up'>
      <Signin />
      <SignUp />
    </div>
  )
};

export default SigninAndSignupPage;