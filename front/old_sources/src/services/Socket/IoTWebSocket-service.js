import io from "socket.io-client";

export class IoTWebSocket {
  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public sendMessage(message) {
    this.socket.emit('new-message', message);
  }

  public joinChannel(channelName) {
    this.socket.emit('join-channel', channelName);
  }

  public newNickname(nickname) {
    this.socket.emit('nickname', nickname);
  }

  public getMessage = () => {
    const observable = new Observable(observer => {
      this.socket.on('new-message', data => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  };
}