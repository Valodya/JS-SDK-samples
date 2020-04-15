import {Component, h, State} from "@stencil/core";
import Backendless from "../../backendless";

const personsData = Backendless.Data.of("Persons");
const rtHandlers = personsData.rt();

Backendless.RT.addConnectErrorEventListener((...args) => {
  console.log('Connect_Error_RT_Event:', args)
});

Backendless.RT.addConnectEventListener((...args) => {
  console.log('Connect_RT_Event:', args)
});

Backendless.RT.addDisconnectEventListener((...args) => {
  console.log('Disconnect_RT_Event:', args)
});

Backendless.RT.addReconnectAttemptEventListener((...args) => {
  console.log('Reconnect_Attempt_RT_Event:', args)
});

@Component({
  tag: "rt-data",
  styleUrl: "rt-data.css",
  shadow: false,
})
export class RTData {
  @State() displayLog = [];

  constructor() {
    this.enableRealtime();
  }

  enableRealtime = () => {
    rtHandlers.addCreateListener((object) => {
      this.log('RT_Event:CREATE', JSON.stringify(object));
    });

    rtHandlers.addUpdateListener((object) => {
      this.log('RT_Event:UPDATE', JSON.stringify(object));
    });

    rtHandlers.addDeleteListener((object) => {
      this.log('RT_Event:DELETE', JSON.stringify(object));
    });

    setTimeout(async () => {
      const savedObject = await personsData.save({name: 'Bob'});

      this.log('savedObject:', JSON.stringify(savedObject));

      const updatedObject = await personsData.save({...savedObject, name: 'Nick'});

      this.log('updatedObject:', JSON.stringify(updatedObject));

      await personsData.remove(updatedObject);

      this.log('deleteObject:', JSON.stringify(updatedObject));
    }, 5000);

  };

  log = (...messages) => {
    console.log(...messages);

    this.displayLog = this.displayLog.concat([messages.join(' ')]);
  };

  render() {
    return (
      <div class="rt-data">
        <h2>RealTime Database</h2>

        <h4>Log Messages:</h4>

        <div>
          {this.displayLog.map(log => (
            <div>{log}</div>
          ))}
        </div>
      </div>
    );
  }
}
