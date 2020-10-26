import React, { useEffect } from 'react';
import {
  FiXCircle,
} from 'react-icons/fi';
import { Container } from './styles';
import { ToastMessage, useToast } from '../../../hooks/Toast';

interface ToastProps {
  message: ToastMessage;
  style: object;
}
const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);
  return (
    <Container
      style={style}
      type={message.type}
      hasDescription={Number(!!message.description)}
    >
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={24} />
      </button>
    </Container>
  );
};

export default Toast;
