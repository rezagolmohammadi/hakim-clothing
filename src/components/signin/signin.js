import React from 'react';
import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';
import { auth, signInWithGoogle } from '../../firebase/firebase';
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './signin.styles';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password} = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password:'' });
    } catch(error) {
      console.log(error)
    };
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return(
      <SignInContainer>
        <SignInTitle>I have already an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput handleChange={this.handleChange} name='email' type='email' value={this.state.email} label="email" required />
          <FormInput handleChange={this.handleChange} name='password' type='password' value={this.state.password} label="password" required />
          <ButtonsBarContainer>
            <CustomButton type='submit'>Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
};

export default Signin;