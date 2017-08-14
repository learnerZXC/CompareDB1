package com.zxc.controller;


import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zxc.entity.*;
import com.zxc.service.CompareService;

@Controller
@RequestMapping("/compare") 
public class CompareController {
	
	@Autowired
	private CompareService compareService;
	
	//比较两个数据库中相同表名的不同字段
	@ResponseBody
	@RequestMapping(value="/compareColumnBetweenSameTableName", produces = "application/json; charset=utf-8",method=RequestMethod.GET)
	public ResponseEntity<?> compareColumnBetweenSameTableName(ConnectionMessage connectionMessage){
		List<CompareResult> resultsList;
		try {
			resultsList = compareService.compareColumnBetweenSameTableName(connectionMessage);
			return new ResponseEntity<>(resultsList,HttpStatus.OK);
		} catch (SQLException e) {
			String errorMessage;
			errorMessage = e +" <== error";
			return new ResponseEntity<>(errorMessage,HttpStatus.BAD_REQUEST);
		}
	}
	
	//比较两个数据库中互相不存在的表
	@ResponseBody
	@RequestMapping(value="/compareTableBetweenDifferentDB",produces = "application/json; charset=utf-8", method=RequestMethod.GET)
	public ResponseEntity<?> compareTableBetweenDifferentDB(ConnectionMessage connectionMessage){
		List<CompareResult> resultsList;
		try {
			resultsList = compareService.compareTableBetweenDifferentDB(connectionMessage);
			return new ResponseEntity<>(resultsList,HttpStatus.OK);
		} catch (SQLException e) {
			String errorMessage;
			errorMessage = e +" <== error";
			return new ResponseEntity<>(errorMessage,HttpStatus.BAD_REQUEST);
		}
	}
	
	//比较两个数据库相同表的字段不为空是否相同
	@ResponseBody
	@RequestMapping(value="/compareColumnIsNullBetweenSameTableName",produces = "application/json; charset=utf-8", method=RequestMethod.GET)
	public ResponseEntity<?> compareColumnIsNullBetweenSameTableName(ConnectionMessage connectionMessage){
		List<CompareResult> resultsList;
		try {
			resultsList = compareService.compareColumnIsNullBetweenSameTableName(connectionMessage);
			return new ResponseEntity<>(resultsList,HttpStatus.OK);
		} catch (SQLException e) {
			String errorMessage;
			errorMessage = e +" <== error";
			return new ResponseEntity<>(errorMessage,HttpStatus.BAD_REQUEST);
		}
	}
	
	//比较两个数据库相同表的字段默认值是否相同
	@ResponseBody
	@RequestMapping(value="/compareColumnDefaultValueBetweenSameTableName",produces = "application/json; charset=utf-8", method=RequestMethod.GET)
	public ResponseEntity<?> compareColumnDefaultValueBetweenSameTableName(ConnectionMessage connectionMessage){
		List<CompareResult> resultsList;
		try {
			resultsList = compareService.compareColumnDefaultValueBetweenSameTableName(connectionMessage);
			return new ResponseEntity<>(resultsList,HttpStatus.OK);
		} catch (SQLException e) {
			String errorMessage;
			errorMessage = e +" <== error";
			return new ResponseEntity<>(errorMessage,HttpStatus.BAD_REQUEST);
		}
		
	}
	
	//比较两个数据库相同表的字段数据类型是否相同
	@ResponseBody
	@RequestMapping(value="/compareDataTypeBetweenSameTableName",produces = "application/json; charset=utf-8", method=RequestMethod.GET)
	public ResponseEntity<?> compareDataTypeBetweenSameTableName(ConnectionMessage connectionMessage){
		List<CompareResult> resultsList;
		try {
			resultsList = compareService.compareDataTypeBetweenSameTableName(connectionMessage);
			return new ResponseEntity<>(resultsList,HttpStatus.OK);
		} catch (SQLException e) {
			String errorMessage;
			errorMessage = e +" <== error";
			return new ResponseEntity<>(errorMessage,HttpStatus.BAD_REQUEST);
		}
	}
	
	//比较两个数据库相同表的字段数据类型的长度是否相同
	@ResponseBody
	@RequestMapping(value="/compareColumnTypeBetweenSameTableName", produces = "application/json; charset=utf-8",method=RequestMethod.GET)
	public ResponseEntity<?> compareColumnTypeBetweenSameTableName(ConnectionMessage connectionMessage){
		List<CompareResult> resultsList;
		try {
			resultsList = compareService.compareColumnTypeBetweenSameTableName(connectionMessage);
			return new ResponseEntity<>(resultsList, HttpStatus.OK);
		} catch (SQLException e) {
			String errorMessage;
	        errorMessage = e + " <== error";
	        return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
		}
	}
}
