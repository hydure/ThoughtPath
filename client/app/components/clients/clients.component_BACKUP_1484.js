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
var client_service_1 = require("../../services/client.service");
<<<<<<< HEAD
var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(clientService) {
=======
var therapist_service_1 = require("../../services/therapist.service");
var ClientsComponent = (function () {
    function ClientsComponent(clientService, therapistService) {
>>>>>>> dbd3f0240ef6a5443a49e849868ba0397d7cebb1
        this.clientService = clientService;
        this.therapistService = therapistService;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.therapistService.getTherapists()
            .subscribe(function (therapists) {
            _this.therapists = therapists;
        });
        this.clientService.getClients()
            .subscribe(function (clients) {
            _this.clients = clients;
        });
    };
    ;
    ClientsComponent.prototype.addClient = function (event) {
        var _this = this;
        event.preventDefault();
        var newClient = {
            name: this.name,
            password: this.password,
            hobby: this.hobby,
            age: this.age
        };
        this.clientService.addClient(newClient)
            .subscribe(function (client) {
            _this.clients.push(client);
            _this.name = '';
            _this.password = '';
            _this.hobby = '';
            _this.age = '';
        });
    };
    ClientsComponent.prototype.deleteClient = function (id) {
        var clients = this.clients;
        this.clientService.deleteClient(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < clients.length; i++) {
                    if (clients[i]._id == id) {
                        clients.splice(i, 1);
                    }
                }
            }
        });
    };
    ClientsComponent.prototype.updateStatus = function (client) {
        var _client = {
            _id: client._id,
            name: client.name,
            password: client.password,
            hobby: client.hobby,
            age: client.age
        };
        this.clientService.updateStatus(_client).subscribe(function (data) { });
    };
<<<<<<< HEAD
    ClientsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'clients',
            templateUrl: 'clients.component.html'
        }),
        __metadata("design:paramtypes", [client_service_1.ClientService])
    ], ClientsComponent);
    return ClientsComponent;
}());
=======
    ClientsComponent.prototype.generateTherapist = function (event) {
        event.preventDefault();
        var therapists = this.therapists;
        console.log(therapists);
        var i;
        var best = 0;
        var bestCandidate = therapists[0];
        console.log(bestCandidate);
        //error when 1 therapist or fewer
        for (i = 0; i < therapists.length; i++) {
            var score = 0;
            if (therapists[i].hobby == this.hobby) {
                score++;
            }
            if ((therapists[i].age - this.age) <= 10 && (therapists[i].age - this.age) > 0) {
                score++;
            }
            if (score > best) {
                best = score;
                bestCandidate = therapists[i];
            }
        }
        console.log(bestCandidate);
        return bestCandidate;
    };
    return ClientsComponent;
}());
ClientsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'clients',
        templateUrl: 'clients.component.html'
    }),
    __metadata("design:paramtypes", [client_service_1.ClientService, therapist_service_1.TherapistService])
], ClientsComponent);
>>>>>>> dbd3f0240ef6a5443a49e849868ba0397d7cebb1
exports.ClientsComponent = ClientsComponent;
//# sourceMappingURL=clients.component.js.map