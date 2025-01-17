import "./App.css";
import data from "./assets/data.json";
import Movie from "./assets/components/Movie";
import Content from "./assets/components/Content";
import Title from "./assets/components/Title";
function App() {
  return (
    <section className="container">
      <div className="word">
        <div className="high1">N</div>
        <div className="high">E</div>
        <div className="mid1">T</div>
        <div className="mid">F</div>
        <div className="mid1">L</div>
        <div className="high">I</div>
        <div className="high1">X</div>
      </div>
      {/* <h1>NETFLIX</h1> */}
      {/* {data.map((elem, index) => {
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
      })} */}

      <Content />
      {/* <Movie /> */}
    </section>
  );
}

export default App;
