import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
       {sampleDataForTopicList.map((topicListItem) => {
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
