
import {Tabs }from 'expo-router';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TabLayout = () => {

    const Icon = ({focused, name})=>{
        return(
            <View style={{ padding:10, borderRadius: 50, backgroundColor: focused ? '#fff' : 'transparent', alignItems:'center', justifyContent:'center',}}>
              <Ionicons style={{width:24, height:24,}} size={24}  name={name}/>
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
                width: '100%',
                alignSelf:'center',
                position:'absolute',
                backgroundColor:'#0C00DF',
            },
            tabBarIconStyle:{
                borderRadius: 80,
                backgroundColor: 'transparent',
            },
            tabBarLabelStyle:{
                fontSize: 12,
                fontWeight: 'bold',
                color:'#fff',
                alignSelf:'center',
                justifyContent:'center',
                alignItems:'center',
            }
        }}>
            <Tabs.Screen name='home' options={{
                title:'Home',
                tabBarIcon: ({focused})=> <Icon focused={focused} name="home" />
            }}/>
            <Tabs.Screen name='search' options={{
                title:'Search',
                tabBarIcon: ({focused})=><Icon focused={focused} name="search" />
            }}/>
            <Tabs.Screen name='message' options={{
                title:'Message',
                tabBarIcon: ({focused})=><Icon focused={focused} name="chatbubbles" />
            }}/>
            <Tabs.Screen name='settings' options={{
                title:'Settings',
                tabBarIcon: ({focused})=><Icon focused={focused} name="settings" />
            }}/>

        </Tabs>
    );

};

export default TabLayout;