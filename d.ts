// fix the image import https://stackoverflow.com/questions/51100401/typescript-image-import
declare module '*.png' {
  const value: any
  export = value
}

declare module '*.jpg' {
  const value: any
  export = value
}

declare module '*.gif' {
  const value: any
  export = value
}
