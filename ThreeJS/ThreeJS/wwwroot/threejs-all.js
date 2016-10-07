System.register(['@angular/core', '@angular/router', './can-deactivate-guard.service', './auth-guard.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, can_deactivate_guard_service_1, auth_guard_service_1;
    var AppRoutingModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (can_deactivate_guard_service_1_1) {
                can_deactivate_guard_service_1 = can_deactivate_guard_service_1_1;
            },
            function (auth_guard_service_1_1) {
                auth_guard_service_1 = auth_guard_service_1_1;
            }],
        execute: function() {
            AppRoutingModule = (function () {
                function AppRoutingModule() {
                }
                AppRoutingModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            router_1.RouterModule.forRoot([
                                {
                                    path: 'admin',
                                    loadChildren: 'app/admin/admin.module#AdminModule',
                                    canLoad: [auth_guard_service_1.AuthGuard]
                                }
                            ])
                        ],
                        exports: [
                            router_1.RouterModule
                        ],
                        providers: [
                            can_deactivate_guard_service_1.CanDeactivateGuard
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppRoutingModule);
                return AppRoutingModule;
            }());
            exports_1("AppRoutingModule", AppRoutingModule);
        }
    }
});

;
System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'view/app.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

;
System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', './app.component', './app-routing.module', './login-routing.module', './heroes/heroes.module', './model/model.module', './login.component', './dialog.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, forms_1, app_component_1, app_routing_module_1, login_routing_module_1, heroes_module_1, model_module_1, login_component_1, dialog_service_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routing_module_1_1) {
                app_routing_module_1 = app_routing_module_1_1;
            },
            function (login_routing_module_1_1) {
                login_routing_module_1 = login_routing_module_1_1;
            },
            function (heroes_module_1_1) {
                heroes_module_1 = heroes_module_1_1;
            },
            function (model_module_1_1) {
                model_module_1 = model_module_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (dialog_service_1_1) {
                dialog_service_1 = dialog_service_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            heroes_module_1.HeroesModule,
                            model_module_1.ModelModule,
                            login_routing_module_1.LoginRoutingModule,
                            app_routing_module_1.AppRoutingModule
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            login_component_1.LoginComponent
                        ],
                        providers: [
                            dialog_service_1.DialogService
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});

;
System.register(['@angular/core', '@angular/router', './auth.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, auth_service_1;
    var AuthGuard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            AuthGuard = (function () {
                function AuthGuard(authService, router) {
                    this.authService = authService;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (route, state) {
                    var url = state.url;
                    return this.checkLogin(url);
                };
                AuthGuard.prototype.canActivateChild = function (route, state) {
                    return this.canActivate(route, state);
                };
                AuthGuard.prototype.canLoad = function (route) {
                    var url = "/" + route.path;
                    return this.checkLogin(url);
                };
                AuthGuard.prototype.checkLogin = function (url) {
                    if (this.authService.isLoggedIn) {
                        return true;
                    }
                    // Store the attempted URL for redirecting
                    this.authService.redirectUrl = url;
                    // Create a dummy session id
                    var sessionId = 123456789;
                    // Set our navigation extras object
                    // that contains our global query params and fragment
                    var navigationExtras = {
                        queryParams: { 'session_id': sessionId },
                        fragment: 'anchor'
                    };
                    // Navigate to the login page with extras
                    this.router.navigate(['/login'], navigationExtras);
                    return false;
                };
                AuthGuard = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
                ], AuthGuard);
                return AuthGuard;
            }());
            exports_1("AuthGuard", AuthGuard);
        }
    }
});

