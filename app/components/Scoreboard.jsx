import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../css/components/scoreboard';

const cx = classNames.bind(styles);

const Scoreboard = ({topics}) => {
  const topicListItems = topics.map((topic, key) => {
    if(topic.completed){
      return (

        <li className={cx('item')} key={key}>
          <span className={cx('topic')}>{topic.text}</span>
            <button
              className={cx('button', 'increment')}
              onClick={onIncrement}>+</button>
        </li>
      );
    }
  });
  return (
    <div className={cx('scoreboard')}>
      <h3 className={cx('header')}>Completed Tasks</h3>
      <ul className={cx('list')}>
        {topicListItems}
      </ul>
    </div>
  );
};

Scoreboard.propTypes = {
  topics: PropTypes.array.isRequired
};

export default Scoreboard;
