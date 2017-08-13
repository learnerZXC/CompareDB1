$(document).ready(function(){

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
                var trH = "<thead><tr><td>数据库名</td><td>数据表名</td></tr></thead>";
                var trB = "<tbody>"
                $.each(dbData, function (n, value) {
                    trB += "<tr><td>"+ value.db1Name +"</td><td>"+value.db1TableName+"</td></tr>";
                })
                trB += "</tbody>"
                table = trH + trB;
                $("#table-title").text("两数据库互不存在的表有：");
                $("#resultTable").html(table);
            }
        });
    });

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
                var dbData = data;
                var table;
                var trH = "<thead><tr><td>数据库名</td><td>数据表名</td><td >列名</td></tr></thead>";
                var trB = "<tbody>"
                $.each(dbData, function (n, value) {
                    trB += "<tr><td>"+ value.db1Name +"</td><td>"+value.db1TableName+"</td><td >"+value.db1ColumnName+"</td></tr>";
                })
                trB += "</tbody>"
                table = trH + trB;
                $("#table-title").text("两数据库中相同表 列名不一致的有：");
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
                var dbData = data;
                var table;
                var trH = "<thead><tr><td>数据库名</td><td>数据表名</td><td>列名</td><td>数据类型</td><td >数据库名</td><td>数据表名</td><td>列名</td><td>数据类型</td></tr></thead>";
                var trB = "<tbody>"
                $.each(dbData, function (n, value) {
                    trB += "<tr><td>"+ value.db1Name +"</td><td>"+value.db1TableName+"</td><td >"+value.db1ColumnName+"</td><td>"+value.db1DataType+"</td><td>"+ value.db2Name +"</td><td>"+value.db2TableName+"</td><td >"+value.db2ColumnName+"</td><td>"+value.db2DataType+"</td></tr>";
                })
                trB += "</tbody>"
                table = trH + trB;
                $("#table-title").text("两数据库中相同表 相同列名 数据类型不一致的有：");
                $("#resultTable").html(table);
            }
        });
    });

    $("#compareColumnTypeBetweenSameTableName").click(function(){
        $.post("compare/compareColumnTypeBetweenSameTableName", {
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
                var trH = "<thead><tr><td>数据库名</td><td>数据表名</td><td>列名</td><td>数据类型</td><td>数据类型长度</td><td >数据库名</td><td>数据表名</td><td>列名</td><td>数据类型</td><td>数据类型长度</td></tr></thead>";
                var trB = "<tbody>"
                $.each(dbData, function (n, value) {
                    trB += "<tr><td>"+ value.db1Name +"</td><td>"+value.db1TableName+"</td><td>"+value.db1ColumnName+"</td><td>"+value.db1DataType+"</td><td>"+value.db1ColunmType+"</td><td>"+ value.db2Name +"</td><td>"+value.db2TableName+"</td><td >"+value.db2ColumnName+"</td><td>"+value.db2DataType+"</td><td>"+value.db2ColunmType+"</td></tr>";
                })
                trB += "</tbody>"
                table = trH + trB;
                $("#table-title").text("两数据库中相同表 相同列名 数据类型相同 数据类型长度不一致的有：");
                $("#resultTable").html(table);
            }
        });
    });

    $("#compareColumnIsNullBetweenSameTableName").click(function(){
        $.post("compare/compareColumnIsNullBetweenSameTableName", {
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
                var trH = "<thead><tr><td>数据库名</td><td>数据表名</td><td>列名</td><td>是否可为空</td><td >数据库名</td><td>数据表名</td><td>列名</td><td>是否可为空</td></tr></thead>";
                var trB = "<tbody>"
                $.each(dbData, function (n, value) {
                    trB += "<tr><td>"+ value.db1Name +"</td><td>"+value.db1TableName+"</td><td>"+value.db1ColumnName+"</td><td>"+value.db1ColumnIsNull+"</td><td>"+ value.db2Name +"</td><td>"+value.db2TableName+"</td><td >"+value.db2ColumnName+"</td><td>"+value.db2ColumnIsNull+"</td></tr>";
                })
                trB += "</tbody>"
                table = trH + trB;
                $("#table-title").text("两数据库中相同表 相同列名 数据类型相同 数据类型是否可为空不一致的有：");
                $("#resultTable").html(table);
            }
        });
    });

    $("#compareColumnDefaultValueBetweenSameTableName").click(function(){
        $.post("compare/compareColumnDefaultValueBetweenSameTableName", {
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
                var trH = "<thead><tr><td>数据库名</td><td>数据表名</td><td>列名</td><td>数据类型</td><td>默认值</td><td >数据库名</td><td>数据表名</td><td>列名</td><td>数据类型</td><td>默认值</td></tr></thead>";
                var trB = "<tbody>"
                $.each(dbData, function (n, value) {
                    trB += "<tr><td>"+ value.db1Name +"</td><td>"+value.db1TableName+"</td><td>"+value.db1ColumnName+"</td><td>"+value.db1DataType+"</td><td>"+value.db1ColumnDefault+"</td><td>"+ value.db2Name +"</td><td>"+value.db2TableName+"</td><td >"+value.db2ColumnName+"</td><td>"+value.db2DataType+"</td><td>"+value.db2ColumnDefault+"</td></tr>";
                })
                trB += "</tbody>"
                table = trH + trB;
                $("#table-title").text("两数据库中相同表 相同列名 数据类型相同 默认值不一致的有：");
                $("#resultTable").html(table);
            }
        });
    });
});