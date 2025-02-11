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
exports.CreateProductArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
const product_supplier_input_1 = require("./product-supplier.input");
let CreateProductArgs = class CreateProductArgs {
};
exports.CreateProductArgs = CreateProductArgs;
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProductArgs.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductArgs.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", client_1.Prisma.Decimal)
], CreateProductArgs.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, {
        nullable: true
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateProductArgs.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProductArgs.prototype, "withholding", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateProductArgs.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_1.ID], {
        nullable: true,
        defaultValue: [],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateProductArgs.prototype, "charges", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_supplier_input_1.ProductSupplierInput], {
        nullable: true,
        defaultValue: [],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateProductArgs.prototype, "suppliers", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateProductArgs.prototype, "storeId", void 0);
exports.CreateProductArgs = CreateProductArgs = __decorate([
    (0, graphql_1.ArgsType)()
], CreateProductArgs);
//# sourceMappingURL=create-product.args.js.map