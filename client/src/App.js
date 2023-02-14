import linkedinIMG from "./images/145807.png";
import githubIMG from "./images/gitHub.png";

function App() {
  return (
    <div className="App">
      <h1>Joao Amaral</h1>
      <h3>
        Hello World? My name is Joao. I'm a front-end developer based in Porto,
        Portugal. I have experience and enjoy building applications using
        Javascript, React and CSS, together with its libraries tailwind and
        bootstrap. You can reach out to me at njoao99tr@gmail.com or through
        (and follow me on){" "}
        <a href="https://www.linkedin.com/in/joao-amaral9930/">
          <img
            src={linkedinIMG}
            alt="LinkedIn profile hyperlink"
            className="img"
          />
        </a>{" "}
        <a href="https://github.com/mewmi">
          <img src={githubIMG} alt="Github profile hyperlink" className="img" />
        </a>
      </h3>
    </div>
  );
}

export default App;
