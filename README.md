<div align="center">

# NestJS Enlighten
A laravel-ignition like error page for [Nestjs Framework](https://nestjs.com/)
<img src="https://user-images.githubusercontent.com/39852038/76228172-6e335980-6231-11ea-930c-ff833dce5b72.gif"/>

</div>

## Installation
### Install this package by running one of these following commands below

##### Via npm:
```bash
npm install nestjs-enlighten --save
```
##### Via yarn:
```bash
yarn add nestjs-enlighten
```

## Usage

#### As a Global Filter
```typescript
import { NestEnlighten } from 'nestjs-enlighten';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.useGlobalFilters(new NestEnlighten());
  await app.listen(3000);
}
bootstrap();
```

#### For spesific endpoints
```typescript
import { NestEnlighten } from 'nestjs-enlighten';

@Controller('account')
@UseFilters(new NestEnlighten())
export class AccountController { 

@Get('/error-test')
  throwError() {
    throw new Error('This is an error.');
  }
}
```

## TODO 
- [ ] Online Stack share feature
- [ ] Tests
- [ ] Add solution suggestions on unexpected errors in /src/Services/Errors/State/index.ts
