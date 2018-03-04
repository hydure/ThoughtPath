"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LoginComponent = (function () {
    function LoginComponent(clientService) {
        this.clientService = clientService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    ;
    LoginComponent.prototype.addClient = function (event) {
        var _this = this;
        event.preventDefault();
        var newClient = {
            name: this.name
        };
        this.clientService.addClient(newClient)
            .subscribe(function (client) {
            _this.clients.push(client);
            _this.name = '';
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'logins',
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=logins.component.js.map