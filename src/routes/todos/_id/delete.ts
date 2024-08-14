import { Request, Response } from 'express'
import z from 'zod'

import { TodoListTypeSchema } from '@/schema'
import { deleteTodo } from '@/helpers'

const ParamsSchema = z.object({
  id: z.coerce.number()
})

const QuerySchema = z.object({
  type: TodoListTypeSchema
})

const DeleteTodoSchema = z.object({
  params: ParamsSchema,
  query: QuerySchema
})

export default async (req: Request, res: Response) => {
  const requestData = {
    params: req.params,
    query: req.query
  }

  const { success, data } = DeleteTodoSchema.safeParse(requestData)

  if (!success) {
    return res.status(400).send({
      message: 'Invalid  request data'
    })
  }

  const { query, params } = data
  const deletedTodo = deleteTodo(query.type, params.id)

  if (!deletedTodo) {
    return res.status(400).send({
      message: 'Not found todo item'
    })
  }

  return res.send(deletedTodo)
}
