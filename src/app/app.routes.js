"use strict";
var router_1 = require('@angular/router');
var _1 = require('./start/');
var _2 = require('./login/');
var _3 = require('./search/');
var _4 = require('./add-tour/');
var _5 = require('./user/');
var _6 = require('./cabinet/');
var _7 = require('./help/');
var appRoutes = [
    {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full'
    },
    {
        path: 'start',
        component: _1.StartComponent
    },
    {
        path: 'login',
        component: _2.LoginComponent
    },
    {
        path: 'search',
        component: _3.SearchComponent
    },
    {
        path: 'tour/add',
        component: _4.AddTourComponent
    },
    {
        path: 'me/:id',
        component: _5.UserComponent
    },
    {
        path: 'cabinet/:id',
        component: _6.CabinetComponent
    },
    {
        path: 'help',
        component: _7.HelpComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
