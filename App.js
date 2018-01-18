import React,{Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import Header from './src/component/common/Header';
import LoginForm from './src/component/LoginForm';

class App extends Component{
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyCOrM-hBYoZ-mUFBEKmnFhhJq1KjM4bmXY',
            authDomain: 'authentication-28695.firebaseapp.com',
            databaseURL: 'https://authentication-28695.firebaseio.com',
            projectId: 'authentication-28695',
            storageBucket: 'authentication-28695.appspot.com',
            messagingSenderId: '693056103586'
        });
    }
    render(){
        return(
            <View>
                <Header headerText={'Authentication'}/>
                <LoginForm/>
            </View>
        );
    }
}
export default App;