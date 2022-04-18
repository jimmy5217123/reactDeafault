import HighChart from '../components/highChart/HighChart'

function About() {
    return (
        <div>
        <h1>About</h1>
            <HighChart title={'gdfgdfg'} series={[{ data: [45], type: 'column' }]} xAxis={['22']}></HighChart>
        </div>
    )
}

export default About;