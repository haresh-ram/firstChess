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
		int matchesWon = rs.getInt("matchesWon")/2;
		int matchesLost = rs.getInt("matchesLost")/2;
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
				
				PreparedStatement statement2 = con.prepareStatement("update user set matchesPlayed = matchesPlayed +1 where email = ?");
				statement2.setString(1, email);
				statement2.executeUpdate();		
				
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
				
				PreparedStatement statement2 = con.prepareStatement("update user set matchesPlayed = matchesPlayed +1 where email = ?");
				statement2.setString(1, email);
				statement2.executeUpdate();
				
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
	
	public static boolean joinCheck(String gameCode) throws SQLException, ClassNotFoundException {
		connects();
		PreparedStatement statement = con.prepareStatement("select black from matches where matchID = ?");
		statement.setString(1, gameCode);
		ResultSet rs = statement.executeQuery();
		String black="";
		while(rs.next()) {
			black = rs.getString(1); 
		}
		
		if(black==null)
			return false;
		else
			return true;
	}
	
	public static void winnerUpdate(String gameCode, String winColor, String loseColor) throws ClassNotFoundException, SQLException {
		connects();
		PreparedStatement statement = con.prepareStatement("select white, black from matches where matchID = ?");
		statement.setString(1, gameCode);
		ResultSet rs = statement.executeQuery();
		String winEmail = null;
		String loseEmail = null;
		while(rs.next()) {
			if(winColor.equals("white")) {
				winEmail = rs.getString(2);
				loseEmail = rs.getString(1);
				
				PreparedStatement statement3 = con.prepareStatement("update matches set matchResult = ? where matchID = ?");
				statement3.setString(1, "black won the match");
				statement3.setString(2, gameCode);
				statement3.executeUpdate();
				
			}else {
				winEmail = rs.getString(1);
				loseEmail = rs.getString(2);
				
				PreparedStatement statement4 = con.prepareStatement("update matches set matchResult = ? where matchID = ?");
				statement4.setString(1, "white won the match");
				statement4.setString(2, gameCode);
				statement4.executeUpdate();
			}
		}
		
		PreparedStatement statement1 = con.prepareStatement("update user set matchesWon = matchesWon +1 where email = ?");
		statement1.setString(1, winEmail);
		statement1.executeUpdate();
		
		PreparedStatement statement2 = con.prepareStatement("update user set matchesLost = matchesLost +1 where email = ?");
		statement2.setString(1, loseEmail);
		statement2.executeUpdate();
		
		
	}
	
}
