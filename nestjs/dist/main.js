"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = process.env.PORT || 4003;
    console.log('NESTjs server running at http://localhost:' + port);
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map