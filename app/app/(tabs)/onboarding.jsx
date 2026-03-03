import { View, Text, StyleSheet, Pressable, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/button";
import { router } from "expo-router";

const Onboarding = () => {
    
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'blue'}}>

            <View>
              <Image style={styles.image} source={require('../../assets/images/status-bar.png')}/>
            </View>

            <View>
              <Text style={styles.text} > Welcome to the Onboarding Screen </Text>
            </View>

            <Pressable style={styles.btnContainer}>
        
              <Button style={styles.button} textColor={'blue'} onPress ={() => {router.push('./sign-up')}} text={'Sign Up'} />
      
            </Pressable>

            <Pressable style={styles.btnContainer2}>
        
              <Button style={styles.button} textColor={'blue'} onPress ={() => {router.push('./sign-in')}} text={'Sign In'}/>
      
            </Pressable>


        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height: 40,
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf:'center',
        marginVertical: 40,
        color: 'white',
    },
    btnContainer:{
        marginVertical: 50,
        padding: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer2:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 100,
        marginVertical: 50,
    },
    button:{
        backgroundColor: '#fff',
        borderRadius: 30,
        paddingHorizontal: 50
    }
});

export default Onboarding;