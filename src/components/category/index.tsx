import { Text, Pressable, PressableProps } from "react-native"

import { s } from "./styles"
import { categoriesIcons } from "@/utils/categories-icons"
import { colors } from "@/styles/theme"

type Props = PressableProps & {
    name: string
    iconId: string
    IsSelected?: boolean
}

export function Category({ name, iconId, IsSelected = false, ...rest}: Props) {
    const Icon = categoriesIcons[iconId]
    return (
        <Pressable style={[s.container, IsSelected && s.containerSelected]} {...rest}>
            <Icon size={16} color={colors.gray[IsSelected ? 100 : 400]}></Icon>
            <Text style={[s.name, {color: colors.gray[IsSelected ? 100 : 400]}]}>{name}</Text>           
        </Pressable>
    )
}