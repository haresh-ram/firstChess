package firstChess;

import java.sql.*;



public class chessDAO {
	
	static Connection con;
	
	public static void connects() throws ClassNotFoundException, SQLException {
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		con = DriverManager.getConnection("jdbc:mysql://localhost:3306/chessbase","root","Hr7301$%");
	}
	
	public static boolean loginCheck(String email, String password) throws ClassNotFoundException, SQLException {
		
		connects();
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
		connects();
		PreparedStatement statement = con.prepareStatement("insert into user(username,password,email,country) values (?,?,?,?)");
		
		statement.setString(1, username);
		statement.setString(2, password);
		statement.setString(3, email);
		statement.setString(4, country);
		
		statement.executeUpdate();
		
	}
	
	public static boolean emailAvailability(String email) throws SQLException, ClassNotFoundException {
		connects();
		PreparedStatement statement = con.prepareStatement("select * from user where email = ?");
		
		statement.setString(1, email);
		
		ResultSet rs = statement.executeQuery();
		
		if(rs.next())
			return false;
		else
			return true;
	
	}
	
	public static String getProfile(String email) throws ClassNotFoundException, SQLException {
		connects();
		PreparedStatement statement = con.prepareStatement("select * from user where email = ?");
		
		statement.setString(1, email);
		String str="";
		ResultSet rs = statement.executeQuery();	
		while(rs.next()) {
		String username = rs.getString("username");
		String country = rs.getString("country");
		int matchesWon = rs.getInt("matchesWon");
		int matchesLost = rs.getInt("matchesLost");
		int matchesPlayed = rs.getInt("matchesPlayed");
		int userID = rs.getInt("UserID");
		int matchesDraw = matchesPlayed - (matchesWon + matchesLost);
		
		str = "{\"username\":\""+username+"\",\"country\":\""+country+"\",\"matchesWon\":\""+matchesWon+"\",\"matchesLost\":\""+matchesLost+"\",\"matchesPlayed\":\""+matchesPlayed+"\",\"userID\":\""+userID+"\",\"matchesDraw\":\""+matchesDraw+"\",\"email\":\""+email+"\"}";
		}
		return str;
		
	}
	
	public static void registerGame(String gameCode) throws ClassNotFoundException, SQLException {
		connects();
		PreparedStatement statement = con.prepareStatement("insert into matches(matchID) values (?)");
		statement.setString(1, gameCode);
		statement.executeUpdate();
	}
	
	public static boolean colorAvailability(String gameCode, String color, String email) throws ClassNotFoundException, SQLException {
		connects();
		PreparedStatement statement = con.prepareStatement("select * from matches where matchID = ?");
		statement.setString(1, gameCode);
		ResultSet rs = statement.executeQuery();
		
		String white = null;
		String black = null;
		while(rs.next()) {
			white = rs.getString(2);
			black = rs.getString(3);
		}
		if(color.equals("white")) {
			if(white == null) {
				PreparedStatement statement1 = con.prepareStatement("update matches set white = ? where matchID = ? ");
				statement1.setString(2, gameCode);
				statement1.setString(1, email);
				statement1.executeUpdate();
				return true;
			}
			else
				return false;
		}else {
			if(black == null) {
				PreparedStatement statement1 = con.prepareStatement("update matches set black = ? where matchID = ? ");
				statement1.setString(2, gameCode);
				statement1.setString(1, email);
				statement1.executeUpdate();
				return true;
			}
			else
				return false;
		}
		
		
	}

	public static void updateCurrPos(String pos,String gameCode) throws SQLException, ClassNotFoundException {
		connects();
		PreparedStatement statement = con.prepareStatement("update matches set currentPos = ? where matchID = ?");
		statement.setString(1, pos);
		statement.setString(2, gameCode);
		statement.executeUpdate();
	}
	
	public static String getCurrPos(String gameCode) throws SQLException, ClassNotFoundException {
		connects();
		PreparedStatement statement = con.prepareStatement("select currentPos from matches where matchID = ?");
		statement.setString(1, gameCode);
		ResultSet rs = statement.executeQuery();
		String str = null;
		while(rs.next()) {
			str = rs.getString(1);
		}		
		return str;
		
	}
	
	
}
