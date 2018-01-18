import React from 'react';
import {Text,View,TextInput} from 'react-native';

const Input=({label,value,onChangeText,placeholder,secureTextEntry})=>{
    return(
        <View style={Styles.viewStyle}>
            <Text style={Styles.labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                style={Styles.inputStyle}
                onChangeText={onChangeText}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}/>
        </View>
    );
}

const Styles={
    inputStyle:{
        marginRight:5,
        marginLeft:5,
        flex:2,
        fontSize:20,
        lineHeight:25,
        color:'#000'
    },
    labelStyle:{
        fontSize:20,
        paddingLeft:15,
        flex:1
    },
    viewStyle:{
        height:40,
        flexDirection:'row',
        flex:1,
        alignItems:'center'
    }
}

export default Input;