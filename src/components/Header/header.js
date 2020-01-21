import React from 'react';
import { Link } from 'react-router-dom'
import style from './header.styl'

const Header = () => {
    return (
        <header className={style.header}>
            <Link className={style.Link} to="/">baptiste barel</Link>
            <div className={style.categories}>
                <Link className={style.Link} to="/projects">projects</Link>
                <Link className={style.Link} to="/about">about</Link>
            </div>
        </header>
    );
};

export default Header;