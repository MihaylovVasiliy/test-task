import React from 'react';

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import ListGroupLayout from "./components/CustomListGroup/ListGroupLayout";
import TabBarItem from "./components/Tabbar/TabBarItem";

import TabBar from "./components/Tabbar/TabBar";
import ModalAuth from "./components/Modal/ModalAuth";

import './styles/App.css';

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <ModalAuth/>
            <TabBar>

                <TabBarItem label='Фильмы'>
                    <span role="img" aria-label="newProducts">🔥Новинки</span>
                    <ListGroupLayout className="NewProducts" message="Описание новинки1" logo_image="картинка1"/>
                    <ListGroupLayout className="NewProducts" message="Описание новинки2" logo_image="картинка2"/>
                    <ListGroupLayout className="NewProducts" message="Описание новинки3" logo_image="картинка3"/>
                    <ListGroupLayout className="NewProducts" message="Описание новинки4" logo_image="ыкартинка4"/>

                    <span>Жанры</span>
                    <ListGroupLayout className="Genres" message="Описание жанра1" logo_image="картинка1"/>
                    <ListGroupLayout className="Genres" message="Описание жанра2" logo_image="картинка2"/>
                    <ListGroupLayout className="Genres" message="Описание жанра3" logo_image="картинка3"/>
                    <ListGroupLayout className="Genres" message="Описание жанра4" logo_image="картинка4"/>
                </TabBarItem>

                <TabBarItem label='Телеканалы'>
                    ы
                    <ListGroupLayout className="Channels" heading="Название телеканала1"
                                     message="Расписание телеканала1" logo_image="картинка1"/>
                    <ListGroupLayout className="Channels" heading="Название телеканала2"
                                     message="Расписание телеканала2" logo_image="картинка2"/>
                    <ListGroupLayout className="Channels" heading="Название телеканала3"
                                     message="Расписание телеканала3" logo_image="картинка3"/>
                    <ListGroupLayout className="Channels" heading="Название телеканала4"
                                     message="Расписание телеканала4" logo_image="картинка4"/>
                </TabBarItem>

            </TabBar>
            <Footer/>
        </div>
    );
}

export default App;
