import React from 'react';
import './index.scss';
import data from '../../api/text.js';
import {random} from '../../utils';

const Task = () => (
  <>
    <h2 className = 'points__header'>Задание</h2>
    <ul>
      {data.map((paragraph, i) => (
        <li className="points__paragraph" key={random(0, 999) * i}>
          {paragraph.text}
          {paragraph.hasOwnProperty('subText')
            ? paragraph.subText.map(subText => (
                <ul key={random(0, 999) * i}>
                  <li>{subText}</li>
                </ul>
              ))
            : null}
        </li>
      ))}
    </ul>
  </>
);

export default Task;
