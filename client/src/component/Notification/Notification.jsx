import React from 'react';
import './Notification.scss';

const Notification = ({ messages, type }) => {
 
  return (
    <div className="notification">
        <div className={type}>
            {messages.map(message => (
                <p key={message}>{message}</p>
            ))}
        </div>
    </div>
  )
}

export default Notification