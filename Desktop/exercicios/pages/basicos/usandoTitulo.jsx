import Titulo from  '../../components/Titulo'

export default function usandoTitulo() {
    return (
        <div>
            <Titulo 
                principal="Página de Cadastro"
                secundario="Incluir, alterar e excluir coisas!"
            />
            <Titulo
                principal="Pagina de Login"
                secundario="Informe seu e-mail e senha"
                pequeno={true}
            />
               <Titulo
                principal="Pagina de Login"
                secundario="Informe seu e-mail e senha"
                pequeno
            />
        </div>
    )
}