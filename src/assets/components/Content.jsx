import Title from "./Title";
import Movie from "./Movie";
import data from "../data.json";
const Content = (elem) => {
  return (
    <div>
      {data.map((elem, index) => {
        return (
          <div className="box">
            <h2>{elem.category}</h2>
            <div className="scroll">
              {elem.images.map((url) => {
                return <img key={url} src={url} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// <>
//   <Title category={elem.categoty} />
//   <Movie images={elem.images} />
// </>

export default Content;
