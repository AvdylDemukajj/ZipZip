import { Text, TouchableOpacity } from 'react-native'
import { ButtonProps } from "@/types/type"


const getTextVariantStyle = (variant: ButtonProps['textVariant']) => {
    switch(variant){
        case "primary":
            return "bg-black"
        case "secondary":
            return "bg-gray-100"
        case "success":
            return "bg-green-100"
        case "danger":
            return "bg-red-100"
        default:
            return "bg-white "
    }
 
}

export const CustomButton = ({
    onPress, 
    title, 
    bgVariant="primary", 
    textVariant="default", 
    IconLeft, 
    IconRight, 
    className, 
    ...props}: ButtonProps) => <TouchableOpacity onPress={onPress} className={`w-full rounded-full flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}` }>
        {IconLeft && <IconLeft />}
       
        {IconRight && <IconRight />}
    </TouchableOpacity>
  


