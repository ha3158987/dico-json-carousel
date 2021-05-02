import logo from './logo.svg';
import './App.css';
import DicoJsonCarousel from './lib/Carousel';
import styled from 'styled-components';

const Card = styled.div`
  height: 5rem;
  font-size: 3rem;
  text-align: center;
  padding: 1rem;

  & > div:nth-of-type(1){
    background-color: red;
  }
  & > div:nth-of-type(2){
    background-color: orange;
  }
  & > div:nth-of-type(3){
    background-color: yellow;
  }
  & > div:nth-of-type(4){
    background-color: green;
  }
  & > div:nth-of-type(5){
    background-color: blue;
  }
  & > div:nth-of-type(6){
    background-color: blueviolet;
  }
  & > div:nth-of-type(7){
    background-color: violet;
  }
`;

function App() {
  return (
    <>
      <DicoJsonCarousel>
          {/* {
            Array(7).fill(true).map((v, i) =>
            <Card id={i} className="card">
              <div>
                {i + 1}
              </div>
            </Card>
            )
          } */}
      </DicoJsonCarousel>
    </>
  );
}

export default App;
