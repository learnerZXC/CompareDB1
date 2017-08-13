package com.zxc.controller;

import java.sql.SQLException;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.zxc.entity.CompareResult;
import com.zxc.entity.ConnectionMessage;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CompareControllerTest {
	
	@Autowired
	private CompareController compareController;
	
	@Test
	public void compareColumnBetweenSameTableNameTest() throws SQLException {
		ConnectionMessage connectionMessage = new ConnectionMessage("127.0.0.1","3306","root","echoecho","db3","db4");
		List<CompareResult> resultsList = compareController.compareColumnBetweenSameTableName(connectionMessage);
		System.out.println(resultsList.size());
		for(int i = 0;i < resultsList.size();i++) {
			System.out.println(resultsList.get(i).getDb1ColumnName());
		}
	}
	
	@Test
	public void compareTableBetweenDifferentDBTest() throws SQLException {
		ConnectionMessage connectionMessage = new ConnectionMessage("127.0.0.1","3306","root","mysql","db1","db2");
		List<CompareResult> resultsList = compareController.compareTableBetweenDifferentDB(connectionMessage);
		
		System.out.println(resultsList.size());
		for(int i = 0;i < resultsList.size();i++) {
			System.out.println(resultsList.get(i).getDb1Name()+":"+resultsList.get(i).getDb1TableName());
		}
	}
	
	@Test
	public void compareColumnIsNullBetweenSameTableNameTest() throws SQLException {
		ConnectionMessage connectionMessage = new ConnectionMessage("127.0.0.1","3306","root","mysql","db1","db2");
		List<CompareResult> resultsList = compareController.compareColumnIsNullBetweenSameTableName(connectionMessage);
		System.out.println(resultsList.get(0).getDb1TableName());
	}
	
	@Test
	public void compareColumnDefaultValueIsNullBetweenSameTableNameTest() throws SQLException {
		ConnectionMessage connectionMessage = new ConnectionMessage("127.0.0.1","3306","root","mysql","db1","db2");
		List<CompareResult> resultsList = compareController.compareColumnDefaultValueIsNullBetweenSameTableName(connectionMessage);
		System.out.println(resultsList.get(0).getDb1TableName());
	}
	
	@Test
	public void compareDataTypeBetweenSameTableNameTest() throws SQLException {
		ConnectionMessage connectionMessage = new ConnectionMessage("127.0.0.1","3306","root","mysql","db1","db2");
		List<CompareResult> resultsList = compareController.compareDataTypeBetweenSameTableName(connectionMessage);
		System.out.println(resultsList.get(0).getDb1TableName());
	}
	
	@Test
	public void compareColumnTypeBetweenSameTableNameTest() throws SQLException {
		ConnectionMessage connectionMessage = new ConnectionMessage("127.0.0.1","3306","root","mysql","db1","db2");
		List<CompareResult> resultsList = compareController.compareColumnTypeBetweenSameTableName(connectionMessage);
		System.out.println(resultsList.get(0).getDb1TableName());
	}
}
