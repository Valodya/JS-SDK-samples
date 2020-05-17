const Backendless = require('../backendless');

Backendless.RT.addConnectErrorEventListener((...args) => console.log('Connect_Error_RT_Event:', args));
Backendless.RT.addConnectEventListener((...args) => console.log('Connect_RT_Event:', args));
Backendless.RT.addDisconnectEventListener((...args) => console.log('Disconnect_RT_Event:', args));
Backendless.RT.addReconnectAttemptEventListener((...args) => console.log('Reconnect_Attempt_RT_Event:', args));

const personsData = Backendless.Data.of('Persons');
const rtHandlers = personsData.rt();

rtHandlers.addCreateListener((object) => {
  console.log('RT_Event:CREATE', JSON.stringify(object));
});

rtHandlers.addUpdateListener((object) => {
  console.log('RT_Event:UPDATE', JSON.stringify(object));
});

rtHandlers.addDeleteListener((object) => {
  console.log('RT_Event:DELETE', JSON.stringify(object));
});

setTimeout(async () => {
  const savedObject = await personsData.save({ name: 'Bob' });

  console.log('savedObject:', JSON.stringify(savedObject));

  const updatedObject = await personsData.save({ ...savedObject, name: 'Nick' });

  console.log('updatedObject:', JSON.stringify(updatedObject));

  await personsData.remove(updatedObject);

  console.log('deleteObject:', JSON.stringify(updatedObject));
}, 3000);
