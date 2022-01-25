import dayjs from 'dayjs'

const date = new Date()

export const getDayName = () => {
  const dayName = dayjs(date).format('dddd')
  return dayName
}

export const getYear = () => {
  const year = dayjs(date).format('YYYY')
  return year
}
