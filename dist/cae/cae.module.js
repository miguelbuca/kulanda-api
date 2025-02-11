"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaeModule = void 0;
const common_1 = require("@nestjs/common");
const cae_service_1 = require("./cae.service");
const cae_resolver_1 = require("./cae.resolver");
const prisma_service_1 = require("../prisma/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const auth_service_1 = require("../auth/auth.service");
const sector_service_1 = require("../sector/sector.service");
let CaeModule = class CaeModule {
};
exports.CaeModule = CaeModule;
exports.CaeModule = CaeModule = __decorate([
    (0, common_1.Module)({
        imports: [jwt_1.JwtModule.register({})],
        providers: [
            cae_service_1.CaeService,
            cae_resolver_1.CaeResolver,
            prisma_service_1.PrismaService,
            auth_service_1.AuthService,
            sector_service_1.SectorService,
        ],
    })
], CaeModule);
//# sourceMappingURL=cae.module.js.map