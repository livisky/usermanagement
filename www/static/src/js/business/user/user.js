var app = angular.module('myApp', ['ui.bootstrap']);

app.service('home',function(){
    return{
        hometown:'东阳'
    }
}).directive("userform", function() {
    return {
        templateUrl :  '/static/temp/add_temp.html',
    };
}).controller('ctrl.utils.modal', function ($scope) {
        var vm = $scope.vm = {};
            vm.modal = {
                title: '标题',
                msg: 'Hello,这是一个由Bootstrap提供的模态框.'
            };
    
}).controller('myCtrl', function($scope,$element,$http) {
    $scope.btnName="新增用户";
    $scope.el=$element;
    $scope.doAdd=function($event){
        var data={
            name:this.el.find(".username").val(),
            age:this.el.find(".age").val()
        }          
        $http.post("http://localhost:8361/home/user/",data)
        .success(function(response) {
                if(!response.errno>0){ alert("添加成功！");}
                window.location.reload();
            }
        ); 
    }
}).controller('editCrl', function($scope,$http,$element) {
    $scope.id=$element.find("#uid").val();
    $scope.isShow=false;
    $scope.el=$element;
    //编辑  
    $scope.doEdit=function(){
            $scope.isShow=true
            $http.get("http://localhost:8361/home/user/"+this.id).success(function(response) {
                    $scope.userList = response.data;
                }
            )     
    } 
    //删除
    $scope.delUser=function($event){
        $http.delete("http://localhost:8361/home/user/"+this.id)
        .success(function(response) {
                if(!response.errno>0){ alert("删除成功！");}
                window.location.reload();
            }
        );          
    }  

    //保存编辑
    $scope.saveEdit=function(){
        var newdata={
            name:this.el.find(".username").val(),
            age:this.el.find(".age").val()
        }      
        $http.put("http://localhost:8361/home/user/"+this.id,newdata)
        .success(function(response) {
                if(!response.errno>0){ alert("更新成功！");}
                window.location.reload();
            }
        );  
    } 
}).directive("edituser", function() {
    return {
        scope:{
            user:'=',
            uid:'=',
            save:'&'
        },
        templateUrl :  '/static/temp/edit_temp.html',
        link:function($scope){
                $scope.btnName="保存"; 
        }
    }
})