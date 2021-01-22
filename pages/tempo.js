function Tempo (props){
    console.log('passando pelo Frontend');
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático - com delay)</div>
            
        </div>
    )
}

export async function getStaticProps() {
    console.log('Passando pelo getStatic Props()');
   // console.log('Adicionando delay de 5 segundos');

   // await delay(5000);
    const dynamicDate = new Date();
    const staticDateString = dynamicDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 1  // revalida pagina statica a cada 1 segundo
    }
}

const delay = ms => new Promise(resolve => setTimeout (resolve, ms));

export default Tempo;