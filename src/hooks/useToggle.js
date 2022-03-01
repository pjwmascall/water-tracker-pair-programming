import {useEffect, useState} from 'react';

const [result, setResult] = useState(false)

const useToggle = (toggle) => {
    setResult(toggle)

    return ( result ) 
}

export default useToggle;