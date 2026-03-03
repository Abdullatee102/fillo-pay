
import {Tabs }from 'expo-router'
import { View, Image, Text } from 'react-native'

const TabLayout = () => {

    const Icon = ({focused, source})=>{
        return(
            <View style={{color:focused && '#0C00DF', padding:10, borderRadius: 50}}>
              <Image style={{width:24, height:24}} source={source}/>
            </View>
            
        );

    };



    return(
        <Tabs screenOptions={{
            headerShown:false,
            tabBarInactiveTintColor: '#000',
            tabBarActiveTintColor: '#fff',
            tabBarStyle:{
                height:60,
                position:'absolute',
                backgroundColor:'#0C00DF',
            },
            tabBarIconStyle:{
               
                alignSelf:'center',
                marginTop:5,
                justifyContent:'center',
                alignItems:'center',
            }
        }}>
            <Tabs.Screen name='home' options={{
                title:'Home',
                tabBarIcon: ({focused})=> <Icon focused={focused} source={require('../../../assets/images/home.png')}/>
            }}/>
            <Tabs.Screen name='search' options={{
                title:'Search',
                tabBarIcon: ({focused})=><Icon focused={focused} source={require('../../../assets/images/search-img.png')}/>
            }}/>
            <Tabs.Screen name='message' options={{
                title:'Message',
                tabBarIcon: ({focused})=><Icon focused={focused} source={require('../../../assets/images/message-img.png')}/>
            }}/>
            <Tabs.Screen name='settings' options={{
                title:'Settings',
                tabBarIcon: ({focused})=><Icon focused={focused} source={require('../../../assets/images/settings-img.png')}/>
            }}/>

        </Tabs>
    );

};

export default TabLayout;