import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";



const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topicData.map((topicListItem) => {
        return (
          <TopicListItem
            key={topicListItem.id}
            id={topicListItem.id}
            slug={topicListItem.slug}
            title={topicListItem.title}
            changeTopic={props.changeTopic}
          />
        );
      })}
    </div>
  );
};

export default TopicList;
