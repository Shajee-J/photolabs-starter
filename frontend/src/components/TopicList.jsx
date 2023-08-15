import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from 'mocks/topics';


const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
       {topics.map((topicListItem) => {
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
