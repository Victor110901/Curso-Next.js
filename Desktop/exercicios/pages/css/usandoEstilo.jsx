import Estilo from "../../components/Estilo";

export default function usandoEstilo() {
    return (
        <h1>
            <Estilo numero={3} color="#000" />
            <Estilo numero={-11} color="#FFF" direita/>
        </h1>
    )
}