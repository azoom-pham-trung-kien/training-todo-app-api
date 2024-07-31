import { Request, Response } from 'express'
import { todoList, TODO_LIST_TYPE } from '@/constants'
import { validateTodoListType, validateTodoListItemStatus } from '@/helpers'

export default async (
  req: Request<
    {},
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
  const  listType = Number(req.query.type)
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
  const lastTodoItem = selectedTodoList.at(-1)
  const newTodoItem = {
    description,
    id: lastTodoItem ? lastTodoItem.id + 1 : 1,
    status
  }
  selectedTodoList.push(newTodoItem)

  return res.send(newTodoItem)
}
