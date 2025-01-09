import React from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native"
import { color, flexStyle } from "../theme/appStyle"

interface Props {
    label: string;
    options: [string, string];
}

const AP_Switch = (props: Props) => {
    const [isCheck, setIsCheck] = React.useState<boolean>(true);

    const containerStyle = {
        ...css.container,
        borderColor: isCheck ? "#a8cbdf" : "#f5c6cb",
        // backgroundColor: isCheck ? "#e0ecf3" : "#fcedee"

        // borderColor: color.inputBorder
    }

    const switchTextStyle = {
        fontSize: 17,
        marginVertical: 10,
        color: isCheck ? color.primary : "#ea8087"

        //color: color.inputText
    }

    return (
        <>
            <View style={{ marginTop: 15 }}>
                <Text style={{ fontSize: 16, marginBottom: 10 }}>{props.label}</Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setIsCheck(!isCheck)}
                    style={containerStyle}
                >
                    <Text style={switchTextStyle}>
                        {isCheck ? props.options[0] : props.options[1]}
                    </Text>
                    <Switch
                        trackColor={{ true: "#95c0d8", false: "#f1b0b7" }}
                        thumbColor={isCheck ? color.primary : "#ea8087" }
                        onValueChange={() => setIsCheck(!isCheck)}
                        value={isCheck}
                        style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}

const css = StyleSheet.create({
    container: {
        ...flexStyle.row_between,
        // borderWidth: 0.4,
        borderWidth: 0.9,
        paddingVertical: 3,
        paddingHorizontal: 15,
        borderRadius: 4
    }
})

export default AP_Switch

