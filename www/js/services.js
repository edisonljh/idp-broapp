/* global angular, document, window */
'use strict';

angular.module('starter.services', [])
    .factory('Tasks', function (Bros) {
        var tasks = [
            {
                id: 1,
                bro: Bros.get(2),
                task: "HELP! Can anyone get me some flowers?",
                budget: 10.3,
                reward: 10,
                status: open
            },{
                id:2,
                bro: Bros.get(3),
                task: "Can anyone help me buy a cake please? Chocolate one will be great!",
                budget: 0,
                reward: 25,
                status: open
            }
        ];


        return {
            all: tasks,
            get: function(i){
                var theTask = undefined;
                tasks.forEach(function (task) {
                    if(task.id == i)
                        theTask = task;
                });
                return theTask;
            }
        };
    }).factory('Bros', function () {
        var bros = [
            {
                id:1,
                name: 'Jia Jing',
                points: '100',
                rank: 'Noob Bro',
                display_pic: 'img/jj.png'
            },
            {
                id:2,
                name: 'Sebastian',
                points: '240',
                rank: 'Super Bro',
                display_pic: 'img/derrick.png',
                map: 'img/map-Sebastian.jpg'
            },
            {
                id:3,
                name: 'Joshua',
                points: '780',
                rank: 'Big Bro',
                display_pic: 'img/chan.png',
                map: 'img/map-Joshua.jpg'
            }
        ];
        return {
            all: bros,
            get: function(i){
                var theBro = undefined;
                bros.forEach(function (bros) {
                    if(bros.id == i)
                        theBro = bros;
                });
                return theBro;
            }
        };
    }).factory('Profile', function () {
        var me = {
                id:99,
                name: 'Ashley',
                points: '320',
                display_pic: 'img/jj.jpg',
                badges: [],
                my_tasks: []
            };
        return me;
    });
;
