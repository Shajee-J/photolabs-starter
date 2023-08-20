import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";



const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
       {props.topicData.map((topicListItem) => {
        return (
        <TopicListItem key={topicListItem.id}
        slug={topicListItem.slug}
        title={topicListItem.title} />
        );
      })}
    </div>
  );
};

export default TopicList;
