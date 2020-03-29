interface ITodo {
  id: number;
  description: string;
  priority: number | null
}

interface ITodoCreation {
  description: string;
  priority: number | null;
}

export class Todo implements ITodo {
  public id!: number;
  public description!: string;
  public priority!: number | null

  private static fakeData: ITodo[] = [
    {
      id: 1,
      description: '공식문서를 메인으로 graphql 공부',
      priority: 1,
    },
    {
      id: 2,
      description: '노션에 공부한 것 기록',
      priority: 2,
    },
    {
      id: 3,
      description: 'express, graphql 활용해서 todo 앱 만들어보기',
      priority: 1,
    }
  ];

  public static getAll() {
    return Todo.fakeData;
  }

  public static getOne(id: number) {
    return Todo.fakeData.find((todo) => todo.id === id);
  }

  public static getOneOr404(id: number) {
    const todo = Todo.getOne(id);

    if (!todo) {
      throw new Error(`${id}에 해당하는 todo를 찾지 못했습니다.`);
    }

    return todo;
  }

  public static create({ description, priority }: ITodoCreation) {
    const newTodo: ITodo = {
      id: Todo.fakeData[Todo.fakeData.length-1].id + 1,
      description,
      priority,
    };

    Todo.fakeData.push(newTodo);
    return newTodo;
  }
}