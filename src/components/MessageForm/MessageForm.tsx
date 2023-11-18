import React from 'react';

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
          <div className="d-flex flex-column p-2 border border-info border-4 rounded-3">
            <div>
              <strong>Author: </strong> <i>Sergeev Mikhail</i>
              <strong className="ms-4">Date: </strong> <i>10.07.88 13 August 2023</i>
            </div>
              <div className="mt-3">
                <p><strong>Message:</strong> Поскольку метод floor() является статическим методом объекта Math,
                  вы всегда должны использовать его как Math.floor(),
                  а не пытаться вызывать метод на созданном экземпляре объекта Math (поскольку объект Math не является конструктором).</p>
              </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default MessageForm;