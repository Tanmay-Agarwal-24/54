import React, { Component } from 'react';
import { Button, View,Text,Alert } from 'react-native';

export default class App extends Component {
  render() {
    return (
    <View 
    style={{width:200,height:100,marginTop:80,marginLeft:80}}>
    <Button
       title="Sound-1"
       color="#FF0000"
       onPress={()=>Alert.alert('sound-1 is playing')}
      />
      

    <Button
       title="Sound-2"
       color="#00FF00"
       onPress={()=>Alert.alert('sound-2 is playing')}
       
    />
   <Button
       title="Sound-3"
       color="#0000FF"
       onPress={()=>Alert.alert('sound-3 is playing')}
       
    />
    <Button
       title="Sound-4"
       color="#FF00FF"
       onPress={()=>Alert.alert('sound-4 is playing')}
       
    />
    <Button
       title="Sound-5"
       color="#FFFFAA"
       onPress={()=>Alert.alert('sound-5 is playing')}
       
    />
  <Button
       title="Sound-6"
       color="#FFAAAA"
       onPress={()=>Alert.alert('sound-6 is playing')}
       
    />
  <Button
       title="Sound-7"
       color="#AAAAAA"
       onPress={()=>Alert.alert('sound-7 is playing')}
       
    />
<Button
       title="Sound-8"
       color="#ABCDEF"
       onPress={()=>Alert.alert('sound-8 is playing')}
       
    />
<Button
       title="Sound-9"
       color="#19AD3A"
       onPress={()=>Alert.alert('sound-9 is playing')}
       
    />
<Button
       title="Sound-10"
       color="#AF3B00"
       onPress={()=>Alert.alert('sound-9 is playing')}
       
    />



 </View>
 
    


    );
  }
}
