import React, { Component } from 'react';
import FormInput from '../Form-Input/FormInput';
import CustomButton from '../Custom-Button/Custom-Button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './SignIn.scss';


class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch(error) {
            console.log(error);
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className='sign-in'>
               <h2 className='title'>I already have an account</h2>
               <span>Sign in with your email and password</span>

               <form onSubmit={this.handleSubmit}>
                   <FormInput
                        type="email"
                        name="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label="email"
                        required
                    />
                   <FormInput
                        type="password"
                        name="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label="password"
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn> Sign in with Google</CustomButton>
                    </div>
               </form>
            </div>
        );
    }
}

export default SignIn;