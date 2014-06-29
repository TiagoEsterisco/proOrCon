'use strict';

angular.module('proconApp')
  .controller('MainCtrl', function($scope) {

    $scope.procon = [
      'Pro',
      'Con'
    ];

    $scope.reason = '';
    $scope.pro = [];
    $scope.con = [];

    $scope.chartConfig = {
      options: {
        chart: {
          type: 'pie'
        }
      },
      series: [{
        data: [
          ['Pro', 0],
          ['Con', 0]
        ]
      }],
      title: {
        text: 'Pro Or Con'
      },

      loading: false
    };



    $scope.addProcon = function() {

      if ($scope.radioSelected === 'Pro') {
        $scope.pro.push($scope.reason);
        $scope.chartConfig.series[0].data[0][1] = $scope.chartConfig.series[0].data[0][1] +1 ;
        console.log($scope.chartConfig.series[0].data[0][1]);

      } else if ($scope.radioSelected === 'Con') {
        $scope.con.push($scope.reason);
        $scope.chartConfig.series[0].data[1][1] = $scope.chartConfig.series[0].data[1][1] +1 ;
      }


      $scope.reason = '';
      $scope.radioSelected = '';
    };






  });