export class ResponseBuilder {
  private data: Map<string, unknown>

  constructor() {
    this.data = new Map()
    this.data.set("success", true)
    return this
  }

  public error(message: string = '', errors?: unknown) {
    this.data.set("success", false)
    this.data.set("errors", errors)
    this.data.set("message", message)
    return this
  }

  public setMessage(message: string) {
    this.data.set("message", message)
    return this
  }

  public setMeta(meta: unknown) {
    this.data.set("meta", meta)
    return this
  }

  public setData(data: unknown) {
    this.data.set("data", data)
    return this
  }

  public toJSON(): unknown {
    return Object.fromEntries(this.data);
  }
}