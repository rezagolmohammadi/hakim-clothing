import  React from 'react';
import Signin from '../../components/signin/signin';
import SignUp from '../../components/signup/signup';
import { SignInAndSignUpContainer } from './signinAndSignup.styles';

const SigninAndSignupPage = () => {
  return(
    <SignInAndSignUpContainer>
      <Signin />
      <SignUp />
    </SignInAndSignUpContainer>
  )
};

export default SigninAndSignupPage;