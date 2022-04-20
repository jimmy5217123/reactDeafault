import './table.css'
function Table(props) {
    return (
        <table>
            <thead>
                <tr>
                    {props.header.map((x, idx) => <th key={idx}>{x}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.data.map((x, idx) => <tr key={idx}>
                    {Object.values(x).map((y, yidx) => <td key={yidx}>{y ? y : '-'}</td>)}
                </tr>)}
            </tbody>
        </table>
    )
}

export default Table;