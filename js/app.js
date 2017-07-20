
angular.module('starter', ['ionic', 'starter.home','starter.sale'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
//设置路由
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('home', {
    url: '/home',
        views:{
          'home':{
              templateUrl: 'templates/home/home.html',
              controller:'homeCtrl'
          }
        }
  })

      .state('sale', {
          url: '/sale',
          views:{
              'sale':{
                  templateUrl: 'templates/sale/sale.html',
                  controller:'saleCtrl'
              }
          }
      })
      //购票详情路由配置
      // .state('sale-detail',{
      //     url:'/sail/:saleId',
      //     views:{
      //         sail:{
      //             templateURL:'templates/sale/sale-detail.html',
      //             // controller:'saleDetailCtrl'
      //         }
      //     }
      // })

      .state('mall', {
          url: '/mall',
          views:{
              'mall':{
                  templateUrl: 'templates/mall/mall.html',
                  // controller:'mallCtrl'
              }
          }
      })
      .state('find', {
          url: '/find',
          views:{
              'find':{
                  templateUrl: 'templates/find/find.html',
                  // controller:'findCtrl'
              }
          }
      })
      .state('mine', {
          url: '/mine',
          views:{
              'mine':{
                  templateUrl: 'templates/mine/mine.html',
                  // controller:'mineCtrl'
              }
          }
      })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
