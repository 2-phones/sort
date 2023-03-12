## 기술

### 개발

<b>`TypeScript`, `Nestjs`, `TypeORM`, `JWT`, `Websocket`, `MYSQL`<b/>

### 배포
  
<b> `AWS(EC2,RDS)`, `Docker`, `Nginx` <b/>

## 📚 API

<details>
  <summary>Auth</summary>
</details>

<details>
  <summary>Users</summary>
</details>

<details>
  <summary>Posts</summary>
</details>

<details>
  <summary>Chat</summary>
</details>
<br/>

## 🗃 DB
|table|description|
|-|-|
|Users|회원 테이블|
|Posts|게시물 테이블|
|Refresh_Tokens| 리프레시토큰 테이블|

### ERD
<img width=700px height=400px src="https://user-images.githubusercontent.com/87120463/217428567-bb6a6466-4394-4e75-9493-42dd118aef79.png"/>
<br/><br/>

## 🗂 Architecture
<img width=800px height=400px src="https://user-images.githubusercontent.com/87120463/224270630-7c00bd0e-5c71-4699-ab79-e7b8fc6ff64a.png"/>


<!-- https://user-images.githubusercontent.com/87120463/224269326-c116a785-a63a-44f4-9a75-3e0ef6a0ef94.png-->
<!-- https://user-images.githubusercontent.com/87120463/224268685-29529e23-c2d8-40fe-8eb6-fcd488645bfc.png -->

<details>
  <summary><h3>프로젝트 구조</h3></summary>
  
- `config` - TypeOrm 환경설정
- `controllers` - 라우팅 로직
- `dto`- dto 로직
- `entities` - entity 로직
- `modules` - module 로직
- `repositories` - DB 처리 로직
- `services` - 비즈니스 로직
- `util` - 기타 함수

```
Project
├─ .gitignore
├─ README.md
├─ api
│  ├─ .eslintrc.js
│  ├─ .prettierrc
│  ├─ Dockerfile
│  ├─ nest-cli.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ config
│  │  │  └─ ormconfig.ts
│  │  ├─ controllers
│  │  │  ├─ auth.controller.ts
│  │  │  ├─ chat.controller.ts
│  │  │  ├─ post.controller.ts
│  │  │  └─ user.controller.ts
│  │  ├─ dto
│  │  │  ├─ auth
│  │  │  │  ├─ signup.dto.ts
│  │  │  │  └─ token.dto.ts
│  │  │  └─ posts
│  │  │     └─ posts.dto.ts
│  │  ├─ entities
│  │  │  ├─ common.entity.ts
│  │  │  ├─ posts.entity.ts
│  │  │  ├─ refresh_tokens.entity.ts
│  │  │  └─ users.entity.ts
│  │  ├─ main.ts
│  │  ├─ modules
│  │  │  ├─ app.module.ts
│  │  │  ├─ auth.module.ts
│  │  │  ├─ post.module.ts
│  │  │  ├─ token.module.ts
│  │  │  └─ user.module.ts
│  │  ├─ repositories
│  │  │  ├─ posts.repository.ts
│  │  │  ├─ refreshToken.repository.ts
│  │  │  └─ users.repository.ts
│  │  ├─ services
│  │  │  ├─ auth.service.ts
│  │  │  ├─ chat.service.ts
│  │  │  ├─ post.service.ts
│  │  │  ├─ token.service.ts
│  │  │  └─ user.service.ts
│  │  └─ util
│  │     ├─ axios.social.ts
│  │     ├─ createDate.ts
│  │     └─ randomString.util.ts
│  ├─ test
│  │  ├─ app.e2e-spec.ts
│  │  └─ jest-e2e.json
│  ├─ tsconfig.build.json
│  └─ tsconfig.json
├─ docker
└─ docker-compose.yml

```
</details>

