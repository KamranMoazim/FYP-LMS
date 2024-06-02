import express from "express";
import { authorizeRoles, isAutheticated } from "../middleware/auth";
import { getNotifications, updateNotification } from "../controllers/notification.controller";
const notificationRoute = express.Router();

notificationRoute.get(
  "/get-all-notifications",
  isAutheticated,
  authorizeRoles("admin", "super-admin"),
  getNotifications
);
notificationRoute.put("/update-notification/:id", isAutheticated, authorizeRoles("admin", "super-admin"), updateNotification);

export default notificationRoute;
