import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as BMKSafeAeaView } from "react-native-safe-area-context";
const SafeAreaView = styled(BMKSafeAeaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-7xl font-sans-extrabold text-blue-800">
        Home
      </Text>

      <Link href={{pathname: "/bills/[id]", params: { id: "current" } }} className="rounded-lg bg-blue-500">
        <Text className="text-lg text-teal-500">View Current Bill Details</Text>
      </Link>
      <Link href={{ pathname: "/bills/[id]", params: { id: "Gas" } }} className="rounded-lg bg-blue-500">
        <Text className="text-lg text-teal-500">View Gas Bill Details</Text>
      </Link>
    </SafeAreaView>
  );
}