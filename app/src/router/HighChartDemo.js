// import Input from '../components/input/input'
import React, { useState, useEffect, useCallback } from 'react'
import HighChart from '../components/highChart/HighChart'
import axios from 'axios'

function Form() {
    const [title, setTitle] = useState('Title')
    const [series, changeSeries] = useState({ series: [] })
    const [xAxis, changeXAxis] = useState({ xAxis: [] })

    const handleChangeTilte = (e) => {
        setTitle(e.target.value)
    }
    const getRecentThirtyDays = useCallback (async () => {  // 使外部func 可使用在 useEffect
        const { data: result } = await axios.get('api/getRecentThirtyDays')
        recentThirtyDays(result)
    }, [])

    const recentThirtyDays = (result) => {
        changeXAxis(result.data.map(x => x.date))
        changeSeries(
            [
                {
                    data: result.data.map(x => Number(x.acp.all.toFixed(2))),
                    type: 'column',
                    name: 'acp',
                    yAxis: 0
                },
                {
                    data: result.data.map(x => Number(x.pr.all.toFixed(2) * 100)),
                    type: 'line',
                    name: 'pr',
                    yAxis: 2
                },
                {
                    data: result.data.map(x => Number(x.IRR.avg.toFixed(2))),
                    type: 'line',
                    name: 'irr',
                    yAxis: 1
                }
            ]
        )
    }

    useEffect(() => {
        getRecentThirtyDays()
    }, [getRecentThirtyDays])

    return (
        <div>
            <h2>HighChartDemo</h2>
            <input onChange={(e) => handleChangeTilte(e)} value={title}></input>
            <HighChart title={title} series={series} xAxis={xAxis}></HighChart>
            <HighChart title={title} series={[{ data: [45, 66], type: 'column' }]} xAxis={['22', '77']}></HighChart>
        </div>
    )
}


export default Form;