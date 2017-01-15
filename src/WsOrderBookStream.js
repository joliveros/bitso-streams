import BitsoWebsocket from 'bitso-ws';
import { Readable } from 'stream';

export default function WsOrderBookStream() {
  const orderBookStream = new Readable();
  let bitso;

  const readOrderBook = data => orderBookStream.push(JSON.stringify(data));

  orderBookStream._read = () => {
    if (!orderBookStream.started) {
      orderBookStream.started = true;
      bitso = new BitsoWebsocket({
        orders: true,
      });

      bitso.on('data', readOrderBook);
    }
  };

  return orderBookStream;
}
