import { Request, Response } from 'express'
import { todoList, TODO_LIST_TYPE } from '@/constants'
import { validateTodoListType } from '@/helpers'

export default async (
  req: Request<
    {
      id: string
    },
    {},
    {},
    { type: string }
  >,
  res: Response
) => {
  const listType  = Number(req.query.type)
  const todoId = Number(req.params.id)
  const isValidTodoListType = validateTodoListType(listType)

  if (!isValidTodoListType) {
    return res.status(400).send({
      message: 'Invalid todo list type.'
    })
  }

  const { personalTodoList, professionalTodoList } = todoList
  const selectedTodoList =
  listType === TODO_LIST_TYPE.personal
      ? personalTodoList
      : professionalTodoList

  const deletedTodoItemIndex = selectedTodoList.findIndex(
    item => item.id == todoId
  )

  if (deletedTodoItemIndex < 0) {
    return res.status(400).send({
      message: 'Not found todo item'
    })
  }

  const deletedTodoItem = selectedTodoList.splice(deletedTodoItemIndex, 1)

  return res.send(deletedTodoItem)
}
