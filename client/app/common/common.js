import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import List from './list/list';

let commonModule = angular
    .module('app.common', [
        Navbar,
        Hero,
        User,
        List
    ])

    .name;

export default commonModule;
