import {useState}  from 'react';

const getTemp = () => {
    const [TempFahren, setFahren] = useState('');
    const [TempCelsius, setCelsius]= useState('');
    
    
    function FahrenheitToCelsius() {
        setCelsius((TempFahren - 32) * 5/9);
    }

    return {TempFahren, setFahren, FahrenheitToCelsius, TempCelsius, setCelsius}
}

export default getTemp;