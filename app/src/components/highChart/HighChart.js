import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useState, useEffect } from 'react'

const HighChart = (props) => {
    const [options, changeOptions] = useState({
        chart: {
          height: 250,
          backgroundColor: 'transparent',
          alignTicks: false
        },
        title: {
            text: props.title
        },
        tooltip: {
          shared: true
        },
        credits: {
          enabled: false
        },
        legend: {
          align: 'right',
          layout: 'vertical',
          // floating: true,
          verticalAlign: 'top',
          x: 0,
          y: 30
        },
        yAxis: [
          {
            index: 0,
            labels: {
              enabled: false
            },
            opposite: false,
            gridLineWidth: 0
          },
          {
            index: 1,
            labels: {
              enabled: false
            },
            title: '',
            min: 0,
            opposite: false,
            gridLineWidth: 0
          },
          {
            index: 2,
            labels: {
              enabled: false
            },
            title: '',
            max: 5,
            min: 0,
            opposite: false,
            gridLineWidth: 0
          },
          {
            index: 3,
            labels: {
              enabled: false
            },
            max: 80,
            min: 0,
            title: '',
            opposite: false,
            gridLineWidth: 0
          }
        ],
        xAxis: [{
          categories: [],
          crosshair: true,
          index: 0,
          isX: true,
          gridLineWidth: 0
        }],
        plotOptions: {
          series: {
            dataLabels: {
              enabled: true
            }
          },
          column: {
            dataLabels: {
              enabled: true
            }
          }
        },
        series: [
          {
            data: [],
            type: 'column',
            name: '',
            yAxis: 0
          },
          {
            data: [],
            type: 'line',
            name: '',
            yAxis: 1
          },
          {
            data: [],
            type: 'line',
            name: '',
            yAxis: 2
          },
          {
            data: [],
            type: 'line',
            name: '',
            yAxis: 3
          }
        ],
        lang: {
          noData: '現在沒有資料'
        },
        noData: {
          style: {
            fontWeight: 'bold',
            fontSize: '15px',
            color: '#303030'
          }
        },
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
                y: 0
              }
            }
          }]
        }
      })
    const [count, setCount] = useState(0)


    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    useEffect(() => {
      changeOptions((prevOptions) => {
        return {
          ...prevOptions,
          xAxis: [{
            categories: props.data.xAxis,
            crosshair: true,
            index: 0,
            isX: true,
            gridLineWidth: 0
          }],
          series: [
            {
              data: props.data.acp,
              type: 'column',
              name: 'acp',
              yAxis: 0
            },
            {
              data: props.data.pr,
              type: 'line',
              name: 'pr',
              yAxis: 2
            },
            {
              data: props.data.irr,
              type: 'line',
              name: 'irr',
              yAxis: 1
            },
          ]
        }
      })
    }, [props.data])

    useEffect(() => {
      changeOptions((prevOptions) => {
        return {
          ...prevOptions,
          title: {
            text: props.title
          }
        }
      })
    }, [props.title])

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options}/>
            <button onClick={() => setCount(count + 1)}>aaaa</button>
        </div>
    )
}


export default HighChart;