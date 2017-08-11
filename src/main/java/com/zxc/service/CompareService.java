package com.zxc.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zxc.dao.CompareDao;
import com.zxc.entity.CompareResult;
import com.zxc.entity.ConnectionMessage;

@Service
public class CompareService {
	
	@Autowired
	private CompareDao compareDao;
	
	//比较两个数据库中相同表名的不同字段
	public List<CompareResult> compareColumnBetweenSameTableName(ConnectionMessage connectionMessage) throws SQLException{
		List<CompareResult> resultsList=compareDao.compareColumnBetweenSameTableName(connectionMessage);
		return resultsList;
	}
	
	//比较两个数据库中互相不存在的表
	public List<CompareResult> compareTableBetweenDifferentDB(ConnectionMessage connectionMessage) throws SQLException{
		List<CompareResult> resultsList = compareDao.compareTableBetweenDifferentDB(connectionMessage);
		return resultsList;
	}
	
	//比较两个数据库相同表的字段不为空是否相同
		public List<CompareResult> compareColumnIsNullBetweenSameTableName(ConnectionMessage connectionMessage) throws SQLException{
			List<CompareResult> resultsList = compareDao.compareColumnIsNullBetweenSameTableName(connectionMessage);
			return resultsList;
		}
		
	//比较两个数据库相同表的字段默认值是否相同
		public List<CompareResult> compareColumnDefaultValueIsNullBetweenSameTableName(ConnectionMessage connectionMessage) throws SQLException{
			List<CompareResult> resultsList = compareDao.compareColumnDefaultValueIsNullBetweenSameTableName(connectionMessage);
			return resultsList;
		}
	//比较两个数据库相同表的字段数据类型是否相同
		public List<CompareResult> compareDataTypeBetweenSameTableName(ConnectionMessage connectionMessage) throws SQLException{
			List<CompareResult> resultsList = compareDao.compareDataTypeBetweenSameTableName(connectionMessage);
			return resultsList;
		}
	//比较两个数据库相同表的字段数据类型的长度是否相同
		public List<CompareResult> compareColumnTypeBetweenSameTableName(ConnectionMessage connectionMessage) throws SQLException{
			List<CompareResult> resultsList = compareDao.compareColumnTypeBetweenSameTableName(connectionMessage);
			return resultsList;
		}
}
