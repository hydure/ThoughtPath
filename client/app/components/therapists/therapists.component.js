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
var therapist_service_1 = require("../../services/therapist.service");
var TherapistsComponent = (function () {
    function TherapistsComponent(therapistService) {
        this.therapistService = therapistService;
    }
    TherapistsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.therapistService.getTherapists()
            .subscribe(function (therapists) {
            _this.therapists = therapists;
        });
    };
    ;
    TherapistsComponent.prototype.addTherapist = function (event) {
        var _this = this;
        event.preventDefault();
        var newTherapist = {
            name: this.name,
            password: this.password,
            hobby: this.hobby,
            age: this.age
        };
        this.therapistService.addTherapist(newTherapist)
            .subscribe(function (therapist) {
            _this.therapists.push(therapist);
            _this.name = '';
            _this.password = '';
            _this.hobby = '';
            _this.age = '';
        });
    };
    TherapistsComponent.prototype.deleteTherapist = function (id) {
        var therapists = this.therapists;
        this.therapistService.deleteTherapist(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < therapists.length; i++) {
                    if (therapists[i]._id == id) {
                        therapists.splice(i, 1);
                    }
                }
            }
        });
    };
    TherapistsComponent.prototype.updateStatus = function (therapist) {
        var _therapist = {
            _id: therapist._id,
            name: therapist.name,
            password: therapist.password,
            hobby: therapist.hobby,
            age: therapist.age
        };
        this.therapistService.updateStatus(_therapist).subscribe(function (data) { });
    };
    return TherapistsComponent;
}());
TherapistsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'therapists',
        templateUrl: 'therapists.component.html'
    })
    // Gives us access to the Therapists in the html file
    ,
    __metadata("design:paramtypes", [therapist_service_1.TherapistService])
], TherapistsComponent);
exports.TherapistsComponent = TherapistsComponent;
//# sourceMappingURL=therapists.component.js.map