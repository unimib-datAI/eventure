import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import tourStopsData from '@/app/utils/tourStopData'
import TourStops from '@/components/tourStops'
import GreenLine from '@/components/greenLine'
import { Scroll } from 'lucide-react-native'

const bestDestination = () => {
  return (
    <ScrollView>
    <View className=' flex-1 bg-white px-4 pt-4 pb-4'>
    <View className='flex flex-column gap-3'>
{tourStopsData.map((stop, index) => (
  <React.Fragment key={index}>

    <TourStops stop={stop} index={index} />
  </React.Fragment>
))}

    </View>
    </View>
    </ScrollView>
  )
}

export default bestDestination