"use client";
import React, { useState } from 'react';
import { SiChatbot } from "react-icons/si";
import styles from './Chatbot.module.css';
import { FaRegUser } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";
import { FaRegWindowClose } from "react-icons/fa";






const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleChat = () => setIsOpen(!isOpen);

    const sendMessage = async () => {
        if (userInput.trim()) {
            setMessages((prev) => [...prev, { sender: 'user', text: userInput }]);
    
            try {
                const response = await fetch('https://ai-portfolio-chatbot.onrender.com/chatbot', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ question: userInput }),
                });
    
                if (response.ok) {
                    const data = await response.json();
                    setMessages((prev) => [...prev, { sender: 'bot', text: data.response }]);
                } else {
                    console.error('Error from backend:', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            }
    
           
        }
        setUserInput('');
    };
    
    return (
        <div>
            <button className={styles.toggleButton} onClick={handleToggleChat}>
                {isOpen ?    <FaRegWindowClose/> : <SiChatbot />} 
            </button>

            {isOpen && (
                <div className={styles.chatContainer}>
                    <div className={styles.chatHeader}>Curious? Just Ask My AI Chatbot!</div>
                    
                    <div className= {styles.chatBox}>
                    <div style={{ flex: 1, overflowY: 'auto' }}>
                    {messages.map((msg, index) => (
    <div
        key={index}
        className={`${styles.messageContainer} ${
            msg.sender === 'user' ? styles.userContainer : styles.botContainer
        }`}
    >
        
        <div className={`${styles.iconContainer} ${msg.sender === 'user' ? styles.userIcon : styles.botIcon}`}>
            {msg.sender === 'user' ? (
                <FaRegUser className={styles.icon} /> 
            ) : (
                <FaRobot className={styles.icon} /> 
            )}
        </div>
        
        
        <div className={styles.messageBubble}>
            {msg.text}
        </div>
    </div>
))}
                    </div>

                    <div className={styles.inputContainer}>
                        
                        <input 
                            type="text" 
                            className={styles.input}
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Type your message..." 
                        />
                       
                        
                        <button className={styles.sendButton} onClick={sendMessage}>
                        <FaPaperPlane />
                        </button>
                      
                        
                        
                    </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
