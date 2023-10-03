import { log } from "../../../../helper/ProxyLogger"

export class ResponseBuilder {
  private data: Map<string, any>

  constructor(data: any = null) {
    this.data = new Map()
    this.data.set("success", true)
    return this
  }

  public error(message: string = '', errors = null) {
    this.data.set("success", false)
    this.data.set("errors", errors)
    this.data.set("message", message)
    return this
  }

  public setMessage(message: string) {
    this.data.set("message", message)
    return this
  }

  public setMeta(meta: any) {
    this.data.set("meta", meta)
    return this
  }

  public toJSON(): any {
    return  JSON.stringify(Object.fromEntries(this.data));
  }
}