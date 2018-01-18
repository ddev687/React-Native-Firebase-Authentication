import React,{Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import Card from "./common/Card";
import Button from "./common/Button";
import CardSection from './common/CardSection';
import Input from './common/Input';
import Spinner from "./common/Spinner";

class LoginForm extends Component
{
    state={email:'',password:'',error:'',loading:false};
    onButtonPress(){
        this.setState({error:'',loading:true});
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
            .then(this.onSuccess.bind(this))
            .catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.email)
                    .then(this.onSuccess.bind(this))
                    .catch(()=>{
                        this.setState({'error':'Authentication Failed',loading:false});
                    })
            })
    }
    onSuccess(){
        this.setState({
            email:'',
            password:'',
            error:'',
            loading:false
        });
    }
    renderButton(){
        if(this.state.loading){
            return <Spinner size={'small'}/>
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        );
    }
    render(){
        return(
            <Card>
                <Text style={Styles.errorStyle}>{this.state.error}</Text>
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
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const Styles={
    errorStyle:{
        fontSize:20,
        color:'red',
        textAlign:'center'
    }
}
export default LoginForm;