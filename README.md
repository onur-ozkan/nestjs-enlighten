
<p align="center">

# NestJS Enlighten
<a href="">
	<img src="https://www.codefactor.io/repository/github/ozkanonur/nestjs-enlighten/badge?style=flat-square" />
</a>
<a href="#"><img src="https://img.shields.io/github/workflow/status/ozkanonur/nestjs-enlighten/Test%20and%20Build?logo=GitHub&label=Test%20and%20Build&style=flat-square&sanitize=true" alt="Test and Build"/></a>
<a href="#"><img src="https://img.shields.io/github/workflow/status/ozkanonur/nestjs-enlighten/Automated%20NPM%20Pusher?logo=GitHub&label=Automated%20NPM%20Pusher&style=flat-square&sanitize=true" alt="Automated NPM Pusher"/></a>
<a href="#"><img src="https://img.shields.io/npm/v/nestjs-enlighten?style=flat-square&sanitize=true" alt="Package Version"/>
</a>
<a href="#"><img src="https://img.shields.io/npm/l/nestjs-enlighten.svg?colorB=black&label=LICENSE&style=flat-square&sanitize=true" alt="License"/></a>

### A laravel-ignition like error page for [Nestjs Framework](https://nestjs.com/)

</p>

### About
Nest Enlighten is a module for Nest Framework. With this module, you can render friendly error pages for spesific or global endpoints that includes a lot of detailed values behind the hood. Not only that, you can share your all or spesific stack tabs to your team online. By that, you or your team can monitor your error situation much better and easier.

## Preview
### Default(Light) Theme
<img src="https://user-images.githubusercontent.com/39852038/76683698-2dfc1e80-6617-11ea-83d4-3160c9069423.png"/>

### Dark Theme
<img src="https://user-images.githubusercontent.com/39852038/76683608-82eb6500-6616-11ea-9591-64efbbf57bd3.png"/>


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

#### As Global Filter
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

#### Enable/Disable for spesific endpoints
```typescript
import { NestEnlighten } from 'nestjs-enlighten';

@Controller('account')
// Lets say you want to disable this module for this endpoint
@UseFilters(new NestEnlighten({ disableEnlighten: true }))
export class AccountController {

@Get('/error-test')
  throwError() {
    throw new BadRequestException('Example message of 400 exception');
  }
}
```

## TODO
- [x] Tests
- [x] Github Actions
- [ ] Online Stack share feature
- [ ] Add solution suggestions on unexpected errors in /src/Services/Errors/State/index.ts