;
System.register(['@angular/core', 'rxjs/Observable', 'rxjs/add/observable/of', 'rxjs/add/operator/do', 'rxjs/add/operator/delay'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1;
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {}],
        execute: function() {
            AuthService = (function () {
                function AuthService() {
                    this.isLoggedIn = false;
                }
                AuthService.prototype.login = function () {
                    var _this = this;
                    return Observable_1.Observable.of(true).delay(1000).do(function (val) { return _this.isLoggedIn = true; });
                };
                AuthService.prototype.logout = function () {
                    this.isLoggedIn = false;
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});

;
System.register(['@angular/platform-browser-dynamic', './app.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_module_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
        }
    }
});

;
System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CanDeactivateGuard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CanDeactivateGuard = (function () {
                function CanDeactivateGuard() {
                }
                CanDeactivateGuard.prototype.canDeactivate = function (component) {
                    return component.canDeactivate ? component.canDeactivate() : true;
                };
                CanDeactivateGuard = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CanDeactivateGuard);
                return CanDeactivateGuard;
            }());
            exports_1("CanDeactivateGuard", CanDeactivateGuard);
        }
    }
});

;
System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CrisisListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CrisisListComponent = (function () {
                function CrisisListComponent() {
                }
                CrisisListComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h2>CRISIS CENTER</h2>\n    <p>Get your crisis here</p>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], CrisisListComponent);
                return CrisisListComponent;
            }());
            exports_1("CrisisListComponent", CrisisListComponent);
        }
    }
});

;
System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var DialogService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * Async modal dialog service
             * DialogService makes this app easier to test by faking this service.
             * TODO: better modal implementation that doesn't use window.confirm
             */
            DialogService = (function () {
                function DialogService() {
                }
                /**
                 * Ask user to confirm an action. `message` explains the action and choices.
                 * Returns promise resolving to `true`=confirm or `false`=cancel
                 */
                DialogService.prototype.confirm = function (message) {
                    return new Promise(function (resolve) {
                        return resolve(window.confirm(message || 'Is it OK?'));
                    });
                };
                ;
                DialogService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DialogService);
                return DialogService;
            }());
            exports_1("DialogService", DialogService);
        }
    }
});

;
System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HeroListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeroListComponent = (function () {
                function HeroListComponent() {
                }
                HeroListComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h2>HEROES</h2>\n    <p>Get your heroes here</p>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroListComponent);
                return HeroListComponent;
            }());
            exports_1("HeroListComponent", HeroListComponent);
        }
    }
});

;
System.register(['@angular/core', '@angular/router', './hero.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hero_service_1;
    var HeroDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent(route, router, service) {
                    this.route = route;
                    this.router = router;
                    this.service = service;
                }
                Object.defineProperty(HeroDetailComponent.prototype, "routeAnimation", {
                    get: function () {
                        return true;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HeroDetailComponent.prototype, "display", {
                    get: function () {
                        return 'block';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HeroDetailComponent.prototype, "position", {
                    get: function () {
                        return 'absolute';
                    },
                    enumerable: true,
                    configurable: true
                });
                HeroDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        var id = +params['id']; // (+) converts string 'id' to a number
                        _this.service.getHero(id).then(function (hero) { return _this.hero = hero; });
                    });
                };
                HeroDetailComponent.prototype.gotoHeroes = function () {
                    var heroId = this.hero ? this.hero.id : null;
                    // Pass along the hero id if available
                    // so that the HeroList component can select that hero.
                    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
                };
                __decorate([
                    core_1.HostBinding('@routeAnimation'), 
                    __metadata('design:type', Object)
                ], HeroDetailComponent.prototype, "routeAnimation", null);
                __decorate([
                    core_1.HostBinding('style.display'), 
                    __metadata('design:type', Object)
                ], HeroDetailComponent.prototype, "display", null);
                __decorate([
                    core_1.HostBinding('style.position'), 
                    __metadata('design:type', Object)
                ], HeroDetailComponent.prototype, "position", null);
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        template: "\n  <h2>HEROES</h2>\n  <div *ngIf=\"hero\">\n    <h3>\"{{hero.name}}\"</h3>\n    <div>\n      <label>Id: </label>{{hero.id}}</div>\n    <div>\n      <label>Name: </label>\n      <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n    </div>\n    <p>\n      <button (click)=\"gotoHeroes()\">Back</button>\n    </p>\n  </div>\n  ",
                        animations: [
                            core_1.trigger('routeAnimation', [
                                core_1.state('*', core_1.style({
                                    opacity: 1,
                                    transform: 'translateX(0)'
                                })),
                                core_1.transition('void => *', [
                                    core_1.style({
                                        opacity: 0,
                                        transform: 'translateX(-100%)'
                                    }),
                                    core_1.animate('0.2s ease-in')
                                ]),
                                core_1.transition('* => void', [
                                    core_1.animate('0.5s ease-out', core_1.style({
                                        opacity: 0,
                                        transform: 'translateY(100%)'
                                    }))
                                ])
                            ])
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, hero_service_1.HeroService])
                ], HeroDetailComponent);
                return HeroDetailComponent;
            }());
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});

