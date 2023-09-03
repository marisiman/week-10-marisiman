const { createTransferRequest, getAllTransferRequest, updateTransferRequest, deleteTransferRequest } = require('../service/transfer-service.js')

const createTransfer = async (req, res, next) => {
  try {
    const { db, body } = req
    const response = await createTransferRequest({ db, ...body })
    res.status(201).json({ message: "Transfer request created", data: response })
  } catch (error) {
    next(error)
  }
}

const getTransfer = async (req, res, next) => {
  try {
    const { db } = req
    const transferRequests = await getAllTransferRequest({ db })
    res.status(200).json({ data: transferRequests })
  } catch (error) {
    next(error)
  }
}

const getTransferHistory = async (req, res, next) => {
  try {
    const { db, query } = req
    const transferRequests = await getAllTransferRequest({ db, query })
    res.status(200).json({ data: transferRequests })
  } catch (error) {
    next(error)
  }
}

const updateTransfer = async (req, res, next) => {
  try {
    const { db, params, body } = req
    await updateTransferRequest({ db, id: params.id, ...body })
    res.status(200).json({ message: "Transfer request updated" })
  } catch (error) {
    next(error)
  }
}

const deleteTransfer = async (req, res, next) => {
  try {
    const { db, params } = req
    await deleteTransferRequest({ db, id: params.id })
    res.status(200).json({ message: "Transfer request deleted" })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createTransfer,
  getTransfer,
  updateTransfer,
  deleteTransfer,
  getTransferHistory
}