# Tribal Server API

## HTTP API

| Method | Endpoint | Querystring |  Description | 
| - | - | - | - |
| `GET`  | `/`      | n/a | Serve up client application.                |
| `GET`  | `/test`  | n/a | Returns text status of database connection. |
| `GET`  | `/`      | `playlist`: `_id` of `PlaylistSchema` document | Used to access a particular playlist | 

## Socket.IO API

Many client/server interactions are done via [Socket.io](https://socket.io) messages.  Sockets provide a bi-directional, real-time communication channel between a client and a server. This means that whenever a client adds a song to a shared playlist, for instance, the server will get it and inform/show all other connected clients that a song was added. 

**Event:** `playlist`
**Room:** none
**Sender(s):** Server
**Reciever(s):** Client
**Data:** Object: `PlaylistSchema` document, including database `_id`
**Description:** Sent when a client first connects.  Contains either an existing playlist (if one was specified in the URL querystring), or a new, empty playlist (if none specified).

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
**Description:** Sent to other clients (if any) when one client has added a song. `song added` is *not* sent to the client that added the song.
