package firstChess;

import java.sql.*;

public class chessDAO {
	
	static Connection con;
	
	public chessDAO() throws ClassNotFoundException, SQLException {
		
		Class.forName("com.mysql.jdbc.Driver");
		con = DriverManager.getConnection("jdbc:mysql://localhost:3306/chessbase","root","Hr7301$%");
	}
	
	public static boolean loginCheck(String email, String password) throws ClassNotFoundException, SQLException {
		
		new chessDAO();
		PreparedStatement statement = con.prepareStatement("select * from user where email = ? and password = ?");
		
		statement.setString(1, email);
		statement.setString(2, password);
		
		ResultSet rs = statement.executeQuery();
		
		if(rs.next())
			return true;
		else
			return false;
			
		
	}
	
	public static void addUser(String username, String password, String email, String country) throws ClassNotFoundException, SQLException {
		new chessDAO();
		PreparedStatement statement = con.prepareStatement("insert into user(username,password,email,country) values (?,?,?,?)");
		
		statement.setString(1, username);
		statement.setString(2, password);
		statement.setString(3, email);
		statement.setString(4, country);
		
		statement.executeUpdate();
		
	}
	
	public static boolean emailAvailability(String email) throws SQLException, ClassNotFoundException {
		new chessDAO();
		PreparedStatement statement = con.prepareStatement("select * from user where email = ?");
		
		statement.setString(1, email);
		
		ResultSet rs = statement.executeQuery();
		
		if(rs.next())
			return false;
		else
			return true;
	
	}
	
	
}
