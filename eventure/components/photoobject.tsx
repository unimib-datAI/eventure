import { View, Text ,Image, ImageSourcePropType} from 'react-native'
import React from 'react'

interface Photoobject {
  title: string;
  text: string;
  image: ImageSourcePropType;
}

const Photoobject = ({title, text,image} :Photoobject) => {

  return (
    <View className='border-[0.5px] rounded-2xl border-gray p-3 flex flex-row items-center '>
    <Image source={image} className='mr-4 h-[73px] w-[73px] rounded-[10px]' resizeMode='cover' />
    <View className='flex flex-col'>
  <Text className='text-darkforest text-sm font-medium max-w-[90%]'>{title}</Text>
    <Text className='text-darkforest text-xs font-light max-w-[80%]'>{text}</Text>
    </View>
</View>
  )
}

export default Photoobject

