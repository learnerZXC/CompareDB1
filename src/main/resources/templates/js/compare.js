$(document).ready(function(){
    $("#compareColumnBetweenSameTable").click(function(){
        $.post("compare/compareColumnBetweenSameTableName", {
            "ip": $("#ip").val(),
            "port": $("#port").val(),
            "userName": $("#userName").val(),
            "password": $("#password").val(),
            "db1Name": $("#db1Name").val(),
            "db2Name": $("#db2Name").val()
        },function(data,status){
            alert("数据：" + data + "\n状态：" + status);
        });
    });
});