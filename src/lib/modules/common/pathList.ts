export const pathList = {
  top: '/',
  diary: '/diary',
  schedule: '/suchedule',
  chart: '/chart',
  money: 'money'
} as const

type PathType = keyof typeof pathList

export function getUrl(path: PathType): string {
  return pathList[path]
}

export function getDiaryUrl(id: number): string {
  return getUrl('diary') + '/' + {id}
}
