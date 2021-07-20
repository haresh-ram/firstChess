package firstChess;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


public class chessLoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
   		
   		String username = request.getParameter("username");
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		String country = request.getParameter("country");
   		String action = request.getParameter("action");
   		String gameCode = request.getParameter("gameCode");  
   		String color = request.getParameter("color");
   		String pos = request.getParameter("pos");
   		String winColor = request.getParameter("winColor");
   		String loseColor = request.getParameter("loseColor");
   		
   		if(action!=null && action.equals("loginPriorCheck")) {

       		try {
    			boolean value = chessDAO.loginCheck(email, password);
    			
    			if(value == true) {
    				response.getWriter().print("true");
    			}
    			else
    				response.getWriter().print("false");
    			
    		} catch (Exception e) {
    			e.printStackTrace();
    		}
   			
   			
   		}else if(action!=null && action.equals("actualLogin")) {
   			
   			try {
				HttpSession session = request.getSession();
				session.setAttribute("email", email);
				response.sendRedirect("dash.jsp");
			
   			} catch (Exception e) {
   				e.printStackTrace();
   			}
   			
   		}else if(action!=null && action.equals("actualSignUp")) {
   			
   			try {
    			chessDAO.addUser(username, password, email, country);
    			response.sendRedirect("index.jsp");
			} catch (Exception e) {
				e.printStackTrace();
			}
   			
   		}else if(action!=null && action.equals("signUpPriorCheck")) {
   			
   			try {
				boolean value = chessDAO.emailAvailability(email);
				if(value==true)
					response.getWriter().print("true");
				else
					response.getWriter().print("false");
			} catch (Exception e) {
				e.printStackTrace();
			}

   		}else if(action!=null && action.equals("getProfile")) {
   			
   			try {
   				HttpSession session = request.getSession();
				String emailid = (String) session.getAttribute("email");
				String str = chessDAO.getProfile(emailid);
				response.getWriter().print(str);
			} catch (Exception e) {
				e.printStackTrace();
			}

   		}else if(action!=null && action.equals("registerGame")) {
   			try {
				chessDAO.registerGame(gameCode);
			} catch (Exception e) {
				e.printStackTrace();
			} 
   		}else if(action!=null && action.equals("colorAvailability")) {
   			
   			HttpSession session = request.getSession();
			String emailid = (String) session.getAttribute("email");
			
			try {
				boolean value = chessDAO.colorAvailability(gameCode, color, emailid);
				if(value == true) {
					response.getWriter().print("true");
				}else {
					response.getWriter().print("false");
				}
			} catch (Exception e) {
				e.printStackTrace();
			} 
   		}else if(action!=null && action.equals("currentPosUpdate")) {
   			try {
				chessDAO.updateCurrPos(pos,gameCode);
			} catch (Exception e) {
				e.printStackTrace();
			} 
   		}else if(action!=null && action.equals("getSpectatorBoardPos")) {
   			try {
				String str = chessDAO.getCurrPos(gameCode);
				response.getWriter().print(str);
			} catch (Exception e) {
				e.printStackTrace();
			} 
   		}else if(action!=null && action.equals("joinCheck")) {
   			try {
				boolean value = chessDAO.joinCheck(gameCode);
				if(value == false)
					response.getWriter().print("false");
				else
					response.getWriter().print("true");
			} catch (Exception e) {
				e.printStackTrace();
			} 
   		}else if(action!=null && action.equals("winnerUpdate")) {
   			try {
				chessDAO.winnerUpdate(gameCode, winColor, loseColor);
			} catch (Exception e) {
				e.printStackTrace();
			} 
   		}
   	}
}
