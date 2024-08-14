import { Request, Response } from 'express'
import z from 'zod'
import { TodoListTypeSchema, TodoStatusSchema } from '@/schema'
import { updateTodo } from '@/helpers'

const ParamsSchema = z.object({
  id: z.coerce.number()
})

const BodySchema = z.object({
  description: z.string(),
  status: TodoStatusSchema
})

const QuerySchema = z.object({
  type: TodoListTypeSchema
})

const UpdateTodoSchema = z.object({
  params: ParamsSchema,
  body: BodySchema,
  query: QuerySchema
})

export default async (req: Request, res: Response) => {
  const requestData = {
    params: req.params,
    body: req.body,
    query: req.query
  }

  const { success, data } = UpdateTodoSchema.safeParse(requestData)

  if (!success) {
    return res.status(400).send({
      message: 'Invalid request data'
    })
  }

  const { query, body, params } = data
  const updatedTodo = updateTodo(params.id, query.type, body)

  if (!updatedTodo) {
    return res.status(400).send({
      message: 'Not found todo item'
    })
  }

  return res.send(updatedTodo)
}
