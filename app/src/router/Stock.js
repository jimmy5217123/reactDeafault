import axios from "axios";
import { useState, useEffect } from "react";
import Table from "../components/table/Table"

function Home() {
    const [stockData, updateStockData] = useState([])
    const [PEratio, changePEratio] = useState(0)
    const [stockDataTable, updateStockTable] = useState([])

    const handleChangeInput = (e) => {
        changePEratio(e.target.value)
    }

    const search = async () => {
        const newArray = stockData.filter(x => Number(x.PEratio) < PEratio && Number(x.PEratio) > 0)
        updateStockTable(newArray)
    }

    useEffect(() => {
        async function fetchData() {
            const {data: stock} = await axios.get('openapi.twse.com.tw/v1/exchangeReport/BWIBBU_ALL')
            const {data: price} = await axios.get('openapi.twse.com.tw/v1/exchangeReport/STOCK_DAY_ALL')
            rebuild(stock, price)
        }
        function rebuild(stock, price) {
            price.forEach(x => {
                delete x.TradeValue
                delete x.TradeVolume
                delete x.Transaction
                delete x.LowestPrice
                delete x.HighestPrice
                delete x.Change
                delete x.OpeningPrice
            })
            stock.forEach(x => {
                Object.assign(x, price.find(y => y.Code === x.Code))
            })
            updateStockData(stock)
            updateStockTable(stock)
        }
        fetchData()
    }, [])
    

    return (
        <div>
            <h2>Stock</h2>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <p>本益比小於:</p><input name="PEratio" type='number' style={{width: '80px'}} value={PEratio} onChange={(e) => handleChangeInput(e)}></input>
                <button onClick={search}>搜尋</button>
            </div>
            <Table header={['股票代號', '名稱', '本益比', '殖利率', '股價淨值比', '收盤價']} data={stockDataTable}></Table>
        </div>
    )
}

export default Home;