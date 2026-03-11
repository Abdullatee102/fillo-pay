import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, RefreshControl, ActivityIndicator, Image, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useAuthStore } from '../(tabs)/store';

const Home = () => {
  const user = useAuthStore((state) => state.user);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

   return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'blue'}}>
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

      <View style={{backgroundColor:'blue', margin: 10}}>

      <View>
        <Pressable onPress={ () => {router.push('../settings')}} style={styles.userContainer}>
          <Image style={styles.user} source={require('../../../assets/images/boy.jpg')}/>
        </Pressable>
        <Text style={styles.text}> Hi, {user ? user.name : 'User'} </Text>
        <Image style={styles.notification} source={require('../../../assets/images/notification.png')}/>
      </View>
      </View>

      <View style={{ backgroundColor:'rgb(71, 71, 129)', borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
      <View style={{borderTopLeftRadius: 30, borderTopRightRadius: 30, alignItems: 'center',}}>
        <Image style={styles.card} source={require('../../../assets/images/image1.png')} />
      </View>
      
      <View style={{margin: 10, padding: 10, marginBottom: 70}}> 

        <View style={{flexDirection: 'row', gap: 50, marginBottom: 20, alignSelf: 'center'}}>
        <Pressable onPress={() => {router.push('../../acct')}} style={{alignItems: 'center', backgroundColor:'#fff', padding: 10, borderRadius: 10}}>
          <Image style={styles.acctCard} source={require('../../../assets/images/wallet-img.png')}/>
          <Text style={styles.acctCardText}> Account </Text>
        </Pressable>

        <Pressable onPress={() => {router.push('../../transfer')}} style={{alignItems: 'center', backgroundColor:'#fff', padding: 10, borderRadius: 10}}>
          <Image style={styles.receive} source={require('../../../assets/images/transfer-img.png')}/>
          <Text style={styles.receiveText}> Transfer </Text>
        </Pressable>

        <Pressable onPress={() => {router.push('../../withdraw')}} style={{alignItems: 'center', backgroundColor:'#fff', padding: 10, borderRadius: 10}}>
          <Image style={styles.withdraw} source={require('../../../assets/images/withdraw-img.png')}/>
          <Text style={styles.withdrawText}> Withdraw </Text>
        </Pressable>
        </View>
  
        <View style={{flexDirection: 'row', gap: 60, marginBottom: 20, alignSelf: 'center'}}>
        <Pressable onPress={() => {router.push('../../prepaid')}} style={{alignItems: 'center', backgroundColor:'#fff', padding: 10, borderRadius: 10}}>
          <Image style={styles.prepaid} source={require('../../../assets/images/prepaid-img.png')}/>
          <Text style={styles.prepaidText}> Prepaid </Text>
        </Pressable>

        <Pressable onPress={() => {router.push('../../bills')}} style={{alignItems: 'center', backgroundColor:'#fff', padding: 10, borderRadius: 10}}>
          <Image style={styles.bills} source={require('../../../assets/images/bills-img.png')}/>
          <Text style={styles.billsText}>    Bills      </Text>
        </Pressable>

        <Pressable onPress={() => {router.push('../../savings')}} style={{alignItems: 'center', backgroundColor:'#fff', padding: 10, borderRadius: 10}}>
          <Image style={styles.savings} source={require('../../../assets/images/savings-img.png')}/>
          <Text style={styles.savingsText}> Savings</Text>
        </Pressable>
        </View>

        <View style={{flexDirection: 'row', gap: 40, marginBottom: 20, alignSelf: 'center'}}>
        <Pressable onPress={() => {router.push('../../card')}} style={{alignItems: 'center', backgroundColor:'#fff', padding: 10, borderRadius: 10}}>
          <Image style={styles.cardImg} source={require('../../../assets/images/card-img.png')}/>
          <Text style={styles.cardImgText}> Card </Text>
        </Pressable>

        <Pressable onPress={() => {router.push('../../report')}} style={{alignItems: 'center', backgroundColor:'#fff', padding: 10, borderRadius: 10}}>
          <Image style={styles.report} source={require('../../../assets/images/report-img.png')}/>
          <Text style={styles.reportText}>  Report</Text>
        </Pressable>

        <Pressable onPress={() => {router.push('../(home)/beneficiary')}} style={{alignItems: 'center', backgroundColor:'#fff', padding: 10, borderRadius: 10}}>
          <Image style={styles.beneficiary} source={require('../../../assets/images/beneficiary-img.png')}/>
          <Text style={styles.beneficiaryText}> Beneficiary </Text>
        </Pressable>
        </View>
        
      </View>
      </View>

    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userContainer:{
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 20,
  },
  user:{
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
    alignSelf: 'center'
  },
  notification:{
    width:24,
    height:24,
    position:'absolute',
    right:15,
    top:30,
    cursor: 'pointer'
  },
  card:{
    width:'90%',
    height:180,
    alignSelf:'center',
    marginVertical: 50,
    borderRadius: 10,
  },
  acctCard:{
    width: 50,
    height: 50,
  },
  acctCardText:{
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  receive:{
    width: 40,
    height: 50,
  },
  receiveText:{
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  withdraw:{
    width: 50,
    height: 50,
  },
  withdrawText:{
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  prepaid:{
    width: 50,
    height: 50,
  },
  prepaidText:{
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bills:{
    width: 50,
    height: 50,
  },
  billsText:{
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  savings:{
    width: 60,
    height: 60,
  },
  savingsText:{
    marginTop: 10,
    fontSize: 17,
    fontWeight: 'bold',
  },
  cardImg:{
    width: 50,
    height: 50,
    marginRight: 30,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  cardImgText:{
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  report:{
    width: 70,
    height: 50,
  },
  reportText:{
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  beneficiary:{
    width: 80,
    height: 60,
  },
  beneficiaryText:{
    marginTop: 10,
    fontSize: 10,
    fontWeight: 'bold',
  },
}); 

export default Home;