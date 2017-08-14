package com.zxc.controller;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.zxc.entity.ConnectionMessage;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CompareControllerTest {
	
	@Autowired
	private CompareController compareController;
	
	@Test
	public void compareColumnBetweenSameTableNameTest() {
		ConnectionMessage connectionMessage = new ConnectionMessage("127.0.0.1","3306","root","mysql","db3","db4");
		ResponseEntity<?> resultsList = compareController.compareColumnBetweenSameTableName(connectionMessage);
		System.out.println(resultsList.getStatusCodeValue());
		System.out.println(resultsList.getBody());
	}
	
	@Test
	public void compareTableBetweenDifferentDBTest(){
		ConnectionMessage connectionMessage = new ConnectionMessage("127.0.0.1","3306","root","mysql","db3","db4");
		ResponseEntity<?> resultsList = compareController.compareColumnBetweenSameTableName(connectionMessage);
		System.out.println(resultsList.getStatusCodeValue());
		System.out.println(resultsList.getBody());
	}
	
	@Test
	public void compareColumnIsNullBetweenSameTableNameTest(){
		ConnectionMessage connectionMessage = new ConnectionMessage("127.0.0.1","3306","root","mysql","db3","db4");
		ResponseEntity<?> resultsList = compareController.compareColumnBetweenSameTableName(connectionMessage);
		System.out.println(resultsList.getStatusCodeValue());
		System.out.println(resultsList.getBody());
	}
	
	@Test
	public void compareColumnDefaultValueBetweenSameTableNameTest(){
		ConnectionMessage connectionMessage = new ConnectionMessage("127.0.0.1","3306","root","mysql","db3","db4");
		ResponseEntity<?> resultsList = compareController.compareColumnBetweenSameTableName(connectionMessage);
		System.out.println(resultsList.getStatusCodeValue());
		System.out.println(resultsList.getBody());
	}
	
	@Test
	public void compareDataTypeBetweenSameTableNameTest() {
		ConnectionMessage connectionMessage = new ConnectionMessage("127.0.0.1","3306","root","mysql","db3","db4");
		ResponseEntity<?> resultsList = compareController.compareColumnBetweenSameTableName(connectionMessage);
		System.out.println(resultsList.getStatusCodeValue());
		System.out.println(resultsList.getBody());
	}
	
	@Test
	public void compareColumnTypeBetweenSameTableNameTest(){
		ConnectionMessage connectionMessage = new ConnectionMessage("127.0.0.1","3306","root","mysql","db3","db4");
		ResponseEntity<?> resultsList = compareController.compareColumnBetweenSameTableName(connectionMessage);
		System.out.println(resultsList.getStatusCodeValue());
		System.out.println(resultsList.getBody());
	}
}
