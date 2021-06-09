var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"signin","component":"SignInComponent"},{"path":"signup","component":"SignUpComponent"},{"path":"home","component":"HomeComponent"},{"path":"profile","canActivate":["AuthGuard"],"component":"ProfileComponent"},{"path":"anime","component":"AnimeComponent"},{"path":"manga","component":"MangaComponent"},{"path":"forum","canActivate":["AuthGuard"],"component":"ForumComponent"},{"path":"","pathMatch":"full","redirectTo":"home"},{"path":"**","pathMatch":"full","redirectTo":"home"}],"kind":"module"}]}