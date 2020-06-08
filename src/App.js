import React from 'react';

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import ListGroupLayout from "./components/CustomListGroup/ListGroupLayout";
import ListGroupLayoutGrid from "./components/CustomListGroup/ListGroupLayoutGrid";
import TabBarItem from "./components/Tabbar/TabBarItem";
import { Scrollbars } from 'react-custom-scrollbars';

import TabBar from "./components/Tabbar/TabBar";
import ModalAuth from "./components/Modal/ModalAuth";

import kittyImage from "./assets/newProduct-kitty.png";
import batmanImage from "./assets/newProduct-batman.png";
import hollywoodImage from "./assets/newProduct-hollywood.png";
import stripImage from "./assets/newProduct-strip.png";

import channel1 from "./assets/1-channel.svg";
import channel2x2 from "./assets/2x2-channel.svg";
import channelRbk from "./assets/rbk-channel.svg";
import channelAmedia from "./assets/amedia-premium-channel.svg";

import './styles/App.css';
import './styles/style.scss'

function App() {
    return (

        <div className="wrapper" id="wrapper">
            <Header/>

            <ModalAuth/>
            <Scrollbars>
            <TabBar>
                <TabBarItem label='Фильмы'>
                    <span className="TabBarItem__span" role="img" aria-label="newProducts">🔥Новинки</span>
                    <ListGroupLayout className="TabBarItem__new-products" message="Мульт в кино. Выпуск №103. Некогда грустить"
                                     hover_message="Lorem ipsum dolor sit" logo_image={kittyImage}/>
                    <ListGroupLayout className="TabBarItem__new-products" message="Новый Бэтмен"
                                     hover_message="Lorem ipsum dolor sit" logo_image={batmanImage}/>
                    <ListGroupLayout className="TabBarItem__new-products" message="Однажды... в Голливуде" hover_message="Фильм повествует о череде
                                     событий, произошедших в Голливуде в 1969 году, на закате его «золотого
                            века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в
                            стремительно меняющемся мире киноиндустрии."
                                     logo_image={hollywoodImage}/>
                    <ListGroupLayout className="TabBarItem__new-products" message="Стриптизёрши"
                                     hover_message="Lorem ipsum dolor sit" logo_image={stripImage}/>

                    <span className="TabBarItem__span">Жанры</span>
                    <ListGroupLayout className="TabBarItem__genres_comedy" message={<span role="img"
                                                                               aria-label="TabBarItem__genres_emoji">😁 <br/> Комедии </span>}/>
                    <ListGroupLayout className="TabBarItem__genres_drama"
                                     message={<span role="img"
                                                    aria-label="TabBarItem__genres_emoji">😭 <br/> Драмы </span>}/>
                    <ListGroupLayout className="TabBarItem__genres_fantastic"
                                     message={<span role="img" aria-label="TabBarItem__genres_emoji">👽 <br/> Фантастика </span>}/>
                    <ListGroupLayout className="TabBarItem__genres_scary"
                                     message={<span role="img"
                                                    aria-label="TabBarItem__genres_emoji">👻 <br/> Ужасы </span>}/>
                </TabBarItem>

                <TabBarItem label='Телеканалы'>

                    <ListGroupLayoutGrid className="TabBarItem__channels" heading="Первый канал"
                                         schedule_item1="13:00 Новости(с субтитрами)"
                                         schedule_item2="14:00 Давай поженимся" schedule_item3="15:00 Другие новости"
                                         logo_image={channel1}/>
                    <ListGroupLayoutGrid className="TabBarItem__channels" heading="2x2"
                                         schedule_item1="13:00 МУЛЬТ ТВ. Сезон 4, 7 серия"
                                         schedule_item2="14:00 ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия"
                                         schedule_item3="15:00 БУРДАШЕВ. Сезон 1, 20 серия" logo_image={channel2x2}/>
                    <ListGroupLayoutGrid className="TabBarItem__channels" heading="РБК"
                                         schedule_item1="13:00 ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС"
                                         schedule_item2="14:00 ДЕНЬ. Главные темы"
                                         schedule_item3="15:00 Главные новости" logo_image={channelRbk}/>
                    <ListGroupLayoutGrid className="TabBarItem__channels" heading="AMEDIA PREMIUM"
                                         schedule_item1="13:00 Клиент всегда мёртв"
                                         schedule_item2="14:00 Голодные игры: Сойка-пересмешница. Часть I"
                                         schedule_item3="15:00 Секс в большом городе" logo_image={channelAmedia}/>
                    <ListGroupLayoutGrid className="TabBarItem__channels" heading="Канал"
                                         schedule_item1="13:00 Новости(с субтитрами)"
                                         schedule_item2="14:00 Давай поженимся" schedule_item3="15:00 Другие новости"
                                         logo_image={channelRbk}/>
                    <ListGroupLayoutGrid className="TabBarItem__channels" heading="Канал"
                                         schedule_item1="13:00 Новости(с субтитрами)"
                                         schedule_item2="14:00 Давай поженимся" schedule_item3="15:00 Другие новости"
                                         logo_image={channelRbk}/>
                </TabBarItem>
            </TabBar>
            </Scrollbars>
            <Footer/>
        </div>
    );
}

export default App;
