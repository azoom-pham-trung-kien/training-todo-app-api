import { TODO_LIST_TYPE, TODO_LIST_ITEM_STATUS } from '@/constants'

export const validateTodoListType = (type: number) => {
  const todoListTypes = Object.values(TODO_LIST_TYPE)

  return todoListTypes.includes(type)
}

export const validateTodoListItemStatus = (status: number) => {
  const todoListItemStatus = Object.values(TODO_LIST_ITEM_STATUS)

  return todoListItemStatus.includes(status)
}
