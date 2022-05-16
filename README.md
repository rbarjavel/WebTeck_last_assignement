## Warning Docker must be installed !
---
## Running the backend
```bash
cd server/

npm install

npm run docker:db

npm run prisma:generate

npm run db:init

npm run
```
---
## Running the frontend
```bash
cd frontend/

npm install

ng serve --open
```
