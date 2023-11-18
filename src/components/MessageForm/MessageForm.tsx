import React from 'react';
import MessageItem from '../MessageItem/MessageItem';

const MessageForm:React.FC = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center w-75">
        <form className="w-50">
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">Enter your name</label>
            <input type="text" className="form-control" id="nameInput" />
          </div>
          <div className="mb-3">
            <label htmlFor="messageInput" className="form-label">Input your message</label>
            <textarea className="form-control" id="messageInput"></textarea>
          </div>
          <button className="btn btn-primary" type="submit">Send</button>
        </form>

        <div className="mt-5 w-75">
          <MessageItem />
        </div>
      </div>
    </>
  );
};

export default MessageForm;