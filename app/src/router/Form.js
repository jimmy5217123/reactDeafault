// import Input from '../components/input/input'
import React, { useState, useEffect } from 'react'
import HighChart from '../components/highChart/HighChart'
import axios from 'axios'

function Form() {
    const [textArr, changeTextArr] = useState(['sadadd', 'gffgfgf', '5452452'])
    const [xAxis, changexAxis] = useState(['1'])
    const [data, changeData] = useState([2])

    const handleInputChange = (e, idx) => {
        let newData = [...textArr]
        newData[idx] = e.target.value
        changeTextArr(newData)
    }
    const getValue = () => {
        console.log(textArr)
    }

    useEffect(() => {
        getApi()
    })

    async function getApi () {
        const { data: result } = await axios.post('api/cosmos/siteinfo/getRecentThirtyDays', {
            fId: "f001"
        })
        console.log(result)
    }
    return (
        <div>
            <h1>Form</h1>
            {textArr.map((x, idx) => <input key={idx} value={x} onChange={(e) => handleInputChange(e, idx)}></input>)}
            <button onClick={getValue}>get value</button>
            <HighChart title={'test30days'} data={data} xAxis={xAxis}></HighChart>
        </div>
    )
}


export default Form;