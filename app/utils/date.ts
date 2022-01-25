import dayjs from 'dayjs'

const today = new Date()

export const getDayName = () => dayjs(today).format('dddd')

export const getYear = () => dayjs(today).format('YYYY')

export const getDate = (date: any) => dayjs(date).format('MMMM D, YYYY')
