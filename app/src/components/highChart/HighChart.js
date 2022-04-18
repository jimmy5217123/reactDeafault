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
            max: 350,
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
          categories: props.xAxis,
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
        series: props.series,
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

    useEffect(() => {
      changeOptions((options) => {
        return {
          ...options,
          xAxis: [{
            categories: props.xAxis,
            crosshair: true,
            index: 0,
            isX: true,
            gridLineWidth: 0
          }],
          series: props.series
        }
      })
    }, [props])

    useEffect(() => {
      changeOptions((options) => {
        return {
          ...options,
          title: {
            text: props.title
          }
        }
      })
    }, [props.title])

    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options}/>
      </div>
    )
}


export default HighChart;