import react from "react";
import { TouchableOpacity, Text } from "react-native";

import funcaoEstilosPadrao from './estilos';

export default function Botao({pequeno = false, invertido = false, valor, action, estilos}) {
    const estilosPadrao = funcaoEstilosPadrao(pequeno, invertido);

    return <>
    <TouchableOpacity onPress={action} style={[estilosPadrao.botao, estilos]}>
        <Text style={estilosPadrao.valor}>{valor}</Text>
    </TouchableOpacity>
    </>
}