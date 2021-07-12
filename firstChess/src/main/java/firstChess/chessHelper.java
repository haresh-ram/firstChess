package firstChess;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import java.io.IOException;
import java.util.*;

@ServerEndpoint("/chessHelper")
public class chessHelper {
	
	static Set<Session> users = Collections.synchronizedSet(new HashSet<Session>());
	static int i=0;
	
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
		
		
		Iterator<Session> itr = users.iterator();
			while(itr.hasNext()) {
				
				itr.next().getBasicRemote().sendText(str);
			}
		
	}
	
}
