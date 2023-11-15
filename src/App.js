import './App.css';
import Row from './components/Row'
import requests from './requests';
import Nav from './components/Nav';
import Banner from './components/Banner';


function App() {
  return (
    <div>
    <Nav/>
    <Banner fetchURL={requests.fetchNetflixOriginals}/>
      
      
    <Row isPoster={true}  title="NetflixOriginals" fetchURL={requests.fetchNetflixOriginals}/>

    <Row  title="Trending Movies" fetchURL={requests.fetchTrending}/>

    <Row  title="Top Rated Movies" fetchURL={requests.fetchTopRated}/>

    <Row  title="Action Movies" fetchURL={requests.fetchActionMovies}/>

    <Row  title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>

    <Row  title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>

    <Row  title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>

    <Row  title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
    
    
    </div>
  );
}

export default App;
