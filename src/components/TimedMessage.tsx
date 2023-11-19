import { useEffect, useState } from "react";

interface TimedMessageProps {
  message: string;
}

const TimedMessage: React.FC<TimedMessageProps> = ({ message }) => {
  const [notification, setNotification] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification(false);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [message]);

  return notification && <p>{message}</p>;
};

export default TimedMessage;
