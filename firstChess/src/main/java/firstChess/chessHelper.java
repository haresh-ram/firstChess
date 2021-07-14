package firstChess;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.IOException;
import java.util.*;

@ServerEndpoint("/chessHelper")
public class chessHelper {
	
	static Set<Session> users = Collections.synchronizedSet(new HashSet<Session>());
	JSONParser parser = new JSONParser();
	
	@OnOpen
	public void open(Session session) {
			users.add(session);
	}
	
	@OnClose
	public void close(Session session) {
		users.remove(session);
	}
	
	@OnMessage
	public void message(String str, Session session) throws IOException {		
		
		String gameCode="";
		if(session.getUserProperties().get("gameCode") == null) {
			session.getUserProperties().put("gameCode", str);
		}else {
		
			try {
				Object obj = parser.parse(str);
				JSONObject json = (JSONObject) obj;
				gameCode = (String) json.get("code");
			} catch (ParseException e) {
				e.printStackTrace();
			}
			
			gameCode = (String) session.getUserProperties().get("gameCode");
			
			for(Session sess : users) {
				String code = (String) sess.getUserProperties().get("gameCode");
				if(code.equals(gameCode))
				sess.getBasicRemote().sendText(str);
			}
		}
		
	}
	
}
