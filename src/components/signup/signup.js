import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';
import { SignUpContainer, SignUpTitle } from './signup.styles';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { displayName, email, password, confirmPassword }= userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    signUpStart({displayName, email, password, confirmPassword});
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({...userCredentials, [name] : value })
  }

  return(
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput 
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput 
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput 
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput 
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);