import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',

},

image: {
flex: 1,
width: undefined,
height: undefined},

profileHeader:{
   backgroundColor:'#0084CE',
   paddingRight: 30,
   paddingLeft: 20,
   paddingTop: 20,
   paddingBottom: 30,
   justifyContent: 'space-between',
   alignItems: 'center',
   flexDirection: 'row',
   borderRadius: 5,
   elevation: 20
},

profileImage: {
   width: 130,
   height: 130,
   borderRadius: 200,
   overflow: 'hidden',
   elevation: 15,
   
},

button: {
   alignItems: 'center',
   width: '100%',
   height: 150,
   borderRadius: 20,
   marginTop:5,
   paddingBottom: 2,
   elevation: 10,
   
},

buttonText:{
   paddingTop: 18,
}




});