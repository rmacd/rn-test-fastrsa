// @ts-ignore
// nicked from https://partiellkorrekt.de/2021/02/05/spy-on-the-react-native-messagequeue-in-style/
import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue.js';

type MessageQueueMessage = {
  type: 0 | 1;
  module: string | null;
  method: string | null;
  args: unknown[];
};

// Please only do this in a __DEV__ environment
// console.log is slooooow
// if (__DEV__) {
MessageQueue.spy((msg: MessageQueueMessage) => {
  if (msg.module === 'WebSocketModule') {
    return;
  }

  const direction = msg.type ? '🤖 JS -> Native' : '👨 Native -> JS';
  const functionName = [msg.module, msg.method].filter(x => x).join('.');
  const args = (msg.args || [])
    .map(arg => {
      const result = JSON.stringify(arg);

      // Optional: replace all JSON that's longer than 1000 chars
      // Usually that's quite helpful to increase readability
      if (result.length > 1000) {
        return '<long data>';
      }

      return result;
    })
    .join(', ');

  console.log(`${direction}: ${functionName}(${args})`);
});
// }
