import BitsoWebsocket from 'bitso-ws';
import { Readable } from 'stream';

export default function WsTradeStream() {
  const orderBookStream = new Readable();
  let bitso;

  const readTrade = data => orderBookStream.push(JSON.stringify(data));

  orderBookStream._read = () => {
    if (!orderBookStream.started) {
      orderBookStream.started = true;
      bitso = new BitsoWebsocket({
        trades: true,
      });

      bitso.on('data', readTrade);
    }
  };

  return orderBookStream;
}
