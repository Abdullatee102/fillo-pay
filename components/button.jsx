import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';



const Button = ({text, style, icon, textColor, onPress})=>{
    return(
        <TouchableOpacity onPress={onPress} style={{flexDirection: 'row', gap: 10, backgroundColor:'#fff', padding: 15, borderRadius: 30, ...style}}>
            {icon && <Ionicons name={icon} size={20} color={textColor} />}
            <Text style={{color: textColor, fontSize: 16, fontWeight: 'bold'}}>{text}</Text>
        </TouchableOpacity>

    );
}


export default Button;