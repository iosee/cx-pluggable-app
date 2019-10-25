## Adding a new module/library
When you want to add a new plugin please make use of the Angular CLI command;
> ng generate library (libraryName)

Edit the plugins.json file with the correct module information and also make sure to have the RouterModule.forChild([]) configuration done in the module of the library.

Now build the module with 
>ng build LibraryName

and copy the umd bundle to the 'assets' folder.

