import React from 'react';
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import style from './home.styl'


const Home = () => {
    return (
        <div>
            <MediaQuery maxDeviceWidth={1160}>
                <div className={style.container}>
                    <div className={style.description}>
                        <h1>I'm a <span className={style.color}>creative</span><br/> developer</h1>
                        <span>I like to develop website in <br/> order to make things change</span>
                    </div>
                    <div className={style.projects}>
                        <Link to="/projects" className={style.projects_button}>
                            <img alt="play button logo" src="/images/playButton.svg"/>
                            <span>see my projects</span> 
                        </Link>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery minDeviceWidth={1160}>
                <div className={style.container__large}>
                    <div className={style.description__large}>
                        <h1>I'm a <span className={style.color}>creative</span><br/> developer</h1>
                        <span>I like to develop website in order to <br/> make things change</span>
                    </div>
                    <div className={style.projects__large}>
                        <div>
                            <span>Looking for an internship from march to august 2020</span>
                        </div>
                        <Link to="/projects" className={style.projects_button}>
                            <img alt="play button logo" src="/images/playButton.svg"/>
                            <span>see my projects</span> 
                        </Link>
                    </div>
                </div>
            </MediaQuery>
        </div>
    );
};

export default Home;