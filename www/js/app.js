// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('mainController', function($scope, $ionicPopup){

  var tarefas = new getTarefas();

  

  $scope.lista = tarefas.itens; 
  $scope.showCard = false;
  $scope.showDelete = false;

  $scope.onMarkTask = function(item){
    //console.log("Item id = "+item.id+" Status Tarefa = "+!item.finalizada);
    item.finalizada = !item.finalizada;
    tarefas.save();
  };

  $scope.onHideCard = function(item){
    //console.log("item status = "+ item.finalizada + " scope status = "+$scope.showCard );
    return item.finalizada && $scope.showCard;
  };

  $scope.onRemoveCard = function(item){
    //console.log("item Deletado = "+ item.id);
    tarefas.remove(item);
    tarefas.save();
  };

  $scope.onShowDelete = function(){
    $scope.showDelete = !$scope.showDelete;
  };

  $scope.onCardAdd = function(){
    var item = {titulo:"",data:"",finalizada:false,texto:""};
    

    getCard(item, true);
  };

  $scope.onCardEdit = function(item){
    getCard(item, false);
  }

  //metodos locais
  function getCard(item, novo){
    $scope.data = {};
    $scope.data.newTitulo = item.titulo;
    $scope.data.newDate = item.data;
    $scope.data.newText = item.texto;


    $ionicPopup.show({
      title: "Nova Tarefa",
      scope: $scope,
      template: "<input type='text' placehoder='Titulo da Tarefa' autofocus='true' ng-model='data.newTitulo'>"+
                "<input type='date' placehoder=''  ng-model='data.newDate'>"+
                "<textarea  placehoder=''  ng-model='data.newText'>",
      buttons:[
        {text:"Confirmar",
         onTap: function(e){
          console.log("Evento");
          item.titulo = $scope.data.newTitulo;
          console.log($scope.data.newTitulo);
          item.data = $scope.data.newDate;
          console.log($scope.data.newDate);
          item.texto = $scope.data.newText;
          console.log($scope.data.newText);

            if(novo){
              tarefas.add(item);
           }
            tarefas.save();
         }},
        {text:"Cancelar"}
        ]

        });
  };
});