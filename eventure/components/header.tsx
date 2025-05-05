import { View, Text,Image } from 'react-native'
import React from 'react'

const Header = () => {
    const iconLogin = require("@/assets/images/IconLogin.png");
  const iconLeaf = require("@/assets/images/leaf.png");
  const iconRing = require("@/assets/images/ring.png");
  return (
    <View>
     <View className="flex flex-row items-center justify-between">
               <View className="flex flex-row items-center">
                 <Image source={iconLogin} className="mr-2 h-8 w-8" />
                 <Text className="text-center font-regular text-base text-forest">
                   Aurora
                 </Text>
               </View>
               <View className="flex flex-row items-center">
                 <Image source={iconLeaf} className="h-8 w-8" />
                 <Text className="text-center font-light text-base text-forest">
                   20pt
                 </Text>
                 <Image source={iconRing} className="h-8 w-8 ml-3" />
               </View>
             </View>
    </View>
  )
}

export default Header