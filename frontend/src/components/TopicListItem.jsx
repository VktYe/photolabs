import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onLoadTopic }) => {

  return (
    <div key={topic.id} className="topic-list__item">
      <span onClick={() => onLoadTopic(topic.id)}>
        {topic.title}
      </span>
    </div>
  );
};

export default TopicListItem;
