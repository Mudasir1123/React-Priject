import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar'; // Import renamed component
import ProfileCover from './components/ProfileCover';
import ProfileStats from './components/ProfileStats';
import ProfileInfo from './components/ProfileInfo';
import NewTweet from './components/NewTweet';
import RightPanel from './components/RightPanel';

function App() {
  return (
    <>
      <CustomNavbar /> {/* Use renamed component */}
      <ProfileCover/>
      <ProfileStats/>
      <ProfileInfo/>
      <NewTweet/>
      <RightPanel/>
    </>
  );
}

export default App;
