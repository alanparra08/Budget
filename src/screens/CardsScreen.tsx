import { View, Text } from "react-native";
import { MainLayout } from "../layouts/MainLayout";
import { color, cardStyle } from "../theme/appStyle";

export default function CardsScreen() {
    return (
        <MainLayout title="Tarjetas / Fondos">
            <View style={{
                ...cardStyle.white
            }}>
                <Text style={{ fontSize: 17, fontWeight: "300", textAlign: "center" }}>En este apartado puedes registrar nuevas tarjetas, cuentas o lugares donde deseas registrar tus ingresos y/o egresos</Text>
            </View>
        </MainLayout>
    )
}