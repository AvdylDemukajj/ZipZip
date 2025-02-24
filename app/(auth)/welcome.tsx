import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import { onbording } from "@/constants";

const Onbording = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState();

    return (
        <SafeAreaView className="flex h-full items-center justify-between bg-white">
            <TouchableOpacity
                onPress={() => {
                    router.replace('/(auth)/sign-up');
                }}
                className="w-full flex justify-end item-end p-5"
            >
                <Text className="text-black text-md font-JakartaBold">Skip</Text>
            </TouchableOpacity>

            <Swiper
                ref={swiperRef}
                loop={false}
                dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />}
                activeDot={<View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />}
                onIndexChanged={(index:any) => setActiveIndex(index)}
            > 
            {onbording.map((item) => (
                <View key={item.id} className="flex flex-col items-center justify-center p-20">
                    <Text className="text-xl font-JakartaBold">{item.title}</Text>
                    <Text className="text-gray-500 text-md font-JakartaLight">{item.description}</Text>
                </View>
            ))}
            </Swiper>
        </SafeAreaView>
    );
};

export default Onbording;