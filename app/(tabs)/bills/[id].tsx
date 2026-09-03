import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

import { styled } from "nativewind";
import { SafeAreaView as BMKSafeAeaView } from "react-native-safe-area-context";

const SafeAreaView = styled(BMKSafeAeaView);


const BillDetails = () => {
    const {id} = useLocalSearchParams<{ id: string }>(); // Replace with actual bill ID or fetch from route params
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>Bill Details: {id}</Text>
    </SafeAreaView>
  )
}

export default BillDetails;
