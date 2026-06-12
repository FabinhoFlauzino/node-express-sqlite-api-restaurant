import { Router } from "express";
import { OrdersControllers } from "../controllers/orders-controller";

const ordersRoutes = Router();
const orderController = new OrdersControllers();

ordersRoutes.post("/", orderController.create);
ordersRoutes.get("/table-session/:table_session_id", orderController.index)
ordersRoutes.get("/table-session/:table_session_id/total", orderController.show)

export { ordersRoutes };
