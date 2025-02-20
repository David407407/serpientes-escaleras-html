import React, { useEffect, useRef, useState } from 'react'
import '../styles/dado.css'
import { useJuegoStore } from '../store/juegoStore'

const Dado = () => {
    const { dado, setDado, animationCard, setAnimationCard } = useJuegoStore( state => state )
    const dadoRef = useRef(null)
    const rollDice = useRef(null)
    const [numDado, setNumDado] = useState(null)
    
    useEffect(() => {
        setDado({})
    }, [])

    useEffect(() => {
        setDado({
            cara: numDado
        })
        console.log(numDado)
        console.log(dado)

        for (var i = 1; i <= 6; i++) {
            dadoRef.current?.classList.remove('show-' + i);
            if (numDado === i) {
                console.log(i)
                dadoRef.current?.classList.add('show-' + i);
            }
        }
        // setTimeout(girarDado(), 1000);
        console.log(animationCard)
    }, [numDado])

    function girarDado() {
        const numRandom = Math.floor((Math.random() * 6) + 1)

        if(numRandom === numDado) {
            girarDado()
        } else {
            setNumDado(numRandom);
        }
        
        setTimeout(() => {
            setAnimationCard(!animationCard)
        }, 1000)
    }
  return (
    <div className="game">
        <div className='w-[100px] mx-auto min-h-[150px]'>
            <div className="container">
                <div ref={dadoRef} id='dice1' className="dice dice-one">
                    <div id="dice-one-side-one" className='side one'>
                        <div className="dot one-1"></div>
                    </div>
                    <div id="dice-one-side-two" className='side two'>
                        <div className="dot two-1"></div>
                        <div className="dot two-2"></div>
                    </div>
                    <div id="dice-one-side-three" className='side three'>
                        <div className="dot three-1"></div>
                        <div className="dot three-2"></div>
                        <div className="dot three-3"></div>
                    </div>
                    <div id="dice-one-side-four" className='side four'>
                        <div className="dot four-1"></div>
                        <div className="dot four-2"></div>
                        <div className="dot four-3"></div>
                        <div className="dot four-4"></div>
                    </div>
                    <div id="dice-one-side-five" className='side five'>
                        <div className="dot five-1"></div>
                        <div className="dot five-2"></div>
                        <div className="dot five-3"></div>
                        <div className="dot five-4"></div>
                        <div className="dot five-5"></div>
                    </div>
                    <div id="dice-one-side-six" className='side six'>
                        <div className="dot six-1"></div>
                        <div className="dot six-2"></div>
                        <div className="dot six-3"></div>
                        <div className="dot six-4"></div>
                        <div className="dot six-5"></div>
                        <div className="dot six-6"></div>
                    </div>
                </div>
            </div>
        </div>
       <div 
            ref={rollDice} 
            className='roll-button w-32 mx-auto'
            onClick={() => {
                console.log(rollDice.current)
                girarDado()
            }}
        >
            <button className="cursor-pointer bg-[#FF4600] px-2 py-2 lg:px-5 lg:py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300 w-full outfit">
                <p>Girar Dado</p>
            </button>
        </div>
      </div> 

  )
}

export default Dado