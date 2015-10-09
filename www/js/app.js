// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter',
    ['ionic', 'starter.controllers', 'starter.services',
        'ionic-material', 'ionMdInput', 'firebase'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        // Turn off caching for demo simplicity's sake
        $ionicConfigProvider.views.maxCache(0);

        /*
         // Turn off back button text
         $ionicConfigProvider.backButton.previousTitleText(false);
         */

        $stateProvider.state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })
            .state('app.activity', {
                url: '/activity',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/activity.html',
                        controller: 'ActivityCtrl'
                    },
                    'fabContent': {
                        template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
                        controller: function ($timeout) {
                            $timeout(function () {
                                document.getElementById('fab-activity').classList.toggle('on');
                            }, 200);
                        }
                    }
                }
            })

            .state('app.bros', {
                url: '/bros',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/bros.html',
                        controller: 'BrosCtrl'
                    },
                    'fabContent': {
                        template: '<button id="fab-friends" class="button button-fab button-fab-top-left expanded button-energized-900 spin"><i class="icon ion-chatbubbles"></i></button>',
                        controller: function ($timeout) {
                            $timeout(function () {
                                document.getElementById('fab-friends').classList.toggle('on');
                            }, 900);
                        }
                    }
                }
            })

            .state('app.gallery', {
                url: '/gallery',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/gallery.html',
                        controller: 'GalleryCtrl'
                    },
                    'fabContent': {
                        template: '<button id="fab-gallery" class="button button-fab button-fab-top-right expanded button-energized-900 drop"><i class="icon ion-heart"></i></button>',
                        controller: function ($timeout) {
                            $timeout(function () {
                                document.getElementById('fab-gallery').classList.toggle('on');
                            }, 600);
                        }
                    }
                }
            })

            .state('app.login', {
                url: '/login',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/login.html',
                        controller: 'LoginCtrl'
                    },
                    'fabContent': {
                        template: ''
                    }
                }
            })

            .state('app.profile', {
                url: '/profile',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/profile.html',
                        controller: 'ProfileCtrl'
                    },
                    'fabContent': {
                        template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-chatbubbles"></i></button>',
                        controller: function ($timeout) {
                            /*$timeout(function () {
                             document.getElementById('fab-profile').classList.toggle('on');
                             }, 800);*/
                        }
                    }
                }
            })
            .state('app.main', {
                url: '/main',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/main.html',
                        controller: 'MainCtrl'
                    },
                    'fabContent': {
                        template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-chatbubbles"></i></button>',
                        controller: function ($timeout) {
                            /*$timeout(function () {
                             document.getElementById('fab-profile').classList.toggle('on');
                             }, 800);*/
                        }
                    }
                }
            })
            .state('app.brohelp', {
                url: '/brohelp',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/brohelp.main.html',
                        controller: 'BroHelpCtrl'
                    },
                    'fabContent': {
                        controller: function ($timeout) {
                            /*$timeout(function () {
                             document.getElementById('fab-profile').classList.toggle('on');
                             }, 800);*/
                        }
                    }
                }
            })


            //.state('app.tasks', {
            //    url: '/tasks',
            //    views: {
            //        'menuContent': {
            //            templateUrl: 'templates/task.list.html',
            //            controller: 'BroHelpCtrl'
            //        },
            //        'fabContent': {
            //            template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-chatbubbles"></i></button>',
            //            controller: function ($timeout) {
            //                /*$timeout(function () {
            //                 document.getElementById('fab-profile').classList.toggle('on');
            //                 }, 800);*/
            //            }
            //        }
            //    }
            //})

            .state('app.tasks', {
                url: '/tasks',
                abstract: true,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/task.html',
                        controller: 'BroHelpCtrl'
                    },
                    'fabContent': {
                        template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-chatbubbles"></i></button>',
                        controller: function ($timeout) {
                            /*$timeout(function () {
                             document.getElementById('fab-profile').classList.toggle('on');
                             }, 800);*/
                        }
                    }
                }
            })
            .state('app.tasks.list', {
                url: '/list',
                templateUrl: 'templates/task.list.html',
                controller: 'BroHelpCtrl'
            })

            .state('app.tasks.detail', {
                url: '/:id',
                templateUrl: 'templates/task.detail.html',
                controller: 'TaskCtrl'
            })
            .state('app.brommunity', {
                url: '/brommunity',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/brommunity.html',
                        controller: 'ActivityCtrl'
                    },
                    'fabContent': {
                        template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-chatbubbles"></i></button>',
                        controller: function ($timeout) {
                            /*$timeout(function () {
                             document.getElementById('fab-profile').classList.toggle('on');
                             }, 800);*/
                        }
                    }
                }
            })
        ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/login');
    });
