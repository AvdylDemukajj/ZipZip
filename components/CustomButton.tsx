import { Text, TouchableOpacity } from 'react-native'

export const CustomButton = ({
    onPress, 
    title, 
    bgVariant="primary", 
    textVariant="default", 
    IconLeft, 
    IconRight, 
    className, 
    ...props}) => <TouchableOpacity onPress={onPress}>
        {IconLeft && <IconLeft />}
        <Text></Text>
        {IconRight && <IconRight />}
    </TouchableOpacity>
  


