angular.module("MyFirstApp", [])
.controller("FirstController", ["$scope","$http",function ($dato,$http) {
	$dato.nombre="Pablo jajaja";
	$dato.nuevocomentario={comentario:"hola mundo"};
	$dato.comentarios=[
		{
			comentario:"Buen tuto",
			username:"pablo384"
		},
		{
			comentario:"Buena papa",
			username:"lolo258"
		}
	];
	$dato.agregarcomentario = function () {
		$dato.comentarios.push($dato.nuevocomentario);
		$dato.nuevocomentario={};
	}
}]);