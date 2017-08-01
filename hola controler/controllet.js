angular.module("MyFirstApp", [])
.controller("FirstController", function ($scope) {
	$scope.nombre="Pablo jajaja";
	$scope.nuevocomentario={comentario:"hola mundo"};
	$scope.comentarios=[
		{
			comentario:"Buen tuto",
			username:"pablo384"
		},
		{
			comentario:"Buena papa",
			username:"lolo258"
		}
	];
	$scope.agregarcomentario = function () {
		$scope.comentarios.push($scope.nuevocomentario);
	}
});