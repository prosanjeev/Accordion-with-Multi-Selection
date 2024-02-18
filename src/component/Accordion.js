import { useState } from 'react'
import './Accordion.css'
import data from './data'


const Accordion = () => {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([])

    const singleHandleClick = (currentId) => {
        setSelected(currentId === selected ? null : currentId)
    }

    function handleMultiSelection(currentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(currentId)

        console.log(findIndexOfCurrentId)
        if (findIndexOfCurrentId === -1) cpyMultiple.push(currentId)
        else cpyMultiple.splice(findIndexOfCurrentId, 1)

        setMultiple(cpyMultiple)
    }

    console.log(selected, multiple)
    return (
        <div className='wrapper'>
            <div className='accordion'>
                <button onClick={() => setEnableMultiSelection(!enableMultiSelection)} >Enable Multi Selection</button>
                {data.map((dataitem) => (
                    <div key={dataitem.id} className='dataitem'>

                        <div className='question'
                            onClick={
                                enableMultiSelection
                                    ? () => handleMultiSelection(dataitem.id)
                                    : () => singleHandleClick(dataitem.id)}
                        >
                            {dataitem.question}
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection ?
                                multiple.indexOf(dataitem.id) !== -1 &&
                                <div className='answer'> {dataitem.answer} </div> :
                                selected === dataitem.id &&
                                <div className='answer'> {dataitem.answer} </div>

                        }

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Accordion