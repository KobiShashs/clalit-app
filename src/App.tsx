import React from 'react';
import logo from './logo.svg';
import './App.css';
import Teacher from './Components/Teacher/Teacher';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';


function App() {
    return (
        <div className="App">

            <Header />
            <Menu />
            <Main />
            <Footer />


            {/* <School street={'Homma VeMidal'} houseNumber={29} city={'Tel Aviv'} zip={6777129}
                phone={'*6444'} src='https://picsum.photos/200/300' />


            <Teacher name={'Amit Assor'} description={'.NET Core, ASP, C#, Web & Typescript'} years={20} />
            <Teacher name={'Kobi Shasha'} description={'Java & React'} years={5} /> */}

        </div>
    );
}

export default App;
