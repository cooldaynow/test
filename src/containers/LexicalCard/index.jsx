import React, {useState, useEffect, useRef} from 'react';
import {Card} from 'reactstrap';
import {delay, random, isMobile} from '../../utils';
import CardContents from '../../components/CardContents';
import EditButton from '../../components/EditButton';
import DeleteButton from '../../components/DeleteButton';
import EditContents from '../EditContents';
import './index.scss';

const LexicalCard = ({content, col, index, deleteCard, changeCard}) => {
  const [edit, setEdit] = useState(false);
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(null);
  const dblclick = useRef(true);
  const editCard = () => setEdit(!edit);
  const cancel = () => setEdit(false);

  const showTranslate = () => {
    //Не показываем перевод, если был двойной клик
    delay(300)
      .then(() => {
        if (dblclick.current) {
          setClick(true);
          return delay(2500);
        }
      })
      .then(() => {
        if (dblclick.current) {
          setClick(false);
        }
      });
  };
  useEffect(() => {
    const colorInitialization = () => {
      const COLORS = [
        '#FF8000',
        '#FFC0CB',
        '#7FFF00',
        '#C8A2C8',
        '#FFFF00',
        '#808080',
        '#DC143C',
        'violet',
        'green',
        'yellow',
        'orange',
        'tomato',
      ];
      let randomBackgroundColor = {
        backgroundColor: COLORS[random(0, COLORS.length)],
      };
      setColor(randomBackgroundColor);
    };
    colorInitialization();
    return () => (dblclick.current = false);
  }, []);

  const forcedShowText = () => setClick(false);
  const removeCard = () => {
    dblclick.current = false;
    deleteCard(col, index);
    setTimeout(() => {
      dblclick.current = true;
    }, 300);
  };
  return (
    <div className="lexical__wrap">
      <EditButton editCard={editCard} />
      {isMobile && <DeleteButton edit={edit} removeCard={removeCard} />}
      <div className="card__wrap" onDoubleClick={edit ? null : removeCard}>
        <Card
          className="lexical__card"
          style={color}
          onClick={edit ? null : click ? forcedShowText : showTranslate}>
          {edit ? (
            <EditContents
              cancel={cancel}
              change={changeCard}
              col={col}
              index={index}
              content={content}
            />
          ) : (
            <CardContents click={click} content={content} />
          )}
        </Card>
      </div>
    </div>
  );
};

export default LexicalCard;
