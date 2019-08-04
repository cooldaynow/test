import React, {useState, useEffect, useRef} from 'react';
import {Card} from 'reactstrap';
import './index.scss';
import {delay, random} from '../../utils';
import CardContents from '../../components/CardContents';
import EditButton from '../../components/EditButton';
import EditContents from '../EditContents';

const LexicalCard = ({
  title,
  text,
  translate,
  change,
  col,
  index,
  deleteCard,
}) => {
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(false);
  const [color, setColor] = useState(null);
  const dblclick = useRef(true);
  const editCard = () => setEdit(!edit);
  const cancel = () => setEdit(false);

  const showTranslate = e => {
    //Показываем перевод, только если не было двойного клика
    delay(300)
      .then(() => {
        if (dblclick.current) {
          setActive(true);
          return delay(2500);
        }
      })
      .then(() => {
        if (dblclick.current) {
          setActive(false);
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
      ];
      let randomColor = COLORS[random(0, COLORS.length)];
      setColor({backgroundColor: randomColor});
    };
    colorInitialization();
    return () => (dblclick.current = false);
  }, []);

  const forcedShowText = e => setActive(false);
  const removeCard = (col, index) => {
    dblclick.current = false;
    deleteCard(col, index);
    setTimeout(() => {
      dblclick.current = true;
    }, 500);
  };
  return (
    <div className="lexical__wrap">
      <EditButton editCard={editCard} />
      <div style={{width: '100%'}} onDoubleClick={() => removeCard(col, index)}>
        <Card
          className="lexical__card"
          style={color}
          onClick={
            edit
              ? null
              : active
              ? e => forcedShowText(e)
              : e => showTranslate(e)
          }>
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
    </div>
  );
};

export default LexicalCard;
