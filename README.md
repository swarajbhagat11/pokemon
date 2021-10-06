# Pokemon

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.8.

- I have used bootstrap only for icon purpose and, tried to add custom css instead of using bootstrap ready made classes.
- I have created _variables.scss file for constants. We can create multiple file for different types of constants but for this small app I have move all into one file.
- Due to time crunch, I am not able to write unit tests.
- UI is responsive.
- For sorting UX design, I can use another approach but due to time crunch it is not possible.

Functionality:
- Filter and sorting functionality are working on local data as I haven't found any pokemon API for it.
- Sort will apply on either Name, Height or Weight.
- On Search sort will get reset, you can sort data after search.
- On change of "records per page count" search and sort will get reset with offset for data as 0.
- On next or previous link click, search and sort will get reset.
- On refresh, browser page will stay with same search, sort, "records per page count" and page number
- Loader will show in between API call


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

