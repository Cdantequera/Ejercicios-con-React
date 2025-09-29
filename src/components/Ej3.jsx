
import { useState } from 'react';

function Ej3() {

    const mensajeBase = 'Hola Amigo';

    const [mensajeAdicional, setMensajeAdicional] = useState('');

    const handleClick = () => {
    setMensajeAdicional('(from changed state)');
    };


    return (
    <div>

        <h1>{mensajeBase}{mensajeAdicional}</h1>


        <button onClick={handleClick}>ClicMe</button>
    </div>
    );
}

export default Ej3;