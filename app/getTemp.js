import {useState}  from 'react';

const getTemp = () => {
    const [TempFahren, setFahren] = useState(0);
    const [TempCelsius, setCelsius]= useState(0);
    
    
    function FahrenheitToCelsius() {
        var Celsius=((TempFahren - 32) * 5/9);
        setCelsius(Celsius);
        console.log(TempCelsius);
    }

    return {TempFahren, setFahren, FahrenheitToCelsius, TempCelsius, setCelsius}
}

export default getTemp;