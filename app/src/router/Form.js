// import Input from '../components/input/input'
import React, { useState, useEffect } from 'react'
import HighChart from '../components/highChart/HighChart'
import axios from 'axios'

function Form() {
    const [title, setTitle] = useState('Title')
    const [data, changeData] = useState({
        xAxis: [],
        data: []
    })

    const handleChangeTilte = (e) => {
        setTitle(e.target.value)
    }

    useEffect(() => {
        getApi()
    }, [])

    async function getApi () {
        const { data: result } = await axios.post('api/cosmos/siteinfo/getRecentThirtyDays', {
            fId: "f001"
        })
        changeData(
            {
                xAxis: result.data.map(x => x.date),
                acp: result.data.map(x => Number(x.acp.all.toFixed(2))),
                pr: result.data.map(x => Number(x.pr.all.toFixed(2))),
                irr: result.data.map(x => Number(x.IRR.avg.toFixed(2)))
            }
        )
    }

    return (
        <div>
            <h1>Form</h1>
            <input onChange={(e) => handleChangeTilte(e)} value={title}></input>
            <HighChart title={title} data={data}></HighChart>
        </div>
    )
}


export default Form;