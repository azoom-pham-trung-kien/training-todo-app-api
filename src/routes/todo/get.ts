import { Request, Response } from 'express'
import { todoList, TODO_LIST_TYPE } from '@/constants'
import { validateTodoListType } from '@/helpers'

export default async (
  req: Request<{}, {}, {}, { type: string }>,
  res: Response
) => {
  const todoListType = Number(req.query.type)
  const isValidTodoListType = validateTodoListType(todoListType)

  if (!isValidTodoListType) {
    return res.status(400).send({
      message: 'Invalid todo list type.'
    })
  }

  const { personalTodoList, professionalTodoList } = todoList
  const selectedTodoList =
    todoListType === TODO_LIST_TYPE.personal
      ? personalTodoList
      : professionalTodoList

  return res.send(selectedTodoList)
}
