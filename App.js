import { StyleSheet, Text, View, Image,Pressable,Alert} from 'react-native';

export default function App() {
  function press(){
    Alert.alert("Уведомление", "Хорошего дня!")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Добро пожаловать</Text>
      <Image style={styles.logo}resizeMode='contain' source={{uri:'https://i.pinimg.com/originals/60/58/0e/60580ebe35939188b48a2927fc80e27e.gif'}}/>
      <Pressable style={styles.button} onPress={press}>
            <Text style={styles.title}>Далее</Text>
      </Pressable>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 300,
    height: 300,
  },
  text:{
    color:'#392D10',
    fontWeight: "bold",
    fontSize: 17,
      },
  button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 40,
      backgroundColor: '#392D10',
      bottom:-60,
      width:100,
      height: 45
    },
  title: {
      fontSize: 15,
      lineHeight: 21,
      fontWeight: 'bold',
      color: 'white',
    },
});
