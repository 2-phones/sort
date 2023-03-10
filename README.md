
```
sort
├─ backend
│  │  ├─ src
│  │  │  ├─ config
│  │  │  │  └─ ormconfig.ts
│  │  │  ├─ controllers
│  │  │  │  ├─ auth.controller.ts
│  │  │  │  ├─ chat.controller.ts
│  │  │  │  ├─ post.controller.ts
│  │  │  │  └─ user.controller.ts
│  │  │  ├─ dto
│  │  │  │  ├─ auth
│  │  │  │  │  ├─ login.dto.ts
│  │  │  │  │  ├─ signup.dto.ts
│  │  │  │  │  └─ token.dto.ts
│  │  │  │  └─ posts
│  │  │  │     └─ posts.dto.ts
│  │  │  ├─ entities
│  │  │  │  ├─ common.entity.ts
│  │  │  │  ├─ posts.entity.ts
│  │  │  │  ├─ refresh_tokens.entity.ts
│  │  │  │  └─ users.entity.ts
│  │  │  ├─ gateway
│  │  │  │  └─ chat.gateway.ts
│  │  │  ├─ main.ts
│  │  │  ├─ modules
│  │  │  │  ├─ app.module.ts
│  │  │  │  ├─ auth.module.ts
│  │  │  │  ├─ chat.module.ts
│  │  │  │  ├─ events.module.ts
│  │  │  │  ├─ post.module.ts
│  │  │  │  ├─ token.module.ts
│  │  │  │  └─ user.module.ts
│  │  │  ├─ repositories
│  │  │  │  ├─ posts.repository.ts
│  │  │  │  ├─ refreshToken.repository.ts
│  │  │  │  └─ users.repository.ts
│  │  │  ├─ services
│  │  │  │  ├─ auth.service.ts
│  │  │  │  ├─ chat.service.ts
│  │  │  │  ├─ post.service.ts
│  │  │  │  ├─ token.service.ts
│  │  │  │  └─ user.service.ts
│  │  │  └─ util
│  │  │     ├─ axios.social.ts
│  │  │     ├─ createDate.ts
│  │  │     └─ randomString.util.ts
│  │  ├─ test
│  │  │  ├─ app.e2e-spec.ts
│  │  │  └─ jest-e2e.json
│  │  ├─ tsconfig.build.json
│  │  └─ tsconfig.json
│  └─ docker-compose.yml

```