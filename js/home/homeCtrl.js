/**
 * Created by cz on 2017/4/19.
 */
var home = angular.module('starter.home',[]);
// home.controller('homeCtrl',['$scope,','$http','$timeout','$ionicSideMenuDelegate',function ($scope,$http,$timeout,$ionicSideMenuDelegate) {
//
// }])

home.controller('homeCtrl',function ($scope,$http,$timeout,$ionicSlideBoxDelegate) {
//请求数据耗时 ng-if
    $scope.loading = false;
    function requestData() {
        $timeout(function () {
           var url1 = 'js/home/index.json';
           $http.get(url1).then(function(data){
                // console.log(data);
                $scope.pic = data.data.data.topPosters;
                $scope.loading = true;
                //    更新 轮播图指令
                $ionicSlideBoxDelegate.update();
                $scope.data =data.data.data.mallRecommends;
            })

            //    横向滚动
            var url2= "js/home/list.json";
            $http.get(url2).then(function (data) {
                // console.log(data.data.movies);
                $scope.picScroll= data.data.movies;
            })
            var url3 = "js/home/mtime1.json";
            $http.get(url3).then(function (data) {
                // console.log(data.data.data);
                $scope.mtime = data.data.data;
            })

        },500)


    }

    requestData();
//    下拉刷新
    $scope.doRefresh = function (){
        requestData();
        $scope.$broadcast('scroll.refreshComplete');

    }




})