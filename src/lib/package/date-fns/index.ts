const dayJa = ['日', '月', '火', '水', '木', '金', '土']

export function formatDay (day: number): string {
  return dayJa[day]
}
