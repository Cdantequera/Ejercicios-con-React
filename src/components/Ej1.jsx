import { useState } from 'react';


function Ej1({ texto }) {


    const [msj] = useState('');

return (
    <div>
    
    <h1>Hola {texto}🌎{msj}</h1>

    </div>
    );
}

export default Ej1;