import Link from 'next/link';

function Home () {
    return (
        <div> 
            <h4> Home </h4> 
            <Link>          
                <a href="/sobre">Acessar página Sobre</a>  
            </Link>           
        </div>
    )
}


export default Home