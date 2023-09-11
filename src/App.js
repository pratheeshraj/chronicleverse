import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Contact from './pages/contact/Contact';
import CreateCollectible from './pages/CreateCollectible/CreateCollectible';
import SingleCollectible from './pages/single_collectible/SingleCollectible';
import CreateCollection from './pages/CreateCollection/CreateCollection';
import Profile from './pages/profile/Profile';
import OnSale from './pages/profile/onsales/OnSale';
import Collectibles from './pages/profile/Collectible/Collectibles';
import Followers from './pages/profile/followers/Followers';
import Following from './pages/profile/following/Following';
import Likes from './pages/profile/likes/Likes';
import Created from './pages/profile/create/Created';
import EditProfile from './pages/edit_profile/EditProfile';
import ItemDetails from './pages/item_details/ItemDetails';
import Bids from './pages/item_details/bids/Bids';
import History from './pages/item_details/history/History';
import Info from './pages/item_details/info/Info';
import Owners from './pages/item_details/owners/Owners';
import About from './pages/about/About';
import DashBoard from './pages/dashboard/DashBoard';
import Nav from './pages/nav/Nav';
import Activity from './pages/activity/Activity';
import MyActivity from './pages/activity/myactivity/MyActivity';
import AllActivity from './pages/activity/allactivity/AllActivity';
import Fllowing from './pages/activity/following/Fllowing';
import NotFoundPage from './pages/notfoundPage/NotFoundPage';
import Support from './pages/support/Support';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><Home /></Layout>}></Route>
          <Route path='/contact' element={<Layout><Contact /></Layout>}></Route>
          <Route path='/create_collectible' element={<Layout><CreateCollectible /></Layout>}></Route>
          <Route path='/single_collectible' element={<Layout><SingleCollectible /></Layout>}></Route>
          <Route path='/create_collection' element={<Layout><CreateCollection /></Layout>}></Route>
          <Route path='/profile' element={<Layout><Profile /></Layout>}>
            <Route path='onsale' element={<OnSale />}></Route>
            <Route path='collectibles' element={<Collectibles />}></Route>
            <Route path='activity' element={<Activity />}></Route>
            <Route path='created' element={<Created />}></Route>
            <Route path='followers' element={<Followers />}></Route>
            <Route path='following' element={<Following />}></Route>
            <Route path='likes' element={<Likes />}></Route>
          </Route>
          <Route path='/editprofile' element={<Layout><EditProfile /></Layout>}></Route>
          <Route path='/itemdetails' element={<Layout><ItemDetails /></Layout>}>
            <Route path='bids' element={<Bids />}></Route>
            <Route path='history' element={<History />}></Route>
            <Route path='info' element={<Info />}></Route>
            <Route path='owners' element={<Owners />}></Route>
          </Route>
          <Route path='/about' element={<Layout><About /></Layout>}></Route>
          <Route path='/dashboard' element={<Layout><DashBoard/></Layout>}></Route>
          <Route path='/activity' element={<Layout><Activity/></Layout>}>
          <Route path='myactivity' element={<MyActivity />}></Route>
            <Route path='allactivity' element={<AllActivity />}></Route>
            <Route path='follower' element={<Fllowing />}></Route>
          </Route>
          <Route path='/notfound' element={<Layout><NotFoundPage/></Layout>}/>
          <Route path='/help_support' element={<Layout><Support/></Layout>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