;
System.register(['@angular/core', '@angular/router', './hero.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hero_service_1;
    var HeroListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroListComponent = (function () {
                function HeroListComponent(service, route, router) {
                    this.service = service;
                    this.route = route;
                    this.router = router;
                }
                HeroListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        _this.selectedId = +params['id'];
                        _this.service.getHeroes()
                            .then(function (heroes) { return _this.heroes = heroes; });
                    });
                };
                HeroListComponent.prototype.isSelected = function (hero) { return hero.id === this.selectedId; };
                HeroListComponent.prototype.onSelect = function (hero) {
                    this.router.navigate(['/hero', hero.id]);
                };
                HeroListComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h2>HEROES</h2>\n    <ul class=\"items\">\n      <li *ngFor=\"let hero of heroes\"\n        [class.selected]=\"isSelected(hero)\"\n        (click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n  "
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute, router_1.Router])
                ], HeroListComponent);
                return HeroListComponent;
            }());
            exports_1("HeroListComponent", HeroListComponent);
        }
    }
});

;
System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Hero, HEROES, heroesPromise, HeroService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Hero = (function () {
                function Hero(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return Hero;
            }());
            exports_1("Hero", Hero);
            HEROES = [
                new Hero(11, 'Mr. Nice'),
                new Hero(12, 'Narco'),
                new Hero(13, 'Bombasto'),
                new Hero(14, 'Celeritas'),
                new Hero(15, 'Magneta'),
                new Hero(16, 'RubberMan')
            ];
            heroesPromise = Promise.resolve(HEROES);
            HeroService = (function () {
                function HeroService() {
                }
                HeroService.prototype.getHeroes = function () { return heroesPromise; };
                HeroService.prototype.getHero = function (id) {
                    return heroesPromise
                        .then(function (heroes) { return heroes.find(function (hero) { return hero.id === +id; }); });
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], HeroService);
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});

;
System.register(['@angular/core', '@angular/router', './hero-list.component', './hero-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hero_list_component_1, hero_detail_component_1;
    var HeroRoutingModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_list_component_1_1) {
                hero_list_component_1 = hero_list_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            }],
        execute: function() {
            HeroRoutingModule = (function () {
                function HeroRoutingModule() {
                }
                HeroRoutingModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            router_1.RouterModule.forChild([
                                { path: 'heroes', component: hero_list_component_1.HeroListComponent },
                                { path: 'hero/:id', component: hero_detail_component_1.HeroDetailComponent }
                            ])
                        ],
                        exports: [
                            router_1.RouterModule
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroRoutingModule);
                return HeroRoutingModule;
            }());
            exports_1("HeroRoutingModule", HeroRoutingModule);
        }
    }
});

