import './Chat.css';
import React, { useState, useEffect } from "react"

const URL = 'ws://reactbend.herokuapp.com:3000';

const Chat =() => {
	const [user, setUser] = useState('qqq')
  	const [message, setMessage] = useState([])
  	const [messages, setMessages] = useState([])
  	const [ws, setWs] = useState(new WebSocket(URL))

  	const submitMessage = (usr, msg) => {
  		const message = { user: usr, message: msg }
  		ws.send(JSON.stringify(message))
  	}
    
  	useEffect(() => {
	    ws.onopen = () => {
	      console.log('WebSocket Connected')
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
	              <b>{message.user}</b>: <em>{message.message}</em>
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
	          <input type="submit" value={'Send'} />
	        </form>
	    </div>
  	)
}

export default Chat;