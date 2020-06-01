import React from 'react';

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Channels from "./components/Channels/channels";
import ListGroupLayout from "./components/CustomListGroup/ListGroupLayout";
import TabBarItem from "./components/Tabbar/TabBarItem";

import TabBar from "./components/Tabbar/TabBar";
import ModalAuth from "./components/Modal/ModalAuth";

import './App.css';

function App() {
    return (
            <div className="wrapper">
                <Header/>
                <ModalAuth/>
                <Channels/>
                <TabBar>
                    <TabBarItem label='Фильмы'>
                        <ListGroupLayout/>
                        <ListGroupLayout/>
                    </TabBarItem>
                    <TabBarItem label='Телеканалы'>
                        <ListGroupLayout/>
                    </TabBarItem>

                </TabBar>


                <Footer/>
            </div>
    );
}

export default App;
