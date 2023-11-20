import React, {useEffect} from 'react';

interface Props {
    idValue: string
    authorValue: string,
    messageValue: string,
    dateTimeValue: string,
}

const MessageItem:React.FC<Props> = ({authorValue, messageValue, dateTimeValue, idValue}) => {

  useEffect(() => {
    console.log('Create MesageItem');
  }, []);

  return (
    <div className="d-flex flex-column p-2 border border-info border-4 rounded-3 mt-2" id={idValue}>
      <div>
        <strong>Author: </strong> <i>{authorValue}</i>
        <strong className="ms-4">Date: </strong> <i>{dateTimeValue}</i>
      </div>
      <div className="mt-3">
        <p><strong>Message:</strong> {messageValue}</p>
      </div>
    </div>
  );
};

export default MessageItem;