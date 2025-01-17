// we can use Title and Movie as component to intergrate in App.jsx
// we can also create Content. go though data(.map)
//then Content intergrate into App. this way. only Content is need,
// not Title and Movie

import data from "../data.json";
const Movie = () => {
  return (
    <>
      {data.map((elem, index) => {
        return (
          <div>
            {elem.images.map((url) => {
              return <img key={url} src={url} />;
            })}
          </div>
        );
      })}
    </>
  );
};

export default Movie;
