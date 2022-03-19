import React, { Component, useCallback } from 'react';
import { 
    SafeAreaView,
    View, 
    Text,
    StyleSheet,
    Image,
    Button,
    Alert,
    TouchableOpacity,
} from 'react-native';
import { styles } from './styles'
export default Home = () => {

    return(
        <SafeAreaView style={styles.container}>

            <View style= {styles.profileHeader}>
                <View style = {styles.profileImage}>
                    <Image source={require('../Home/assets/profile.jpg')} style={styles.image} resizeMode='center'></Image>
                </View>

                <View style={styles.textProfile}>
               <Text style= {{ fontSize: 40, fontWeight: '600', color:'white'}}>
                   Actividad 1 </Text> 
                <Text style= {{ fontSize: 18, fontWeight:'200'}}>
                   Alumno: Axel Cerkvenih</Text> 

                   </View>
            </View>

            

            {/* /* BOTON 1  */}


            <TouchableOpacity
            style= {[styles.button, {backgroundColor: '#3EA891'}]}
            onPress= {()=> console.log('boton 1')}>

            <Text style= {{...styles.buttonText,
            fontSize: 80, color: 'white',
            fontWeight: '200',
            }}>
                H O M E 
            </Text>

            </TouchableOpacity>

                 {/* /* BOTON 2 */}


            <TouchableOpacity



           style= {[styles.button, {backgroundColor: '#FE5373'}]}
            onPress= {()=> console.log('boton 2')}>

            <Text style= {{...styles.buttonText,
            fontSize: 80, color: 'white',
            fontWeight: '200',
            }}>
                L I S T S
            </Text>

            </TouchableOpacity>

                 {/* /* BOTON 3 */}


            <TouchableOpacity

              style= {[styles.button, {backgroundColor: '#F6C84F'}]}
            onPress= {()=> console.log('boton 3')}>

            <Text style= {{...styles.buttonText,
            fontSize: 80, color: 'white',
            fontWeight: '200',
            }}>
               M A P S 
            </Text>

            </TouchableOpacity>


             {/* /* BOTON 4 */}

             {/*  */}

            <TouchableOpacity

            style= {[styles.button, {backgroundColor: '#2AB2B2'}]}
            onPress= {()=> console.log('boton 4')}>

            <Text style= {{...styles.buttonText,
            fontSize: 70, color: 'white',
            fontWeight: '200',
            }}>
              P R O F I L E
            </Text>

            </TouchableOpacity>

        </SafeAreaView>
    )
}

