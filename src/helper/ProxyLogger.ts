import { Logger, ILogObj , ISettingsParam } from "tslog";
import { appendFileSync } from "fs";

function logToTransport(nameFile: string) {
  return (logObject: ILogObj ) =>
    appendFileSync(nameFile, JSON.stringify(logObject) + "\n");
}

class ProxyLogger {
  private _log: Logger<ILogObj>;
  constructor() {
    this._log = new Logger({
      type: "pretty",
    });
  }

  info(...args: unknown[]): void {
    this._log.info(...args);
  }
  trace(...args: unknown[]): void {
    this._log.trace(...args);
  }
  silly(...args: unknown[]): void {
    this._log.silly(...args);
  }
  debug(...args: unknown[]): void {
    this._log.debug(...args);
  }
  warn(...args: unknown[]): void {
    this._log.warn(...args);
  }
  error(...args: unknown[]): void {
    this._log.error(...args);
  }
}

export let log = new ProxyLogger()
