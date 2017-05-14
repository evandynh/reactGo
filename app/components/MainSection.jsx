import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TopicItem from '../components/TopicItem';
import styles from '../css/components/main-section';

const cx = classNames.bind(styles);

const MainSection = ({ topics, onIncrement, onDecrement, onDestroy, onCompletion }) => {
  const topicItems = topics.map((topic, key) => {
    if(!topic.complete) {
    return (
      <TopicItem
        index={key}
        id={topic.id}
        key={key}
        text={topic.text}
        complete={onCompletion}
        incrementCount={onIncrement}
        decrementCount={onDecrement}
        destroyTopic={onDestroy} />);
    }
  });

  return (
    <div className={cx('main-section')}>
      <h3 className={cx('header')}>Tasks I haven't completed yet.</h3>
      <ul className={cx('list')}>{topicItems}</ul>
    </div>
  );
};

MainSection.propTypes = {
  topics: PropTypes.array.isRequired,
  // onIncrement: PropTypes.func.isRequired,
  // onDecrement: PropTypes.func.isRequired,
  onDestroy: PropTypes.func.isRequired
};

export default MainSection;
