# Tribal Server API

## HTTP API

| Method | Endpoint | Querystring |  Description | 
| - | - | - | - |
| `GET`  | `/`      | n/a | Serve up client application.                |
| `GET`  | `/test`  | n/a | Returns text status of database connection. |
| `GET`  | `/tracks` | `trackName`: Search query to send to Spotify | Return Spotify Search API results for specified query.  Results are array of { uri: String, artist: String } | 

## Socket.IO API

Many client/server interactions are done via [Socket.io](https://socket.io) messages.  Sockets provide a bi-directional, real-time communication channel between a client and a server. This means that whenever a client adds a song to a shared playlist, for instance, the server will get it and inform/show all other connected clients that a song was added. 

**Event:** `playlist`  
**Room:** none  
**Sender(s):** Client
**Reciever(s):** Server  
**Data:** (Optional) String: `_id` of `PlaylistSchema` document
**Description:** Sent when a client first connects.  The client looks for an `  _id` as a value of a `playlist` querystring parameter in the browser's address bar and sends that if present.
**Response:** Object: (New or existing) `PlaylistSchema` document, including database `_id`
  
**Event:** `add song`  
**Room:** none  
**Sender(s):** Client  
**Reciever(s):** Server  
**Data:** String: URI of Spotify player widget for a single song  
**Description:** Sent when a client adds a song to a playlist.  
  
**Event:** `song added`  
**Room:** `_id` of playlist's `PlaylistSchema` document  
**Sender(s):** Server  
**Reciever(s):** Client(s)  
**Data:** String: URI of Spotify player widget for a single song  
**Description:** Sent to other clients (if any) when one client has added a   song. `song added` is *not* sent to the client that added the song.
  
