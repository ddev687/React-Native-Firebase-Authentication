import React,{Component} from 'react';
import {TextInput} from 'react-native';
import Card from "./common/Card";
import Button from "./common/Button";
import CardSection from './common/CardSection';
import Input from './common/Input';

class LoginForm extends Component
{
    state={email:'',password:''};
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        value={this.state.email}
                        label={'Email'}
                        placeholder={'User@gmail.com'}
                        onChangeText={email=>this.setState({email})}/>
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        value={this.state.password}
                        label={'Password'}
                        placeholder={'********'}
                        onChangeText={password=>this.setState({password})}/>
                </CardSection>
                <CardSection>
                    <Button/>
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm;