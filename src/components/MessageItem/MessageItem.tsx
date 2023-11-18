import React from 'react';

const MessageItem:React.FC = () => {
  return (
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
  );
};

export default MessageItem;