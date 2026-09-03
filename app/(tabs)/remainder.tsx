import React from 'react';
import { Text } from 'react-native';

import { styled } from "nativewind";
import { SafeAreaView as BMKSafeAeaView } from "react-native-safe-area-context";

const SafeAreaView = styled(BMKSafeAeaView);


const Remainder = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>Remainder</Text>
    </SafeAreaView>
  )
}

export default Remainder;