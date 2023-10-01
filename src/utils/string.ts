export const trimBody = (body: string) => body.length > 50 ? body.substring(0, 50) + "..." : body
export const trimTitle = (title: string) => title.length > 20 ? title.substring(0, 20) + "..." : title