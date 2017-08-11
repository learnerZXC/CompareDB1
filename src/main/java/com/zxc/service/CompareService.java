package com.zxc.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zxc.dao.CompareDao;
import com.zxc.entity.CompareResult;
import com.zxc.entity.ConnectionMessage;

@Service
public class CompareService {
	
	@Autowired
	private CompareDao compareDao;
	
	public List<CompareResult> compareColumnBetweenSameTableName(ConnectionMessage connectionMessage) throws SQLException{
		List<CompareResult> resultsList=compareDao.compareColumnBetweenSameTableName(connectionMessage);
		return resultsList;
	}
}
