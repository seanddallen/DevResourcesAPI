# DevResources API

## Scripts
1. Start server
    - `npm start`
2. Run linter
    - `npm run lint`
3. Run linter and fix
    - `npm run lint:fix`
4. Migrate to latest migrations
    - `npm run migrate`
5. Rollback migrations
    - `npm run rollback`
6. Seed migrations
    - `npm run seed`

## Setting Enviornment Variables

1. Install dependency 
```
npm install dotenv --save
```
2. Create .env in root directory 
3. Copy contents of .env.example into .env
4. Make any adjustments to the environment variables or add your own.

### Mac
- Start your server by running:
```
npm start
```
### Windows
1. Remove cross-env and PORT=8000 start script in package.json
2. Start your server by running:
```
npm start
```
