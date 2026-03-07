import {Text, View, StyleSheet, Pressable, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InfoRow from '../../../components/info-row';

const Password = () => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <ScrollView>

                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                      <MaterialCommunityIcons name="chevron-left" size={32} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle} >Password</Text>
                </View>

                <View style={styles.container}>
                    <InfoRow label={'Current Password'} value={'******'}/>
                    <InfoRow label={'New Password'} value={'******'}/>
                    <InfoRow label={'Confirm New Password'} value={'******'}/>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        margin: 5,
    },
    header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0', 
  },
  backButton: {
    padding: 11,
    marginLeft: -8, 
    backgroundColor: '#00f'
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    flex: 1, 
    backgroundColor: '#00f',
    padding: 15,
    color: '#fff'
  },
});

export default Password;