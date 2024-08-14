import z from 'zod'
import { TODO_LIST_TYPE, TODO_LIST_ITEM_STATUS } from '@/constants'

export const TodoListTypeSchema = z.coerce
  .number()
  .refine(
    value =>
      value === TODO_LIST_TYPE.personal ||
      value === TODO_LIST_TYPE.professional,
    {
      message: 'Type must be either personal or professional'
    }
  )

export const TodoStatusSchema = z
  .number()
  .refine(
    value =>
      value === TODO_LIST_ITEM_STATUS.completed ||
      value === TODO_LIST_ITEM_STATUS.uncompleted,
    {
      message: 'Status must be either completed or uncompleted'
    }
  )
