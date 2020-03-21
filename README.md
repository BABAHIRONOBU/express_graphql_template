# GraphQL을 활용하여 만든 Todo 앱

## 레포 클론
```bash
$ git clone https://github.com/BABAHIRONOBU/todo_graphql_ver.git
```

## 의존성 설치
```bash
$ cd todo_graphql_ver
$ npm install
```
or
```bash
$ cd todo_graphql_ver
$ yarn install
```

## 서버 시작
```bash
$ yarn start
```


## GraphiQL에서 테스트
[/graphql](http:localhost:3000/graphql)에 접속하여 다음의 쿼리를 실행해보세요.
```graphql
query getOne{
  todo(id: 1) {
    id
    description
    priority
  }
}
```

```graphql
query getAll{
  todos {
    id
    description
    priority
  }
}
```
```graphql
mutation addTodo{
  addTodo(todo: {
    description: "study graphql",
    priority: 1
  }) {
    id
    description
    priority
  }
}

```