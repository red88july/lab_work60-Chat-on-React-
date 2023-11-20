import MessageItem from '../MessageItem/MessageItem';
import React, { useEffect, useState } from 'react';
import { Messages } from '../../types';

interface Props {
  onSubmit: (author: Messages) => void;
}

const MessageForm: React.FC<Props> = () => {
  const [messageList, setMessageList] = useState<Messages[]>([]);
  const [message, setMessage] = useState<Messages>({
    _id: 0,
    author: '',
    message: '',
    datetime: '',
  });

  const BASE_URL = 'http://146.185.154.90:8000/messages';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}?datetime=${message.datetime}`);
        if (response.ok) {
          const data = await response.json();
          setMessageList(data);
        }
      } catch (error) {
        console.error('Error fetching messages', error);
      }
    };
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.author !== '' && message.message !== '') {
      try {
        setMessage((prevState) => ({ ...prevState, datetime: new Date().toISOString() }));

        const data = new URLSearchParams();
        data.set('author', message.author);
        data.set('message', message.message);
        data.set('datetime', message.datetime);

        const response = await fetch(BASE_URL, {
          method: 'post',
          body: data,
        });

        if (response.ok) {
          const responseData = await response.json();
          setMessageList((prevState) => [...prevState, responseData]);
          setMessage({
            _id: 0,
            author: '',
            message: '',
            datetime: '',
          });
        }
      } catch (error) {
        console.error('Error sending message', error);
      }
    }
  };

  const inputChangeAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage((prevState) => ({
      ...prevState,
      author: event.target.value,
    }));
  };

  const inputChangeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage((prevState) => ({
      ...prevState,
      message: event.target.value,
    }));
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center w-75">
        <form onSubmit={onFormSubmit} className="w-50">
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Enter your name
            </label>
            <input
              id="nameInput"
              type="text"
              name="author"
              onChange={inputChangeAuthor}
              value={message.author}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="messageInput" className="form-label">
              Input your message
            </label>
            <textarea
              id="messageInput"
              name="message"
              value={message.message}
              onChange={inputChangeMessage}
              className="form-control"
            ></textarea>
          </div>
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </form>
        <div className="mt-5 w-75">
          {messageList.reverse().map((item, index) => (
            <MessageItem
              key={index}
              idValue={String(item._id)}
              authorValue={item.author}
              messageValue={item.message}
              dateTimeValue={new Date(item.datetime).toLocaleString()}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MessageForm;