;
System.register(['@angular/core', '@angular/common', '@angular/forms', './hero-list.component', './hero-detail.component', './hero.service', './heroes-routing.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, forms_1, hero_list_component_1, hero_detail_component_1, hero_service_1, heroes_routing_module_1;
    var HeroesModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (hero_list_component_1_1) {
                hero_list_component_1 = hero_list_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (heroes_routing_module_1_1) {
                heroes_routing_module_1 = heroes_routing_module_1_1;
            }],
        execute: function() {
            HeroesModule = (function () {
                function HeroesModule() {
                }
                HeroesModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_1.FormsModule,
                            heroes_routing_module_1.HeroRoutingModule
                        ],
                        declarations: [
                            hero_list_component_1.HeroListComponent,
                            hero_detail_component_1.HeroDetailComponent
                        ],
                        providers: [
                            hero_service_1.HeroService
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroesModule);
                return HeroesModule;
            }());
            exports_1("HeroesModule", HeroesModule);
        }
    }
});

;
System.register(['@angular/core', '@angular/router', './auth-guard.service', './auth.service', './login.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, auth_guard_service_1, auth_service_1, login_component_1;
    var LoginRoutingModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_guard_service_1_1) {
                auth_guard_service_1 = auth_guard_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            LoginRoutingModule = (function () {
                function LoginRoutingModule() {
                }
                LoginRoutingModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            router_1.RouterModule.forChild([
                                { path: 'login', component: login_component_1.LoginComponent }
                            ])
                        ],
                        exports: [
                            router_1.RouterModule
                        ],
                        providers: [
                            auth_guard_service_1.AuthGuard,
                            auth_service_1.AuthService
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoginRoutingModule);
                return LoginRoutingModule;
            }());
            exports_1("LoginRoutingModule", LoginRoutingModule);
        }
    }
});

;
System.register(['@angular/core', '@angular/router', './auth.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, auth_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(authService, router) {
                    this.authService = authService;
                    this.router = router;
                    this.setMessage();
                }
                LoginComponent.prototype.setMessage = function () {
                    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    this.message = 'Trying to log in ...';
                    this.authService.login().subscribe(function () {
                        _this.setMessage();
                        if (_this.authService.isLoggedIn) {
                            // Get the redirect URL from our auth service
                            // If no redirect has been set, use the default
                            var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : '/admin';
                            // Set our navigation extras object
                            // that passes on our global query params and fragment
                            var navigationExtras = {
                                preserveQueryParams: true,
                                preserveFragment: true
                            };
                            // Redirect the user
                            _this.router.navigate([redirect], navigationExtras);
                        }
                    });
                };
                LoginComponent.prototype.logout = function () {
                    this.authService.logout();
                    this.setMessage();
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h2>LOGIN</h2>\n    <p>{{message}}</p>\n    <p>\n      <button (click)=\"login()\"  *ngIf=\"!authService.isLoggedIn\">Login</button>\n      <button (click)=\"logout()\" *ngIf=\"authService.isLoggedIn\">Logout</button>\n    </p>"
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

;
System.register(['@angular/core', '@angular/router', './model.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, model_service_1;
    var ModelDetailResolve;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (model_service_1_1) {
                model_service_1 = model_service_1_1;
            }],
        execute: function() {
            ModelDetailResolve = (function () {
                function ModelDetailResolve(cs, router) {
                    this.cs = cs;
                    this.router = router;
                }
                ModelDetailResolve.prototype.resolve = function (route) {
                    var _this = this;
                    var id = +route.params['id'];
                    return this.cs.getModel(id).then(function (model) {
                        if (model) {
                            return model;
                        }
                        else {
                            _this.router.navigate(['/model']);
                            return false;
                        }
                    });
                };
                ModelDetailResolve = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [model_service_1.ModelService, router_1.Router])
                ], ModelDetailResolve);
                return ModelDetailResolve;
            }());
            exports_1("ModelDetailResolve", ModelDetailResolve);
        }
    }
});

