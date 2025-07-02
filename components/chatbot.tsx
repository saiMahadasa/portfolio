"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBrain, 
  FaRegUser, 
  FaRobot, 
  FaPaperPlane, 
  FaRegWindowClose,
  FaRegSmile,
  FaRegLightbulb,
  FaRegComments,
  FaRegQuestionCircle,
  FaRegClock,
  FaRegCheckCircle,
  FaRegTimesCircle,
  FaComments
} from "react-icons/fa";
import { 
  SiOpenai, 
  SiChatbot
} from "react-icons/si";
import { BsLightningCharge, BsStars } from "react-icons/bs";
import styles from './Chatbot.module.css';

interface Message {
  sender: string;
  text: string;
  timestamp: Date;
  id: string;
}

const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isConnected, setIsConnected] = useState(true);
    const [showLabel, setShowLabel] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleToggleChat = () => {
        setIsOpen(!isOpen);
        setIsMinimized(false);
    };

    const handleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    const sendMessage = async () => {
        if (userInput.trim() && !isTyping) {
            const userMessage: Message = {
                sender: 'user',
                text: userInput,
                timestamp: new Date(),
                id: Date.now().toString()
            };
            
            setMessages(prev => [...prev, userMessage]);
            setUserInput('');
            setIsTyping(true);

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
                    const botMessage: Message = {
                        sender: 'bot',
                        text: data.response,
                        timestamp: new Date(),
                        id: (Date.now() + 1).toString()
                    };
                    setMessages(prev => [...prev, botMessage]);
                } else {
                    throw new Error('Failed to get response');
                }
            } catch (error) {
                const errorMessage: Message = {
                    sender: 'bot',
                    text: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
                    timestamp: new Date(),
                    id: (Date.now() + 1).toString()
                };
                setMessages(prev => [...prev, errorMessage]);
                setIsConnected(false);
            } finally {
                setIsTyping(false);
            }
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const getWelcomeMessage = () => {
        const hour = new Date().getHours();
        let greeting = "Hello!";
        if (hour < 12) greeting = "Good morning!";
        else if (hour < 17) greeting = "Good afternoon!";
        else greeting = "Good evening!";
        
        return `${greeting} I'm Sai's AI Assistant. I can help you learn more about his skills, experience, and projects. What would you like to know?`;
    };

    const quickQuestions = [
        "Tell me about Sai's experience",
        "What technologies does Sai know?",
        "Show me Sai's projects",
        "How can I contact Sai?"
    ];

    return (
        <>
            {/* Floating Action Button as Toggle */}
            <button
                className={styles.Chatbot_toggleButton__7bM1p}
                aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
                onClick={handleToggleChat}
                style={{ display: isOpen ? 'none' : 'flex' }}
            >
                <FaComments />
            </button>

            {/* Chat Container */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className={`${styles.chatContainer} ${isMinimized ? styles.minimized : ''}`}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {/* Header */}
                        <motion.div 
                            className={styles.chatHeader}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className={styles.headerContent}>
                                <div className={styles.botInfo}>
                                    <motion.div 
                                        className={styles.botAvatar}
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                    >
                                        <FaBrain />
                                    </motion.div>
                                    <div className={styles.botDetails}>
                                        <h3>Sai's AI Assistant</h3>
                                        <div className={styles.statusIndicator}>
                                            <span className={`${styles.statusDot} ${isConnected ? styles.online : styles.offline}`}></span>
                                            <span className={styles.statusText}>
                                                {isConnected ? 'Online' : 'Offline'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.headerActions}>
                                    <motion.button 
                                        className={styles.minimizeButton}
                                        onClick={handleMinimize}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {isMinimized ? <FaRegComments /> : <FaRegWindowClose />}
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Chat Content */}
                        <AnimatePresence>
                            {!isMinimized && (
                                <motion.div 
                                    className={styles.chatContent}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Messages Container */}
                                    <div className={styles.messagesContainer}>
                                        {/* Welcome Message */}
                                        {messages.length === 0 && (
                                            <motion.div 
                                                className={`${styles.messageContainer} ${styles.botContainer}`}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                <div className={`${styles.iconContainer} ${styles.botIcon}`}>
                                                    <FaBrain />
                                                </div>
                                                <div className={styles.messageBubble}>
                                                    <p>{getWelcomeMessage()}</p>
                                                </div>
                                                <div className={styles.messageTime}>
                                                    {formatTime(new Date())}
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Quick Questions */}
                                        {messages.length === 0 && (
                                            <motion.div 
                                                className={styles.quickQuestions}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 }}
                                            >
                                                <p className={styles.quickQuestionsTitle}>
                                                    <BsLightningCharge /> Quick Questions
                                                </p>
                                                <div className={styles.quickQuestionsGrid}>
                                                    {quickQuestions.map((question, index) => (
                                                        <motion.button
                                                            key={index}
                                                            className={styles.quickQuestion}
                                                            onClick={() => setUserInput(question)}
                                                            whileHover={{ scale: 1.02 }}
                                                            whileTap={{ scale: 0.98 }}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.6 + index * 0.1 }}
                                                        >
                                                            <FaRegQuestionCircle />
                                                            {question}
                                                        </motion.button>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Messages */}
                                        <AnimatePresence>
                                            {messages.map((msg, index) => (
                                                <motion.div
                                                    key={msg.id}
                                                    className={`${styles.messageContainer} ${msg.sender === 'user' ? styles.userContainer : styles.botContainer}`}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -20 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className={`${styles.iconContainer} ${msg.sender === 'user' ? styles.userIcon : styles.botIcon}`}>
                                                        {msg.sender === 'user' ? <FaRegUser /> : <FaBrain />}
                                                    </div>
                                                    <div className={styles.messageBubble}>
                                                        <p>{msg.text}</p>
                                                    </div>
                                                    <div className={styles.messageTime}>
                                                        {formatTime(msg.timestamp)}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </AnimatePresence>

                                        {/* Typing Indicator */}
                                        <AnimatePresence>
                                            {isTyping && (
                                                <motion.div 
                                                    className={`${styles.messageContainer} ${styles.botContainer}`}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -20 }}
                                                >
                                                    <div className={`${styles.iconContainer} ${styles.botIcon}`}>
                                                        <FaBrain />
                                                    </div>
                                                    <div className={styles.typingBubble}>
                                                        <motion.div className={styles.typingDots}>
                                                            <motion.span 
                                                                className={styles.typingDot}
                                                                animate={{ scale: [1, 1.2, 1] }}
                                                                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                                                            ></motion.span>
                                                            <motion.span 
                                                                className={styles.typingDot}
                                                                animate={{ scale: [1, 1.2, 1] }}
                                                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                                                            ></motion.span>
                                                            <motion.span 
                                                                className={styles.typingDot}
                                                                animate={{ scale: [1, 1.2, 1] }}
                                                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                                                            ></motion.span>
                                                        </motion.div>
                                                        <span className={styles.typingText}>AI is thinking...</span>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                        
                                        <div ref={messagesEndRef} />
                                    </div>

                                    {/* Input Container */}
                                    <motion.div 
                                        className={styles.inputContainer}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className={styles.inputWrapper}>
                                            <input
                                                ref={inputRef}
                                                type="text"
                                                className={styles.input}
                                                value={userInput}
                                                onChange={(e) => setUserInput(e.target.value)}
                                                onKeyPress={handleKeyPress}
                                                placeholder="Ask me anything about Sai..."
                                                disabled={isTyping}
                                            />
                                            <motion.button 
                                                className={`${styles.sendButton} ${userInput.trim() ? styles.active : ''}`}
                                                onClick={sendMessage}
                                                disabled={!userInput.trim() || isTyping}
                                                whileHover={{ scale: userInput.trim() ? 1.1 : 1 }}
                                                whileTap={{ scale: userInput.trim() ? 0.9 : 1 }}
                                            >
                                                <FaPaperPlane />
                                            </motion.button>
                                        </div>
                                        <div className={styles.inputFooter}>
                                            <span className={styles.inputHint}>
                                                Press Enter to send • Shift+Enter for new line
                                            </span>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
