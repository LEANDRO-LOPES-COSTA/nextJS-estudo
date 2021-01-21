import { useState } from "react"

function Home () {
    return (
        <div> 
            <h4> pagina inicial </h4>
            <Contador/>
            <div>Teste</div>

            <div> branch teste </div>
            
        </div>

    )
}

function Contador () {
    const [contador, setContador] = useState(1);

    function adicionaContador (){
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
    <button onClick={adicionaContador}>Adiciona</button>
        </div>
    )
}

export default Home