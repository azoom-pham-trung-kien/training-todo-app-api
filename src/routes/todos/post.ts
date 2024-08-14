import { Request, Response } from 'express'
import z from 'zod'
import { TodoListTypeSchema } from '@/schema'

import { createNewTodo } from '@/helpers'

const QuerySchema = z.object({
  type: TodoListTypeSchema
})

const BodySchema = z.object({
  description: z.string()
})

const PostTodoSchema = z.object({
  query: QuerySchema,
  body: BodySchema
})

export default async (req: Request, res: Response) => {
  const requestData = {
    query: req.query,
    body: req.body
  }

  const { success, data } = PostTodoSchema.safeParse(requestData)

  if (!success) {
    return res.status(400).send({
      message: 'Invalid request data'
    })
  }

  const { query, body } = data
  const newTodoItem = createNewTodo(query.type, body.description)

  return res.send(newTodoItem)
}
