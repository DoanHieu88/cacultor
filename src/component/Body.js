import React, {useState} from 'react'
import Header from './Header'
import '../style/index.css'
export default function Body() {
    const [result, setResult] = useState('')
    const handleClick = (e) =>{
        setResult(result.concat(e.target.value))
    }
    const clear = () =>{
        setResult('');
    }

    const  deleteNumber = () =>{ 
        setResult(result.slice(0,-1))
    }

    const caculate = () =>{
        try{
            if(eval(result.length) > 16){
                setResult('E')
            }else{
                setResult(eval(result).toString())
            }
        }catch(err){
            setResult('Error')
        }
    }
    return (
      <div className='container'>
          <Header result={result}/>
          <div className="keypad">
              <button  onClick={clear} className='control' id='clear'>Clear</button>
              <button  onClick={deleteNumber} className='control'>C</button>
              <button value='/' onClick={handleClick} className='control'>&divide;</button>
              <button value='7' onClick={handleClick}>7</button>
              <button value='8' onClick={handleClick}>8</button>
              <button value='9' onClick={handleClick}>9</button>
              <button value='*' onClick={handleClick} className='control'>&times;</button>
              <button value='4' onClick={handleClick}>4</button>
              <button value='5' onClick={handleClick}>5</button>
              <button value='6' onClick={handleClick}>6</button>
              <button value='-' onClick={handleClick} className='control'>&ndash;</button>
              <button value='1' onClick={handleClick}>1</button>
              <button value='2' onClick={handleClick}>2</button>
              <button value='3' onClick={handleClick}>3</button>
              <button value='+' onClick={handleClick} className='control'>+</button>
              <button value='0' onClick={handleClick}>0</button>
              <button value='.' onClick={handleClick} className='control'>.</button>
              <button value='=' onClick={caculate} className='control' id='result'>=</button>

          </div>
      </div>
    )
}
