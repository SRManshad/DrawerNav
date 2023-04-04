// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  

  return (
    <SafeAreaView style={{flex: 1}}>
      
    <View style = {styles.profileContainer}>
        <View style = {styles.profileIcon}>
       
       </View>
       
        <View style={styles.infoView}>
            <Text>Shafeeque Manshad</Text>
            <Text>Gold Member</Text>
            <Text>Wallet Balance : $4300.00</Text>

        </View>
    </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Visit Us"
         
        />
        <View style={styles.customItem}>
          <Text
           >
            Rate Us
          </Text>
          <Image
            source={{uri: BASE_PATH + 'star_filled.png'}}
            style={styles.iconStyle}
          />
        </View>
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey'
        }}>
        www.aboutreact.com
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileContainer:{
    height : '25%',
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
  },
  profileIcon:{
    height:75,
    width:75,
    backgroundColor:'#bbbbbb', 
    borderRadius:50,
    marginTop:10,
    marginLeft:10
  },
  infoView:{
    marginLeft:10,
    marginRight:10,
    marginEnd:10
  },
  profileImage:{
    heigh:50,
    width:50
  }

});

export default CustomSidebarMenu;