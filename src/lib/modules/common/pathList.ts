export const pathList = {
  top: '/',
  diary: '/diary',
  schedule: '/schedule',
  chart: '/chart',
  money: '/money'
} as const

type PathType = keyof typeof pathList

export function getUrl(path: PathType): string {
  return pathList[path]
}

export function getDiaryUrl(id: string): string {
  return getUrl('diary') + '/' + id
}
