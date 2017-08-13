$(document).ready(function(){
    $("#compareColumnBetweenSameTableName").click(function(){
        $.post("compare/compareColumnBetweenSameTableName", {
            "ip": $("#ip").val(),
            "port": $("#port").val(),
            "userName": $("#userName").val(),
            "password": $("#password").val(),
            "db1Name": $("#db1Name").val(),
            "db2Name": $("#db2Name").val()
        },function(data,status){
            if(status === 'success'){
                alert("success!");
                // var dbData = data;
                // var firstLine = "<tr><td>111</td><td>222</td><td >333</td><td>444</td><td>555</td></tr>";
                // console.log("dbData.length: "+dbData.length);
                // // $("#resultTable").html(firstLine);
                // $.each(dbData, function (n, value) {
                //     console.log(n+"----"+value.db1Name);
                // })
            }
        });
    });

    $("#compareTableBetweenDifferentDB").click(function(){
        $.post("compare/compareTableBetweenDifferentDB", {
            "ip": $("#ip").val(),
            "port": $("#port").val(),
            "userName": $("#userName").val(),
            "password": $("#password").val(),
            "db1Name": $("#db1Name").val(),
            "db2Name": $("#db2Name").val()
        },function(data,status){
            if(status === 'success'){
                var dbData = data;
                var table;
                var trH = "<thead><tr><td>数据库名</td><td>数据表名</td><td >数据库名</td><td>数据表名</td></tr></thead>";
                var trB = "<tbody>"
                $.each(dbData, function (n, value) {
                    trB += "<tr><td>"+ value.db1Name +"</td><td>"+value.db1TableName+"</td><td >"+value.db2Name+"</td><td>"+value.db2TableName+"</td></tr>";
                })
                trB += "</tbody>"
                table = trH + trB;
                $("#table-title").text("两数据库互不存在的表为：");
                $("#resultTable").html(table);
            }
        });
    });

    $("#compareDataTypeBetweenSameTableName").click(function(){
        $.post("compare/compareDataTypeBetweenSameTableName", {
            "ip": $("#ip").val(),
            "port": $("#port").val(),
            "userName": $("#userName").val(),
            "password": $("#password").val(),
            "db1Name": $("#db1Name").val(),
            "db2Name": $("#db2Name").val()
        },function(data,status){
            if(status === 'success'){
                alert("success");
                // var dbData = data;
                // var table;
                // var trH = "<thead><tr><td>数据库名</td><td>数据表名</td><td >数据库名</td><td>数据表名</td></tr></thead>";
                // var trB = "<tbody>"
                // $.each(dbData, function (n, value) {
                //     trB += "<tr><td>"+ value.db1Name +"</td><td>"+value.db1TableName+"</td><td >"+value.db2Name+"</td><td>"+value.db2TableName+"</td></tr>";
                // })
                // trB += "</tbody>"
                // table = trH + trB;
                // $("#table-title").text("两数据库互不存在的表为：");
                // $("#resultTable").html(table);
            }
        });
    });
});