import { Image, Text, View } from "react-native";
import { CustomButton } from "./CustomButton";
import { icons } from "@/constants";

const OAuth = () => {

    const hadleGoogleSignIn = async() => {
        // Implement Google Sign In logic here
        alert("Google Sign In clicked");
    }

    return(
        <View>
            <View className="flex flex-row justify-center mt-4 gap-x-3 items-center">
                <View className="flex-1 h-[1px] bg-general-100"/>
                <Text className="text-lg">Or </Text>
                <View className="flex-1 h-[1px] bg-general-100"/>
            </View>

            <CustomButton title="Log in with Google" className="mt-5 w-full shadow-none" IconLeft={()=>(
                <Image source={icons.google} resizeMode="contain" className="w-5 h-5 mx-2"/>
            )} bgVariant="outline" textVariant="primary" onPress={hadleGoogleSignIn} />
        </View>
    )
}

export default OAuth;