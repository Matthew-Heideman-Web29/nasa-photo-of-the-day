import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import NasaCardContainer from './components/NasaCardContainer.js';
import CuriosityImages from './components/CuriosityImages.js';
// import NearEarthObjects from './components/NearEarthObjects';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';

function App() {
  const [cardData, setCardData] = useState({})
  const [roverImgs1, setRoverImgs1] = useState([])
  const [roverImgs2, setRoverImgs2] = useState([])
  const [roverImgs3, setRoverImgs3] = useState([])
  // const [asteroids, setAsteroids] = useState({})
  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  const apiKey = 'DHZ2afjaVyA9w8NA3TfJPVztzMaUeSuZ4AxodgKB';
  const url = 'https://api.nasa.gov';
  const marsImgUrl = '/mars-photos/api/v1/rovers/curiosity/photos?sol=1500&camera=navcam';
  // const startDate = '2020-04-09';
  // const endDate = '2020-04-16';
  useEffect(() => {
    axios
      .get(`${url}/planetary/apod?api_key=${apiKey}`)
      .then(response => {
        setCardData(response.data);
      })
      .catch(error => {
        console.log(error, 'Data was not retrieved');
      })
  }, [])
  useEffect(() => {
    axios
      .get(`${url}${marsImgUrl}&page=1&api_key=${apiKey}`)
      .then(response => {
        console.log(response);
        setRoverImgs1(response.data.photos);
      })
      .catch(error => {
        console.log(error, 'Data was not retrieved');
      })
  }, [])
  useEffect(() => {
    axios
      .get(`${url}${marsImgUrl}&page=2&api_key=${apiKey}`)
      .then(response => {
        console.log(response);
        setRoverImgs2(response.data.photos);
      })
      .catch(error => {
        console.log(error, 'Data was not retrieved');
      })
  }, [])
  useEffect(() => {
    axios
      .get(`${url}${marsImgUrl}&page=3&api_key=${apiKey}`)
      .then(response => {
        console.log(response);
        setRoverImgs3(response.data.photos);
      })
      .catch(error => {
        console.log(error, 'Data was not retrieved');
      })
  }, [])
  // useEffect(() => {
  //   axios
  //     .get(`${url}/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`)
  //     .then(response => {
  //       console.log(response);
  //       setAsteroids(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error, 'Data was not retrieved');
  //     })
  // }, [])
  return (
    <div className="App">
      <h1>
        Playing with NASA APIs<span role="img" aria-label='go!'>🚀</span>!
      </h1>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}>
            Astronomy Photo of the Day
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}>
            Photos From Mars
          </NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}>
            Near Earth Objects
          </NavLink>
        </NavItem> */}
      </Nav>
      <TabContent activeTab={activeTab} >
        <TabPane tabId="1">
          <NasaCardContainer data = {cardData} />
        </TabPane>
        <TabPane tabId='2'>
          <CuriosityImages data1 = {roverImgs1} data2 = {roverImgs2} data3 = {roverImgs3} />
        </TabPane>
        {/* <TabPane tabId="3">
          <NearEarthObjects data =  {asteroids} />
        </TabPane> */}
      </TabContent>
    </div>
  );
}

export default App;
