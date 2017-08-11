package com.zxc.controller;


import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	
	@ResponseBody
	@RequestMapping(value="/compareColumnBetweenSameTableName", method=RequestMethod.POST)
	public List<CompareResult> compareColumnBetweenSameTableName(ConnectionMessage connectionMessage) throws SQLException{
		List<CompareResult> resultsList = compareService.compareColumnBetweenSameTableName(connectionMessage);
		return resultsList;
	}
}
