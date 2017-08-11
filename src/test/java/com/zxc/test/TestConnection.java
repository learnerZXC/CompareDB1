package com.zxc.test;

import java.sql.Connection;
import java.sql.SQLException;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.zxc.dao.CompareDao;
import com.zxc.entity.ConnectionMessage;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestConnection {
	
	@Autowired
	private CompareDao compareDao ;
	
	@Test
	public void getConnectionTest() throws SQLException {
		ConnectionMessage connectionMessage = new ConnectionMessage("127.0.0.1","3306","root","mysql");
		Connection conn = compareDao.getConnection(connectionMessage);
		System.out.println(conn);
	}
}
