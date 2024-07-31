export const TODO_LIST_TYPE = {
  personal: 1,
  professional: 2
}

export const TODO_LIST_ITEM_STATUS = {
  uncompleted: 0,
  completed: 1
}

export const todoList = {
  personalTodoList: [
    {
      id: 1,
      description: 'Personal Work No. 1',
      status: TODO_LIST_ITEM_STATUS.completed
    },
    {
      id: 2,
      description: 'Personal Work No. 2',
      status: TODO_LIST_ITEM_STATUS.uncompleted
    },
    {
      id: 3,
      description: 'Personal Work No. 3',
      status: TODO_LIST_ITEM_STATUS.uncompleted
    },
    {
      id: 4,
      description: 'Personal Work No. 4',
      status: TODO_LIST_ITEM_STATUS.completed
    },
    {
      id: 5,
      description: 'Personal Work No. 5',
      status: TODO_LIST_ITEM_STATUS.uncompleted
    }
  ],
  professionalTodoList: [
    {
      id: 1,
      description: 'Professional Work No. 1',
      status: TODO_LIST_ITEM_STATUS.completed
    },
    {
      id: 2,
      description: 'Professional Work No. 2',
      status: TODO_LIST_ITEM_STATUS.uncompleted
    },
    {
      id: 3,
      description: 'Professional Work No. 3',
      status: TODO_LIST_ITEM_STATUS.uncompleted
    },
    {
      id: 4,
      description: 'Professional Work No. 4',
      status: TODO_LIST_ITEM_STATUS.completed
    },
    {
      id: 5,
      description: 'Professional Work No. 5',
      status: TODO_LIST_ITEM_STATUS.uncompleted
    }
  ]
}
