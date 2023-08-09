const express = require('express');
const { isSignedIn, isAuthenticated, isAdmin } = require('../controller/auth');
const { addCompany, getAllCompanies, getCompany, getCompanyById, search, deleteCompany } = require('../controller/company');
const { addCompanyValidation, validate } = require('../controller/middleware');
const { param } = require('express-validator');
const router = express.Router();

router.param('companyId', getCompanyById);

// Get all company added by admin
router.get('/all', isSignedIn, isAuthenticated, isAdmin, getAllCompanies);

// Add company
router.post('/add',
    addCompanyValidation,
    validate,
    isSignedIn, isAuthenticated, isAdmin,
    addCompany
);

// search company
router.get('/search', isSignedIn, isAuthenticated, isAdmin, search);

// Get company by id
router.get('/:companyId',
    [param('companyId').isUUID()],
    isSignedIn, isAuthenticated, isAdmin,
    getCompany
);

module.exports = router;