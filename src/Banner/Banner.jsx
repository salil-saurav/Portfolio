import "./Banner.css";
import { Container } from "@mui/material";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <div className="banner-body">
          {/* <h1 style={{ marginTop: "0" }}>Hello I'm Salil Saurav</h1> */}
          <h1 style={{ marginTop: "0" }}>1</h1>
          {/* <h2>Full Stack Developer</h2> */}
          <h2>2</h2>
        </div>

        <div className="card-group-one">
          <div className="card">card 1</div>
          <div className="card">card 2</div>
        </div>
        <div className="card-group-two">
          <div className="card">card 3</div>
          <div className="card">card 4</div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
