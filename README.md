## Architecture
<details>
  <summary><h3>프로젝트 구조</h3></summary>

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
