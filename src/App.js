import {Switch, BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import GuideWork from "./pages/GuideWork/GuideWork";
import HealthApp from "./pages/HealthApp/HealthApp";
import ScrollToTop from "./pages/ScrollToTop/ScrollToTop";
import Work from "./pages/Work";
import MobileStrokePage from "./pages/MobileStrokePage/MobileStrokePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";


function App() {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <div className="App">

                <Header/>

                <Switch>
                    <Route exact path='/' render={() => <Home/>}/>
                    <Route exact path='/about' render={() => <About/>}/>
                    <Route exact path='/work/' render={() => <MobileStrokePage/>}/>
                    <Route exact path='/work/guide' render={() => <GuideWork/>}/>
                    <Route exact path='/work/health_app' render={() => <HealthApp/>}/>
                    <Route exact path='/work/mobile_stroke_unit' render={() => <MobileStrokePage/>}/>
                    <Route path='*' render={() => <NotFoundPage/>}/>
                </Switch>

                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
