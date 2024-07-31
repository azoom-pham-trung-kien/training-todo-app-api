import { Request, Response } from 'express'
import { todoList, TODO_LIST_TYPE } from '@/constants'
import { validateTodoListType, validateTodoListItemStatus } from '@/helpers'

export default async (
  req: Request<
    {
      id: string
    },
    {},
    {
      description: string
      status: number
    },
    {
      type: string
    }
  >,
  res: Response
) => {
  const { description, status } = req.body
  const todoId = Number(req.params.id)
  const listType = Number(req.query.type)
  const isValidTodoListType = validateTodoListType(listType)
  const isValidTodoStatus = validateTodoListItemStatus(status)

  if (!isValidTodoListType) {
    return res.status(400).send({
      message: 'Invalid todo list type.'
    })
  }

  if (!isValidTodoStatus) {
    return res.status(400).send({
      message: 'Invalid todo status.'
    })
  }

  const { personalTodoList, professionalTodoList } = todoList
  const selectedTodoList =
    listType === TODO_LIST_TYPE.personal
      ? personalTodoList
      : professionalTodoList

  const updatedTodoItemIndex = selectedTodoList.findIndex(
    item => item.id == todoId
  )

  if (updatedTodoItemIndex < 0) {
    return res.status(400).send({
      message: 'Not found todo item'
    })
  }

  const currentTodoItem = selectedTodoList[updatedTodoItemIndex]
  selectedTodoList[updatedTodoItemIndex] = {
    ...currentTodoItem,
    description,
    status
  }

  return res.send(selectedTodoList[updatedTodoItemIndex])
}
