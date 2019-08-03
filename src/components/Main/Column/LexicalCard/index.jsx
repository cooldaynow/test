import React, {useState} from 'react';
import {Card, Button} from 'reactstrap';
import './index.scss';
import CardContents from './CardContents';
import EditContents from './EditContents';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';

const LexicalCard = ({title, text, translate, change, col, index}) => {
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(false);
  const editCard = () => setEdit(!edit);
  const cancel = () => setEdit(false);
  const delay = time => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, time);
    });
  };
  const showTranslate = () => {
    delay(300)
      .then(() => {
        setActive(true);
        return delay(1000);
      })
      .then(() => {
        setActive(false);
      });
  };
  return (
    <div className="lexical__card">
      <div className="lexical__top">
        <Button onClick={editCard}>
          <FontAwesomeIcon icon={faEdit} />
        </Button>
      </div>
      <Card onClick={() => (edit ? null : showTranslate())}>
        {edit ? (
          <EditContents
            cancel={cancel}
            change={change}
            col={col}
            index={index}
          />
        ) : (
          <CardContents
            active={active}
            title={title}
            text={text}
            translate={translate}
          />
        )}
      </Card>
    </div>
  );
};

export default LexicalCard;
