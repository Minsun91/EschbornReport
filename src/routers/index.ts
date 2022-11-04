import * as express from 'express';
const router = express.Router();

import { authRouter } from "./auth.router";
import { postRouter } from "./post.router";
// import { swaggerUi } from "swagger-ui-express";
// import { swaggerFile } from "../../swagger/swagger-output.json";

router.use('/auth', [authRouter]);
router.use('/post', [postRouter]);
// router.use('/swagger', [swaggerUi]);

export default router;