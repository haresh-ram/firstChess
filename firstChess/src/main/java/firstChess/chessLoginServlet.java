package firstChess;

import java.io.IOException;
import java.sql.SQLException;

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

   		}


   	}
}