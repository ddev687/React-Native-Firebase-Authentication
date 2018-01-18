import React from 'react';
import {Text,TouchableOpacity} from 'react-native';


const Button=({onPress})=>{
  return(
      <TouchableOpacity style={Styles.buttonStyle} onPress={onPress}>
        <Text style={Styles.buttonTextStyle}>Login</Text>
      </TouchableOpacity>
  );
};

const Styles={
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderWidth:2,
        borderColor:'#007aff',
        borderRadius:5,
        marginLeft:5,
        marginRight:5
    },
    buttonTextStyle:{
        alignSelf:'stretch',
        color:'#007aff',
        paddingTop:10,
        paddingBottom:10,
        fontSize:15,
        fontWeight:'700',
        textAlign:'center'
    }
}

export default Button;