// we can use Title and Movie as component to intergrate in App.jsx
// we can also create Content. go though data(.map)
//then Content intergrate into App. this way. only Content is need,
// not Title and Movie

import data from "../data.json";

const Title = () => {
  return (
    <>
      {data.map((elem) => {
        return <h2 key={elem.category}> {elem.category}</h2>;
      })}
    </>
  );
};

export default Title;