;
System.register(['@angular/core', '@angular/router', '../dialog.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, dialog_service_1;
    var ModelDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dialog_service_1_1) {
                dialog_service_1 = dialog_service_1_1;
            }],
        execute: function() {
            ModelDetailComponent = (function () {
                function ModelDetailComponent(route, router, dialogService) {
                    this.route = route;
                    this.router = router;
                    this.dialogService = dialogService;
                }
                Object.defineProperty(ModelDetailComponent.prototype, "routeAnimation", {
                    get: function () {
                        return true;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ModelDetailComponent.prototype, "display", {
                    get: function () {
                        return 'block';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ModelDetailComponent.prototype, "position", {
                    get: function () {
                        return 'absolute';
                    },
                    enumerable: true,
                    configurable: true
                });
                ModelDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.data.forEach(function (data) {
                        _this.editName = data.model.name;
                        _this.model = data.model;
                    });
                };
                ModelDetailComponent.prototype.cancel = function () {
                    this.gotoCrises();
                };
                ModelDetailComponent.prototype.save = function () {
                    this.model.name = this.editName;
                    this.gotoCrises();
                };
                ModelDetailComponent.prototype.canDeactivate = function () {
                    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
                    if (!this.model || this.model.name === this.editName) {
                        return true;
                    }
                    // Otherwise ask the user with the dialog service and return its
                    // promise which resolves to true or false when the user decides
                    return this.dialogService.confirm('Discard changes?');
                };
                ModelDetailComponent.prototype.gotoCrises = function () {
                    var modelId = this.model ? this.model.id : null;
                    // Pass along the crisis id if available
                    // so that the CrisisListComponent can select that crisis.
                    // Add a totally useless `foo` parameter for kicks.
                    // Relative navigation back to the crises
                    this.router.navigate(['../', { id: modelId, foo: 'foo' }], { relativeTo: this.route });
                };
                __decorate([
                    core_1.HostBinding('@routeAnimation'), 
                    __metadata('design:type', Object)
                ], ModelDetailComponent.prototype, "routeAnimation", null);
                __decorate([
                    core_1.HostBinding('style.display'), 
                    __metadata('design:type', Object)
                ], ModelDetailComponent.prototype, "display", null);
                __decorate([
                    core_1.HostBinding('style.position'), 
                    __metadata('design:type', Object)
                ], ModelDetailComponent.prototype, "position", null);
                ModelDetailComponent = __decorate([
                    core_1.Component({
                        template: "\n  <div *ngIf=\"crisis\">\n    <h3>\"{{editName}}\"</h3>\n    <div>\n      <label>Id: </label>{{crisis.id}}</div>\n    <div>\n      <label>Name: </label>\n      <input [(ngModel)]=\"editName\" placeholder=\"name\"/>\n    </div>\n    <p>\n      <button (click)=\"save()\">Save</button>\n      <button (click)=\"cancel()\">Cancel</button>\n    </p>\n  </div>\n  ",
                        styles: ['input {width: 20em}'],
                        animations: [
                            core_1.trigger('routeAnimation', [
                                core_1.state('*', core_1.style({
                                    opacity: 1,
                                    transform: 'translateX(0)'
                                })),
                                core_1.transition('void => *', [
                                    core_1.style({
                                        opacity: 0,
                                        transform: 'translateX(-100%)'
                                    }),
                                    core_1.animate('0.2s ease-in')
                                ]),
                                core_1.transition('* => void', [
                                    core_1.animate('0.5s ease-out', core_1.style({
                                        opacity: 0,
                                        transform: 'translateY(100%)'
                                    }))
                                ])
                            ])
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, dialog_service_1.DialogService])
                ], ModelDetailComponent);
                return ModelDetailComponent;
            }());
            exports_1("ModelDetailComponent", ModelDetailComponent);
        }
    }
});

;
System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ModelHomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ModelHomeComponent = (function () {
                function ModelHomeComponent() {
                }
                ModelHomeComponent = __decorate([
                    core_1.Component({
                        template: "\n    <p>Welcome to the Crisis Center</p>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ModelHomeComponent);
                return ModelHomeComponent;
            }());
            exports_1("ModelHomeComponent", ModelHomeComponent);
        }
    }
});

;
System.register(['@angular/core', '@angular/router', './model.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, model_service_1;
    var ModelListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (model_service_1_1) {
                model_service_1 = model_service_1_1;
            }],
        execute: function() {
            ModelListComponent = (function () {
                function ModelListComponent(element, service, route, router) {
                    this.element = element;
                    this.service = service;
                    this.route = route;
                    this.router = router;
                }
                ModelListComponent.prototype.isSelected = function (model) {
                    return model.id === this.selectedId;
                };
                ModelListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        _this.selectedId = params['id'];
                        _this.service.getModels()
                            .then(function (models) { return _this.models = models; });
                    });
                    this.initCarousel();
                };
                ModelListComponent.prototype.onSelect = function (model) {
                    this.selectedId = model.id;
                    // Navigate with relative link
                    this.router.navigate([model.id], { relativeTo: this.route });
                };
                ModelListComponent.prototype.initCarousel = function () {
                    var $element = $(this.element.nativeElement);
                    $element.find('#carousel span').append('<img src="img/gui/carousel_glare.png" class="glare" />');
                    $element.find('#thumbs a').append('<img src="img/gui/carousel_glare_small.png" class="glare" />');
                    $element.find('#carousel').carouFredSel({
                        responsive: true,
                        circular: false,
                        auto: false,
                        items: {
                            visible: 1,
                            width: 200,
                            height: '56%'
                        },
                        scroll: {
                            fx: 'directscroll'
                        }
                    });
                    $element.find('#thumbs').carouFredSel({
                        responsive: true,
                        circular: false,
                        infinite: false,
                        auto: false,
                        prev: '#prev',
                        next: '#next',
                        items: {
                            visible: {
                                min: 2,
                                max: 6
                            },
                            width: 150,
                            height: '66%'
                        }
                    });
                    $element.find('#thumbs a').click(function (e) {
                        $element.find('#carousel').trigger('slideTo', '#' + e.target.href.split('#').pop());
                        $element.find('#thumbs a').removeClass('selected');
                        $(e.target).addClass('selected');
                        return false;
                    });
                };
                ModelListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'view/model-list.component.html'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, model_service_1.ModelService, router_1.ActivatedRoute, router_1.Router])
                ], ModelListComponent);
                return ModelListComponent;
            }());
            exports_1("ModelListComponent", ModelListComponent);
        }
    }
});

