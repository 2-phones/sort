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

