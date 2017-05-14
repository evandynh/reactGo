import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TopicItem from '../components/TopicItem';
import styles from '../css/components/scoreboard';

const cx = classNames.bind(styles);

const Scoreboard = ({topics, onIncompletion, onDestroy}) => {
  const topicListItems = topics.map((topic, key) => {
    if(topic.complete){
      return (
        <TopicItem
          index={key}
          id={topic.id}
          key={key}
          text={topic.text}
          complete={onIncompletion}
          destroyTopic={onDestroy}
          />
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
