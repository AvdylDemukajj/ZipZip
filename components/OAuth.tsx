import { Text, View } from "react-native";

const OAuth = () => (
     <View>
        <View className="flex flex-row justify-center mt-4 gap-x-3 items-center">
            <View className="flex-1 h-[1px] bg-general-100"/>
            <Text className="text-lg">Or </Text>
            <View className="flex-1 h-[1px] bg-general-100"/>
        </View>
     </View>
)

export default OAuth;