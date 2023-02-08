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
<img width=600px height=400px src="https://user-images.githubusercontent.com/87120463/217426292-fd87c8a0-f85f-4c46-ae25-6cb00f528081.png"/>

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
│  │  │  └─ post.controller.ts
│  │  ├─ dto
│  │  │  ├─ auth
│  │  │  │  └─ signup.dto.ts
│  │  │  └─ posts
│  │  │     └─ posts.dto.ts
│  │  ├─ entities
│  │  │  ├─ common.entity.ts
│  │  │  ├─ posts.entity.ts
│  │  │  └─ users.entity.ts
│  │  ├─ main.ts
│  │  ├─ modules
│  │  │  ├─ app.module.ts
│  │  │  ├─ auth.module.ts
│  │  │  └─ post.module.ts
│  │  ├─ repositories
│  │  │  ├─ posts.repository.ts
│  │  │  └─ users.repository.ts
│  │  └─ services
│  │     ├─ auth.service.ts
│  │     ├─ chat.service.ts
│  │     └─ post.service.ts
│  ├─ test
│  │  ├─ app.e2e-spec.ts
│  │  └─ jest-e2e.json
│  ├─ tsconfig.build.json
│  └─ tsconfig.json
└─ docker
   ├─ docker-compose.yml
   └─ dockerfile

```
</details>
