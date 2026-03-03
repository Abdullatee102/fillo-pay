import { SafeAreaView } from "react-native-safe-area-context"
import { KeyboardAvoidingView, StyleSheet, Platform} from "react-native"


const FSafeView = ({children, bgColor})=>{

    return(
     <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
       >
        {children}
      </KeyboardAvoidingView>
     </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#00f' 
},
});

export default FSafeView;