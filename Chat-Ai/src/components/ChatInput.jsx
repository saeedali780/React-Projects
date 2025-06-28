import React from 'react';
import styles from './ChatInput.module.css';

const ChatInput = ({ value, onChange, onSend, loading }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className={styles.inputArea}>
      <textarea
        className={styles.input}
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        rows={1}
        disabled={loading}
      />
      <button
        className={styles.sendBtn}
        onClick={onSend}
        disabled={loading || !value.trim()}
      >
        {loading ? '...' : 'Send'}
      </button>
    </div>
  );
};

export default ChatInput; 