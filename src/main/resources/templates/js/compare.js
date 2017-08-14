$(document).ready(function(){

    function clearExistTable() {
        $("#error-message").css('display', 'none');
        $("#error-message").css('display', 'none');

        $("#table-title-compareTableBetweenDifferentDB").css('display', 'none');
        $("#resultTable-compareTableBetweenDifferentDB").css('display', 'none');

        $("#table-title-compareColumnBetweenSameTableName").css('display', 'none');
        $("#resultTable-compareColumnBetweenSameTableName").css('display', 'none');

        $("#table-title-compareDataTypeBetweenSameTableName").css('display', 'none');
        $("#resultTable-compareDataTypeBetweenSameTableName").css('display', 'none');

        $("#table-title-compareColumnTypeBetweenSameTableName").css('display', 'none');
        $("#resultTable-compareColumnTypeBetweenSameTableName").css('display', 'none');

        $("#table-title-compareColumnIsNullBetweenSameTableName").css('display', 'none');
        $("#resultTable-compareColumnIsNullBetweenSameTableName").css('display', 'none');

        $("#table-title-compareColumnDefaultValueBetweenSameTableName").css('display', 'none');
        $("#resultTable-compareColumnDefaultValueBetweenSameTableName").css('display', 'none');
    }


    function compareTableBetweenDifferentDB() {
        $.get("compare/compareTableBetweenDifferentDB", {
            "ip": $("#ip").val(),
            "port": $("#port").val(),
            "userName": $("#userName").val(),
            "password": $("#password").val(),
            "db1Name": $("#db1Name").val(),
            "db2Name": $("#db2Name").val()
        },function(data){
            var dbData = data;
            var table;
            var trH = "<thead><tr><td>数据库名</td><td>数据表名</td></tr></thead>";
            var trB = "<tbody>"
            $.each(dbData, function (n, value) {
                trB += "<tr><td>"+ value.db1Name +"</td><td>"+value.db1TableName+"</td></tr>";
            })
            trB += "</tbody>"
            table = trH + trB;
            $("#table-title-compareTableBetweenDifferentDB").css('display', '');
            $("#resultTable-compareTableBetweenDifferentDB").css('display', '');
            $("#table-title-compareTableBetweenDifferentDB").text("两数据库互不存在的表有：");
            $("#resultTable-compareTableBetweenDifferentDB").html(table);
        }).fail(function() {
            $("#error-message").css('display', '');
            $("#error-message").text("数据库连接失败...");
        });
    }

    function compareColumnBetweenSameTableName() {
        $.get("compare/compareColumnBetweenSameTableName", {
            "ip": $("#ip").val(),
            "port": $("#port").val(),
            "userName": $("#userName").val(),
            "password": $("#password").val(),
            "db1Name": $("#db1Name").val(),
            "db2Name": $("#db2Name").val()
        },function(data){
            var dbData = data;
            var table;
            var trH = "<thead><tr><td>数据库名</td><td>数据表名</td><td >列名</td></tr></thead>";
            var trB = "<tbody>"
            $.each(dbData, function (n, value) {
                trB += "<tr><td>"+ value.db1Name +"</td><td>"+value.db1TableName+"</td><td >"+value.db1ColumnName+"</td></tr>";
            })
            trB += "</tbody>"
            table = trH + trB;
            $("#table-title-compareColumnBetweenSameTableName").css('display', '');
            $("#resultTable-compareColumnBetweenSameTableName").css('display', '');
            $("#table-title-compareColumnBetweenSameTableName").text("两数据库中相同表 列名不一致的有：");
            $("#resultTable-compareColumnBetweenSameTableName").html(table);
        }).fail(function() {
            $("#error-message").css('display', '');
            $("#error-message").text("数据库连接失败...");
        });
    }

    function compareDataTypeBetweenSameTableName() {
        $.get("compare/compareDataTypeBetweenSameTableName", {
            "ip": $("#ip").val(),
            "port": $("#port").val(),
            "userName": $("#userName").val(),
            "password": $("#password").val(),
            "db1Name": $("#db1Name").val(),
            "db2Name": $("#db2Name").val()
        },function(data){
            var dbData = data;
            var table;
            var trH = "<thead><tr><td>数据库名</td><td>数据表名</td><td>列名</td><td>数据类型</td><td >数据库名</td><td>数据表名</td><td>列名</td><td>数据类型</td></tr></thead>";
            var trB = "<tbody>"
            $.each(dbData, function (n, value) {
                trB += "<tr><td>"+ value.db1Name +"</td><td>"+value.db1TableName+"</td><td >"+value.db1ColumnName+"</td><td>"+value.db1DataType+"</td><td>"+ value.db2Name +"</td><td>"+value.db2TableName+"</td><td >"+value.db2ColumnName+"</td><td>"+value.db2DataType+"</td></tr>";
            })
            trB += "</tbody>"
            table = trH + trB;
            $("#table-title-compareDataTypeBetweenSameTableName").css('display', '');
            $("#resultTable-compareDataTypeBetweenSameTableName").css('display', '');
            $("#table-title-compareDataTypeBetweenSameTableName").text("两数据库中相同表 相同列名 数据类型不一致的有：");
            $("#resultTable-compareDataTypeBetweenSameTableName").html(table);
        }).fail(function() {
            $("#error-message").css('display', '');
            $("#error-message").text("数据库连接失败...");
        });
    }

    function compareColumnTypeBetweenSameTableName() {
        $.get("compare/compareColumnTypeBetweenSameTableName", {
            "ip": $("#ip").val(),
            "port": $("#port").val(),
            "userName": $("#userName").val(),
            "password": $("#password").val(),
            "db1Name": $("#db1Name").val(),
            "db2Name": $("#db2Name").val()
        },function(data){
            var dbData = data;
            var table;
            var trH = "<thead><tr><td>数据库名</td><td>数据表名</td><td>列名</td><td>数据类型</td><td>数据类型长度</td><td >数据库名</td><td>数据表名</td><td>列名</td><td>数据类型</td><td>数据类型长度</td></tr></thead>";
            var trB = "<tbody>"
            $.each(dbData, function (n, value) {
                trB += "<tr><td>"+ value.db1Name +"</td><td>"+value.db1TableName+"</td><td>"+value.db1ColumnName+"</td><td>"+value.db1DataType+"</td><td>"+value.db1ColunmType+"</td><td>"+ value.db2Name +"</td><td>"+value.db2TableName+"</td><td >"+value.db2ColumnName+"</td><td>"+value.db2DataType+"</td><td>"+value.db2ColunmType+"</td></tr>";
            })
            trB += "</tbody>"
            table = trH + trB;
            $("#table-title-compareColumnTypeBetweenSameTableName").css('display', '');
            $("#resultTable-compareColumnTypeBetweenSameTableName").css('display', '');
            $("#table-title-compareColumnTypeBetweenSameTableName").text("两数据库中相同表 相同列名 数据类型相同 数据类型长度不一致的有：");
            $("#resultTable-compareColumnTypeBetweenSameTableName").html(table);
        }).fail(function() {
            $("#error-message").css('display', '');
            $("#error-message").text("数据库连接失败...");
        });
    }

    function compareColumnIsNullBetweenSameTableName() {
        $.get("compare/compareColumnIsNullBetweenSameTableName", {
            "ip": $("#ip").val(),
            "port": $("#port").val(),
            "userName": $("#userName").val(),
            "password": $("#password").val(),
            "db1Name": $("#db1Name").val(),
            "db2Name": $("#db2Name").val()
        },function(data){
            var dbData = data;
            var table;
            var trH = "<thead><tr><td>数据库名</td><td>数据表名</td><td>列名</td><td>是否可为空</td><td >数据库名</td><td>数据表名</td><td>列名</td><td>是否可为空</td></tr></thead>";
            var trB = "<tbody>"
            $.each(dbData, function (n, value) {
                trB += "<tr><td>"+ value.db1Name +"</td><td>"+value.db1TableName+"</td><td>"+value.db1ColumnName+"</td><td>"+value.db1ColumnIsNull+"</td><td>"+ value.db2Name +"</td><td>"+value.db2TableName+"</td><td >"+value.db2ColumnName+"</td><td>"+value.db2ColumnIsNull+"</td></tr>";
            })
            trB += "</tbody>"
            table = trH + trB;
            $("#table-title-compareColumnIsNullBetweenSameTableName").css('display', '');
            $("#resultTable-compareColumnIsNullBetweenSameTableName").css('display', '');
            $("#table-title-compareColumnIsNullBetweenSameTableName").text("两数据库中相同表 相同列名 数据类型相同 数据类型是否可为空不一致的有：");
            $("#resultTable-compareColumnIsNullBetweenSameTableName").html(table);
        }).fail(function() {
            $("#error-message").css('display', '');
            $("#error-message").text("数据库连接失败...");
        });
    }

    function compareColumnDefaultValueBetweenSameTableName() {
        $.get("compare/compareColumnDefaultValueBetweenSameTableName", {
            "ip": $("#ip").val(),
            "port": $("#port").val(),
            "userName": $("#userName").val(),
            "password": $("#password").val(),
            "db1Name": $("#db1Name").val(),
            "db2Name": $("#db2Name").val()
        },function(data){
            var dbData = data;
            var table;
            var trH = "<thead><tr><td>数据库名</td><td>数据表名</td><td>列名</td><td>数据类型</td><td>默认值</td><td >数据库名</td><td>数据表名</td><td>列名</td><td>数据类型</td><td>默认值</td></tr></thead>";
            var trB = "<tbody>"
            $.each(dbData, function (n, value) {
                trB += "<tr><td>"+ value.db1Name +"</td><td>"+value.db1TableName+"</td><td>"+value.db1ColumnName+"</td><td>"+value.db1DataType+"</td><td>"+value.db1ColumnDefault+"</td><td>"+ value.db2Name +"</td><td>"+value.db2TableName+"</td><td >"+value.db2ColumnName+"</td><td>"+value.db2DataType+"</td><td>"+value.db2ColumnDefault+"</td></tr>";
            })
            trB += "</tbody>"
            table = trH + trB;
            $("#table-title-compareColumnDefaultValueBetweenSameTableName").css('display', '');
            $("#resultTable-compareColumnDefaultValueBetweenSameTableName").css('display', '');
            $("#table-title-compareColumnDefaultValueBetweenSameTableName").text("两数据库中相同表 相同列名 数据类型相同 默认值不一致的有：");
            $("#resultTable-compareColumnDefaultValueBetweenSameTableName").html(table);
        }).fail(function() {
            $("#error-message").css('display', '');
            $("#error-message").text("数据库连接失败...");
        });
    }



    $("#compareAll").click(function(){
        clearExistTable();
        compareTableBetweenDifferentDB();
        compareColumnBetweenSameTableName();
        compareDataTypeBetweenSameTableName();
        compareColumnTypeBetweenSameTableName();
        compareColumnIsNullBetweenSameTableName();
        compareColumnDefaultValueBetweenSameTableName();
    });

    $("#compareTableBetweenDifferentDB").click(function(){
        clearExistTable();
        compareTableBetweenDifferentDB();
    });

    $("#compareColumnBetweenSameTableName").click(function(){
        clearExistTable();
        compareColumnBetweenSameTableName();
    });

    $("#compareDataTypeBetweenSameTableName").click(function(){
        clearExistTable();
        compareDataTypeBetweenSameTableName();
    });

    $("#compareColumnTypeBetweenSameTableName").click(function(){
        clearExistTable();
        compareColumnTypeBetweenSameTableName();
    });

    $("#compareColumnIsNullBetweenSameTableName").click(function(){
        clearExistTable();
        compareColumnIsNullBetweenSameTableName();
    });

    $("#compareColumnDefaultValueBetweenSameTableName").click(function(){
        clearExistTable();
        compareColumnDefaultValueBetweenSameTableName();
    });

});