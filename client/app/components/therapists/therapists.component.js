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
            //console.log(therapists);
            console.log("asdsdhfsdfds");
        });
    };
    ;
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