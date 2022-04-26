import './Chat.css';
import React, { useState, useEffect } from "react"
import { DateTime } from 'luxon';

const URL = 'wss://reactbend.herokuapp.com';
// const URL = 'ws://localhost:3000';

const Chat = () => {
	const [user, setUser] = useState('qqq')
  	const [message, setMessage] = useState([])
  	const [messages, setMessages] = useState([])
  	const [ws, setWs] = useState(new WebSocket(URL))
	const [wsConnected, setWsConnected] = useState(false)
	const [nowTime, upDatenowTime] = useState(DateTime.local().toFormat('yyyy-MM-dd HH:mm:ss'))

  	const submitMessage = (usr, msg) => {
  		const message = { user: usr, message: msg }
  		ws.send(JSON.stringify(message))
  	}
    
  	useEffect(() => {
	    ws.onopen = () => {
	      console.log('WebSocket Connected')
		  setWsConnected(true)
	    }

	    ws.onmessage = (event) => {
	      const message = JSON.parse(event.data)
	      setMessages([message, ...messages])
	    }

	    return () => {
	      ws.onclose = () => {
	        console.log('WebSocket Disconnected')
	        setWs(new WebSocket(URL))
	      }
	    }
  	}, [ws.onmessage, ws.onopen, ws.onclose, messages, ws])

	useEffect(() => {
		let timer
		if (wsConnected) {
			timer = setInterval(() => {
				const time = DateTime.local().toFormat('yyyy-MM-dd HH:mm:ss')
				upDatenowTime(time)
				ws.send(JSON.stringify({ time }))
			}, 100000)
		}
		return () => clearInterval(timer)
	}, [wsConnected, ws])

  	return (
	    <div>
	        <label htmlFor="user">
	          Name :
	          <input
	            type="text"
	            id="user"
	            placeholder="User"
	            value={user}
	            onChange={e => setUser(e.target.value)}
	          />
	        </label>
	        <ul>
	          {[...messages].reverse().map((message, index) =>
	            <li key={index}>
	              <b>{message.user}</b>: <em>{message.message}</em> <span>{message.time}</span>
	            </li>
	          )}
	        </ul>

	        <form
	          action=""
	          onSubmit={e => {
	            e.preventDefault()
	            submitMessage(user, message)
	            setMessage([])
	          }}
	        >
	          <input
	            type="text"
	            placeholder={'Type a message ...'}
	            value={message}
	            onChange={e => setMessage(e.target.value)}
	          />
	          <input type="submit" value={'Send'} disabled={!wsConnected}/>
	        </form>
	    </div>
  	)
}

export default Chat;