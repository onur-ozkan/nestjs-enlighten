<div align="center">

# NestJS Enlighten
## A laravel-ignition like error page for [Nestjs Framework](https://nestjs.com/)

## About
Nest Enlighten is a module for Nest Framework. With this module, you can render friendly error pages for spesific or global endpoints that includes a lot of detailed values behind the hood. Not only that, you can share your whole or spesific stack tabs to your team online. By that, you or your whole team can monitor your error situation much better and easier.

### Preview
<img src="https://user-images.githubusercontent.com/39852038/76228172-6e335980-6231-11ea-930c-ff833dce5b72.gif"/>

### Dark Theme
<img src="https://user-images.githubusercontent.com/39852038/76683608-82eb6500-6616-11ea-9591-64efbbf57bd3.png"/>

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

### Constructor Options
| Option Name | Required | Type | Default |
| ------ | ------ | ------ | ------|
| disableEnlighten | false | boolean | false |
| theme | false | 'theme-light' - 'theme-dark' | 'theme-light' |

#### As a Global Filter
```typescript
import { NestEnlighten } from 'nestjs-enlighten';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  // Enables dark theme aswell
  app.useGlobalFilters(new NestEnlighten({ theme: 'theme-dark' }));
  await app.listen(3000);
}
bootstrap();
```

#### Enable/Disable on spesific endpoints
```typescript
import { NestEnlighten } from 'nestjs-enlighten';

@Controller('account')
// Lets say you want to disable this module for this endpoint
@UseFilters(new NestEnlighten({ disableEnlighten: true }))
export class AccountController {

@Get('/error-test')
  throwError() {
    throw new Error('This is an error.');
  }
}
```

## TODO
- [x] Tests
- [x] Github Actions
- [ ] Online Stack share feature
- [ ] Add solution suggestions on unexpected errors in /src/Services/Errors/State/index.ts
