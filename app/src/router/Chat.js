import './Chat.css';
import React, { useState, useEffect } from "react"
import { DateTime } from 'luxon';

const URL = 'wss://reactbend.herokuapp.com';
// const URL = 'ws://localhost:3000';

console.log(window.location.origin)

const Chat = () => {
	const [user, setUser] = useState('湯姆')
	// const [userArr, setUserArr] = useState([])
  	const [message, setMessage] = useState([])
  	const [messages, setMessages] = useState([])
  	const [ws, setWs] = useState(new WebSocket(URL))
	const [wsConnected, setWsConnected] = useState(false)

  	const submitMessage = (usr, msg) => {
  		const message = { user: usr, message: msg }
  		ws.send(JSON.stringify(message))
  	}
	
    // const userJoin = () => {
	// 	setUserArr([...userArr, user])
	// }

	// useEffect(() => {
		
	// }, [userArr])

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
				ws.send(JSON.stringify({ time }))
				ws.onopen = () => {
					console.log('WebSocket Connected')
					setWsConnected(true)
				}
			}, 10000)
		}
		return () => clearInterval(timer)
	}, [wsConnected, ws])

  	return (
	    <div>
			<div style={{minHeight: 'calc(92vh - 40px)', maxHeight: 'calc(91vh - 50px)', overflowY: 'auto'}}>
				<ul>
				{[...messages].reverse().map((message, index) =>
					<li key={index}>
						<b>{message.user}</b>: <em>{message.message}</em>
					</li>
				)}
				</ul>
			</div>

	        <form action="" onSubmit={e => {
				e.preventDefault()
	            submitMessage(user, message)
	            setMessage([])
	          }}
	        >
			<div style={{margin: '7px 0px'}}>
				<label htmlFor="user">
					在叫什麼 :
					<input type="text" id="user" placeholder="User" value={user} onChange={e => setUser(e.target.value)}/>
					{/* <button style={{margin: '0px 5px'}} type='button' onClick={() => userJoin()}>加入</button> */}
					{/* <button>離開</button> */}
				</label>
			</div>
			  <div style={{ display: 'flex'}}>
				<input type="text" placeholder={'Type a message ...'} value={message} onChange={e => setMessage(e.target.value)} style={{width: '93%', height: '40px'}}/>
				<button disabled={!wsConnected}>Enter to Send</button>
			  </div>
	        </form>
	    </div>
  	)
}

export default Chat;