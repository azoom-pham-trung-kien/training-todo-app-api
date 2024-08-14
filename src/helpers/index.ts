import { TODO_LIST_TYPE, TODO_LIST_ITEM_STATUS, todoList } from '@/constants'

type UpdateTodoData = {
  description: string
  status: number
}

export const getTodoList = (todoListType: number) => {
  const { personalTodoList, professionalTodoList } = todoList
  const selectedTodoList =
    todoListType === TODO_LIST_TYPE.personal
      ? personalTodoList
      : professionalTodoList

  return selectedTodoList
}

export const createNewTodo = (todoListType: number, description: string) => {
  const { personalTodoList, professionalTodoList } = todoList
  const selectedTodoList =
    todoListType === TODO_LIST_TYPE.personal
      ? personalTodoList
      : professionalTodoList
  const lastTodoItem = selectedTodoList.at(-1)
  const newTodoItem = {
    description,
    id: lastTodoItem ? lastTodoItem.id + 1 : 1,
    status: TODO_LIST_ITEM_STATUS.uncompleted
  }
  selectedTodoList.push(newTodoItem)

  return newTodoItem
}

export const updateTodo = (
  id: number,
  listType: number,
  updatedData: UpdateTodoData
) => {
  const { personalTodoList, professionalTodoList } = todoList
  const selectedTodoList =
    listType === TODO_LIST_TYPE.personal
      ? personalTodoList
      : professionalTodoList

  const updatedTodoItemIndex = selectedTodoList.findIndex(item => item.id == id)

  if (updatedTodoItemIndex < 0) {
    return false
  }

  const currentTodoItem = selectedTodoList[updatedTodoItemIndex]
  selectedTodoList[updatedTodoItemIndex] = {
    ...currentTodoItem,
    ...updatedData
  }

  return selectedTodoList[updatedTodoItemIndex]
}

export const deleteTodo = (listType: number, id: number) => {
  const { personalTodoList, professionalTodoList } = todoList
  const selectedTodoList =
    listType === TODO_LIST_TYPE.personal
      ? personalTodoList
      : professionalTodoList

  const deletedTodoItemIndex = selectedTodoList.findIndex(item => item.id == id)

  if (deletedTodoItemIndex < 0) {
    return false
  }

  const deletedTodoItem = selectedTodoList.splice(deletedTodoItemIndex, 1)

  return deletedTodoItem
}
