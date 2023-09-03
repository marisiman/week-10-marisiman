const { Router } = require('express');
const { createTransfer, getTransfer, updateTransfer, deleteTransfer, getTransferHistory } = require('../controller/transfer-control.js');
const { authorizationMiddleware } = require('../middleware/auth.js');

const transferRouter = Router();

transferRouter.post(
    '/', 
    authorizationMiddleware({ roles: ['maker', 'approver', 'admin'] }), 
    createTransfer);
transferRouter.get(
    '/', 
    authorizationMiddleware({ roles: ['maker', 'approver', 'admin'] }),
    getTransfer);

transferRouter.patch(
  "/:id",
  authorizationMiddleware(["approver", "admin"]),
  updateTransfer
);

transferRouter.delete(
  "/:id",
  authorizationMiddleware(["admin"]),
  deleteTransfer
);
transferRouter.get(
  "/history",
  authorizationMiddleware(["admin"]),
  getTransferHistory
);

module.exports = transferRouter;