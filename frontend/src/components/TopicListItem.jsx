import React from "react";
import "../styles/TopicListItem.scss";



const TopicListItem = (props) => {
  return (
    <div className="topic-list__item" onClick={() => { props.changeTopic(props.id) }}>
      <span>{props.title}</span>
    </div>
  );
};

export default TopicListItem;
