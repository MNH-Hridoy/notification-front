import React, {useState, useEffect} from 'react';
import Notification from "./Notification";

const App = () => {
  const [notifications, setNotifications] = useState([]);
  let socket;
  useEffect(() => {
    socket = new WebSocket('ws://localhost:8989/ws');

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = event => {

      const newNotification = event.data;
      let count = parseInt(localStorage.getItem('unSeen') ?? 0)
      localStorage.setItem("unSeen", count + 1);
      setNotifications(prevNotifications => [...prevNotifications, newNotification]);
    };

    socket.onclose = event => {
      console.log('WebSocket connection closed:', event);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <Notification notifications={notifications}/>
  );
};

export default App;
