package com.zxc.entity;

/*
 * 连接数据库信息的实体类
 */
public class ConnectionMessage {
	private String ip; //数据库IP
	private String port; //端口号
	private String userName; //用户名
	private String password; //密码
	private String db1Name; //数据库1名称
	private String db2Name; //数据库2名称
	
	public ConnectionMessage(String ip, String port, String userName, String password) {
		super();
		this.ip = ip;
		this.port = port;
		this.userName = userName;
		this.password = password;
	}
	
	
	
	public ConnectionMessage(String ip, String port, String userName, String password, String db1Name, String db2Name) {
		super();
		this.ip = ip;
		this.port = port;
		this.userName = userName;
		this.password = password;
		this.db1Name = db1Name;
		this.db2Name = db2Name;
	}



	public ConnectionMessage() {
		super();
	}



	public String getIp() {
		return ip;
	}
	public void setIp(String ip) {
		this.ip = ip;
	}
	public String getPort() {
		return port;
	}
	public void setPort(String port) {
		this.port = port;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getDb1Name() {
		return db1Name;
	}
	public void setDb1Name(String db1Name) {
		this.db1Name = db1Name;
	}
	public String getDb2Name() {
		return db2Name;
	}
	public void setDb2Name(String db2Name) {
		this.db2Name = db2Name;
	}
	
	
}
