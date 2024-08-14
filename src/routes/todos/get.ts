import { Request, Response } from 'express'
import z from 'zod'
import { TodoListTypeSchema } from '@/schema'

import { getTodoList } from '@/helpers'

const GetTodoListSchema = z.object({
  type: TodoListTypeSchema
})

export default async (req: Request, res: Response) => {
  const { success, data } = GetTodoListSchema.safeParse(req.query)

  if (!success) {
    return res.status(400).send({
      message: 'Invalid todo list type.'
    })
  }

  const { type: todoListType } = data
  const selectedTodoList = getTodoList(todoListType)

  return res.send(selectedTodoList)
}
