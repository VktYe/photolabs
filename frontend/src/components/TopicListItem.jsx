import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: 1,
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({topic, onLoadTopic}) => {

  return (
    <div key={topic.id} className="topic-list__item">
      <span onClick={() => onLoadTopic(topic.id)}>
        {topic.title}
      </span>
      
    </div>
  );
};

export default TopicListItem;
