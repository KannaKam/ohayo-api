'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ohayo-front documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b097e9b9c2c7e05717a944da405cbd17"' : 'data-target="#xs-components-links-module-AppModule-b097e9b9c2c7e05717a944da405cbd17"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b097e9b9c2c7e05717a944da405cbd17"' :
                                            'id="xs-components-links-module-AppModule-b097e9b9c2c7e05717a944da405cbd17"' }>
                                            <li class="link">
                                                <a href="components/AnimeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnimeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnimemodalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnimemodalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForumComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForumComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MangaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MangaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MangamodalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MangamodalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavfooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavfooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignInComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignUpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-b097e9b9c2c7e05717a944da405cbd17"' : 'data-target="#xs-pipes-links-module-AppModule-b097e9b9c2c7e05717a944da405cbd17"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-b097e9b9c2c7e05717a944da405cbd17"' :
                                            'id="xs-pipes-links-module-AppModule-b097e9b9c2c7e05717a944da405cbd17"' }>
                                            <li class="link">
                                                <a href="pipes/NoDescriptionPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NoDescriptionPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/NoImagePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NoImagePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/NoSeasonPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NoSeasonPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/NoYearPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NoYearPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AnimeService.html" data-type="entity-link">AnimeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ForumService.html" data-type="entity-link">ForumService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MangaService.html" data-type="entity-link">MangaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModalserviceService.html" data-type="entity-link">ModalserviceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RatingService.html" data-type="entity-link">RatingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatusService.html" data-type="entity-link">StatusService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenService.html" data-type="entity-link">TokenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link">AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Anime.html" data-type="entity-link">Anime</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AnimeResponse.html" data-type="entity-link">AnimeResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/animeToList.html" data-type="entity-link">animeToList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ForumThread.html" data-type="entity-link">ForumThread</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Manga.html" data-type="entity-link">Manga</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MangaResponse.html" data-type="entity-link">MangaResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/mangaToList.html" data-type="entity-link">mangaToList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Message.html" data-type="entity-link">Message</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MessageToSend.html" data-type="entity-link">MessageToSend</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RatingAnime.html" data-type="entity-link">RatingAnime</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RatingAnimeResponse.html" data-type="entity-link">RatingAnimeResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RatingManga.html" data-type="entity-link">RatingManga</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RatingMangaResponse.html" data-type="entity-link">RatingMangaResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Season.html" data-type="entity-link">Season</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Staff.html" data-type="entity-link">Staff</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StatusAnime.html" data-type="entity-link">StatusAnime</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StatusAnimeResponse.html" data-type="entity-link">StatusAnimeResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StatusManga.html" data-type="entity-link">StatusManga</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StatusMangaResponse.html" data-type="entity-link">StatusMangaResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ThreadResponse.html" data-type="entity-link">ThreadResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserResponse.html" data-type="entity-link">UserResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});