export type Action = {
  type: string
  payload?: {
    [key: string]: unknown
  }
}