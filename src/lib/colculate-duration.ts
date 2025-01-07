import type { ILesson } from '@/types'
export const calculateTotalDuration = (lessons: ILesson[]) => {
	let totalMinutes = 0

	lessons.forEach(lesson => {
		totalMinutes +=
			lesson.duration.hours * 60 +
			lesson.duration.minutes +
			Math.round(lesson.duration.seconds / 60)
	})

	const totalHours = Math.floor(totalMinutes / 60)
	const remainingMinutes = totalMinutes % 60

	const formattedTotalDuration = `${totalHours}.${remainingMinutes
		.toString()
		.padStart(2, '0')}`

	return formattedTotalDuration
}

export const formatLessonTime = (lesson: ILesson) => {
	const duration = lesson.duration

	const totalSeconds =
		duration.hours * 3600 + duration.minutes * 60 + duration.seconds

	const hours = Math.floor(totalSeconds / 3600)
	const minutes = Math.floor((totalSeconds % 3600) / 60)
	const seconds = totalSeconds % 60

	const formattedTime = `${hours > 0 ? hours + ':' : ''}${
		minutes > 0 ? minutes + ':' : ''
	}${seconds.toString().padStart(2, '0')}`

	return formattedTime
}