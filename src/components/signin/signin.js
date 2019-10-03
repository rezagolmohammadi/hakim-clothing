import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './signin.styles';

const Signin = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({email:'', password:''})

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({...userCredentials, [name]: value });
  };

  return(
    <SignInContainer>
      <SignInTitle>I have already an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput handleChange={handleChange} name='email' type='email' value={email} label="email" required />
        <FormInput handleChange={handleChange} name='password' type='password' value={password} label="password" required />
        <ButtonsBarContainer>
          <CustomButton type='submit'>Sign in </CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(Signin);