;
System.register(['@angular/core', '@angular/router', './model-home.component', './model-list.component', './model.component', './model-detail.component', '../can-deactivate-guard.service', './model-detail-resolve.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, model_home_component_1, model_list_component_1, model_component_1, model_detail_component_1, can_deactivate_guard_service_1, model_detail_resolve_service_1;
    var ModelRoutingModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (model_home_component_1_1) {
                model_home_component_1 = model_home_component_1_1;
            },
            function (model_list_component_1_1) {
                model_list_component_1 = model_list_component_1_1;
            },
            function (model_component_1_1) {
                model_component_1 = model_component_1_1;
            },
            function (model_detail_component_1_1) {
                model_detail_component_1 = model_detail_component_1_1;
            },
            function (can_deactivate_guard_service_1_1) {
                can_deactivate_guard_service_1 = can_deactivate_guard_service_1_1;
            },
            function (model_detail_resolve_service_1_1) {
                model_detail_resolve_service_1 = model_detail_resolve_service_1_1;
            }],
        execute: function() {
            ModelRoutingModule = (function () {
                function ModelRoutingModule() {
                }
                ModelRoutingModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            router_1.RouterModule.forChild([
                                {
                                    path: '',
                                    redirectTo: '/model',
                                    pathMatch: 'full'
                                },
                                {
                                    path: 'model',
                                    component: model_component_1.ModelComponent,
                                    children: [
                                        {
                                            path: '',
                                            component: model_list_component_1.ModelListComponent,
                                            children: [
                                                {
                                                    path: ':id',
                                                    component: model_detail_component_1.ModelDetailComponent,
                                                    canDeactivate: [can_deactivate_guard_service_1.CanDeactivateGuard],
                                                    resolve: {
                                                        crisis: model_detail_resolve_service_1.ModelDetailResolve
                                                    }
                                                },
                                                {
                                                    path: '',
                                                    component: model_home_component_1.ModelHomeComponent
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ])
                        ],
                        exports: [
                            router_1.RouterModule
                        ],
                        providers: [
                            model_detail_resolve_service_1.ModelDetailResolve
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ModelRoutingModule);
                return ModelRoutingModule;
            }());
            exports_1("ModelRoutingModule", ModelRoutingModule);
        }
    }
});

;
System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ModelComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ModelComponent = (function () {
                function ModelComponent() {
                }
                ModelComponent = __decorate([
                    core_1.Component({
                        template: "\n    <div class=\"container\">\n      <router-outlet></router-outlet>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ModelComponent);
                return ModelComponent;
            }());
            exports_1("ModelComponent", ModelComponent);
        }
    }
});

;
System.register(['@angular/core', '@angular/forms', '@angular/common', './model.service', './model.component', './model-list.component', './model-home.component', './model-detail.component', './model-routing.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, forms_1, common_1, model_service_1, model_component_1, model_list_component_1, model_home_component_1, model_detail_component_1, model_routing_module_1;
    var ModelModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (model_service_1_1) {
                model_service_1 = model_service_1_1;
            },
            function (model_component_1_1) {
                model_component_1 = model_component_1_1;
            },
            function (model_list_component_1_1) {
                model_list_component_1 = model_list_component_1_1;
            },
            function (model_home_component_1_1) {
                model_home_component_1 = model_home_component_1_1;
            },
            function (model_detail_component_1_1) {
                model_detail_component_1 = model_detail_component_1_1;
            },
            function (model_routing_module_1_1) {
                model_routing_module_1 = model_routing_module_1_1;
            }],
        execute: function() {
            ModelModule = (function () {
                function ModelModule() {
                }
                ModelModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_1.FormsModule,
                            model_routing_module_1.ModelRoutingModule
                        ],
                        declarations: [
                            model_component_1.ModelComponent,
                            model_list_component_1.ModelListComponent,
                            model_home_component_1.ModelHomeComponent,
                            model_detail_component_1.ModelDetailComponent
                        ],
                        providers: [
                            model_service_1.ModelService
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ModelModule);
                return ModelModule;
            }());
            exports_1("ModelModule", ModelModule);
        }
    }
});

;
System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Model, _MODELS, ModelPromise, ModelService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Model = (function () {
                function Model(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return Model;
            }());
            exports_1("Model", Model);
            _MODELS = [
                new Model(1, 'Dragon Burning Cities'),
                new Model(2, 'Sky Rains Great White Sharks'),
                new Model(3, 'Giant Asteroid Heading For Earth'),
                new Model(4, 'Procrastinators Meeting Delayed Again'),
            ];
            ModelPromise = Promise.resolve(_MODELS);
            ModelService = (function () {
                function ModelService() {
                }
                ModelService.prototype.getModels = function () { return ModelPromise; };
                ModelService.prototype.getModel = function (id) {
                    return ModelPromise
                        .then(function (models) { return models.find(function (model) { return model.id === +id; }); });
                };
                ModelService.prototype.addModel = function (name) {
                    name = name.trim();
                    if (name) {
                        var model_1 = new Model(ModelService.nextModelId++, name);
                        ModelPromise.then(function (models) { return models.push(model_1); });
                    }
                };
                ModelService.nextModelId = 100;
                ModelService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ModelService);
                return ModelService;
            }());
            exports_1("ModelService", ModelService);
        }
    }
});
