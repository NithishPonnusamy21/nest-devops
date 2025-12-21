import { webcrypto } from 'crypto';

if (!(global as any).crypto) {
  (global as any).crypto = webcrypto;
}

