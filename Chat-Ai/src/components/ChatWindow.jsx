import React, { useRef, useEffect } from 'react';
import Message from './Message';
import styles from './ChatWindow.module.css';

const ChatWindow = ({ messages, loading }) => {
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  return (
    <div className={styles.chatArea}>
      {messages.length === 0 && (
        <div className={styles.placeholder}>Start the conversation...</div>
      )}
      {messages.map((msg, idx) => (
        <Message key={idx} role={msg.role} text={msg.text} />
      ))}
      {loading && (
        <Message role="ai" text="Thinking..." loading />
      )}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatWindow; 