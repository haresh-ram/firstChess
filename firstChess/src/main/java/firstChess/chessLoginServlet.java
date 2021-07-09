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
   		
   		if(action!=null && action.contains("logout")) {
   			
   			HttpSession session = request.getSession();
   			session.removeAttribute(email);
   			session.invalidate();
   			response.sendRedirect("index.html");
   			
   		}else if(action!=null && action.contains("loginPriorCheck")) {

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
   			
   			
   		}else if(action!=null && action.contains("actualLogin")) {
   			
   			try {
				HttpSession session = request.getSession();
				session.setAttribute("email", email);
				response.sendRedirect("dash.jsp");
			
   			} catch (Exception e) {
   				e.printStackTrace();
   			}
   			
   		}else if(action!=null && action.contains("actualSignUp")) {
   			
   			try {
    			chessDAO.addUser(username, password, email, country);
    			response.sendRedirect("index.html");
			} catch (Exception e) {
				e.printStackTrace();
			}
   			
   		}else if(action!=null && action.contains("signUpPriorCheck")) {
   			
   			try {
				boolean value = chessDAO.emailAvailability(email);
				if(value==true)
					response.getWriter().print("true");
				else
					response.getWriter().print("false");
			} catch (Exception e) {
				e.printStackTrace();
			}

   			
   		}
   		

   	}
}