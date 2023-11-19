import { useEffect, useState } from "react";
import { Modal } from ".";

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

  return notification && <Modal isOpen pushNotification={message} />;
};

export default TimedMessage;
