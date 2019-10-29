'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')

/**
 * The UI elements present for Users and their information details
 * @returns UI Object
 */
let usersUI = (() => {

    // User Lock-Out
    const accountLocked = `Your account is locked`
    const reactivatedUser = `User was successfully reactivated`

    this.alertAccountLocked = buildElement(`alertAccountLocked`, `xpath`, `//span[contains(text(), "${accountLocked}")]`)
    this.promptReactivatedUser = buildElement(`promptReactivatedUser`, `xpath`, `//span[contains(text(), "${reactivatedUser}")]`)

    // Alerts
    const invalidEmail = `That is not a valid email. Please input a valid email.`
    const duplicateEmail = `Email address already in use`
    const invalidPassword = `Password must be a minimum of eight characters and must meet at least 3 of these requirements: contain uppercase letters, lowercase letters, numbers, and symbols`
    const invalidOrganizationName = `Error while editing user details`
    const invalidUserRole = `Error while editing user details`

    this.invalidEmailAlert = buildElement(`invalidEmailAlert`, `xpath`, `//ng-message[contains(text(), "${invalidEmail}")]`)
    this.duplicateEmailAlert = buildElement(`duplicateEmailAlert`, `xpath`, `//ng-message[contains(text(), "${duplicateEmail}")]`)
    this.invalidPasswordAlert = buildElement(`invalidPasswordAlert`, `xpath`, `//span[contains(text(), "${invalidPassword}")]`)
    this.invalidOrganizationNameAlert = buildElement(`invalidOrganizationNameAlert`, `xpath`, `//span[contains(text(), "${invalidOrganizationName}")]`)
    this.invalidUserRoleAlert = buildElement(`invalidUserRoleAlert`, `xpath`, `//span[contains(text(), "${invalidUserRole}")]`)

    // Tables
    this.table = buildElement(`table`, `xpath`, `//*[@id="user-list-table"]/md-card/list-table/md-table-container/table`)
    this.configureColumnsTable = buildElement(`configureColumnsTable`, `xpath`, `//*[@id="dialogContent_configure-columns-dialog"]/list-table/md-table-container/table`)
    this.subscribedCustomersTable = buildElement(`subscribedCustomersTable`, `xpath`, `//*[@id="editUserCustomerNotifications"]/list-table/md-table-container/table`)
    this.subscribedVehicleGroupsTable = buildElement(`subscribedVehicleGroupsTable`, `xpath`, `//*[@id="editUserVehicleGroupNotifications"]/list-table/md-table-container/table`)
    this.vehicleGroupsTable = buildElement(`vehicleGroupsTable`, `xpath`, `//*[@id="vehicle-group-list-table"]/md-card/list-table/md-table-container/table`)
    this.vehiclesTable = buildElement(`vehiclesTable`, `xpath`, `//*[@id="main-content"]/ui-view/vehicle-group-details/standard-card/div/md-card/md-card-content/ng-transclude/list-table/md-table-container/table`)

    // Filter
    this.tableFilter = buildElement(`tableFilter`, `xpath`, `//*[@id="user-list-table"]/md-card/list-toolbar/md-toolbar`)
    this.subscribedCustomersFilter = buildElement(`subscribedCustomersFilter`, `xpath`, `//edit-user-customer-notifications`)

    // TODO: Does not lock onto UI - Dynamically changing?
    this.subscribedVehicleGroupsFilter = buildElement(`subscribedVehicleGroupsFilter`, `xpath`, `//div[@ng-if="!$ctrl.userIsVGUser"]//*`)

    // Buttons
    this.buttonAddUser = buildElement(`buttonAddUser`, `css`, `[aria-label="add"]`)

    this.buttonMoreOptions = buildElement(`buttonMoreOptions`, `xpath`, `//*[@id="user-list-table"]/md-card/list-toolbar/md-toolbar/div/div/md-menu/button`)
        this.buttonExport = buildElement(`buttonExport`, `css`, `[ng-click="textButton.click($event, $ctrl)"]`)

    this.buttonCancelAddUser = buildElement(`buttonCancelAddUser`, `css`, `[ng-transclude][ng-if="!$ctrl.editingSelf"]`)
    this.buttonSaveAddUser = buildElement(`buttonSaveAddUser`, `css`, `[type="submit"]`)
    this.buttonEdit = buildElement(`buttonEdit`, `css`, `[aria-label="edit"]`)
    this.buttonTrash = buildElement(`buttonTrash`, `css`, `[aria-label="delete"]`)
    this.buttonConfirmDelete = buildElement(`buttonConfirmDelete`, `css`, `[ng-click="dialog.hide()"]`)

    // Configure Columns
    this.buttonResetColumns = buildElement(`buttonResetColumns`, `css`, `[aria-label="Reset"]`)
    this.buttonSaveColumns = buildElement(`buttonSaveColumns`, `css`, `[aria-label="save"]`)

    // Add User Form - Basic Information
    this.fieldEmail = buildElement(`fieldEmail`, `css`, `[name="email"]`)
    this.fieldFirstName = buildElement(`fieldFirstName`, `css`, `[name="firstName"]`)
    this.fieldLastName = buildElement(`fieldLastName`, `css`, `[name="lastName"]`)
    this.fieldPhone = buildElement(`fieldPhone`, `css`, `[name="phone"]`)
    this.fieldExtension = buildElement(`fieldExtension`, `css`, `[name="extension"]`)

    // Add User Form - Organization Information
    this.dropdownOrganizationType = buildElement(`dropdownOrganizationType`, `css`, `[ng-change="$ctrl.cleanOrg()"]`)

    this.fieldOrganizationName = buildElement(`fieldOrganizationName`, `css`, `[aria-label="Organization Name"]`)
    this.fieldUserRole = buildElement(`fieldUserRole`, `css`, `[aria-label="User Role"]`)
    this.userRoles = ['Anju_Admin_PFM', 'API Gateway VI User', 'Execute STP', 'newELTest', 'Pana', 'PeopleNet Admin'
                    , 'Peoplenet Login Test', 'user.userEditProfile.Peoplenet TSR1', 'user.userEditProfile.Peoplenet TSR2'
                    , 'Super Admin', 'user.userEditProfile.Super Admin - OTA 2', 'Super Admin - Trip Breadcrumb']

    // Add User Form - Preferences Information (All of the dropdowns have default selections)
    this.checkboxHideJoinAll = buildElement(`checkboxHideJoinAll`, `css`, `[aria-label="Hide Join-All Customers and Vehicles"]`)
    this.checkboxCollapseNavBar = buildElement(`checkboxCollapseNavBar`, `css`, `[aria-label="Always collapse navigation bar"]`)
    this.dropdownMapCenter = buildElement(`dropdownMapCenter`, `css`, `[aria-label="Preferred map center: United States"]`)
    this.dropdownLanguage = buildElement(`dropdownLanguage`, `css`, `[aria-label="Preferred language: English"]`)
    this.dropdownUnitOfMeasure = buildElement(`dropdownUnitOfMeasure`, `css`, `[aria-label="Preferred Units of Measure: US Customary"]`)
        this.dropdownUnitDistance = buildElement(`dropdownUnitDistance`, `css`, `[ng-model="$ctrl.distanceUnit"]`)
        this.dropdownUnitVolume = buildElement(`dropdownUnitVolume`, `css`, `[ng-model="$ctrl.volumeUnit"]`)
        this.dropdownUnitFuel = buildElement(`dropdownUnitFuel`, `css`, `[ng-model="$ctrl.fuelEconomyUnit"]`)
        this.dropdownUnitTemperature = buildElement(`dropdownUnitTemperature`, `css`, `[ng-model="$ctrl.temperatureUnit"]`)
        this.dropdownUnitPressure = buildElement(`dropdownUnitPressure`, `css`, `[ng-model="$ctrl.pressureUnit"]`)
        this.dropdownUnitMass = buildElement(`dropdownUnitMass`, `css`, `[ng-model="$ctrl.massUnit"]`)

    this.mapCenter = ['United States', 'Mexico', 'Canada']
    this.language = ['English', 'Spanish']
    this.measure = ['US Customary', 'International System']
    this.distance = ['Miles', 'Kilometers']
    this.volume = ['Gallons', 'Liters']
    this.fuel = ['Miles Per Gallon', 'Kilometers Per Liter']
    this.temperature = ['Degrees Fahrenheit', 'Degrees Celsius']
    this.pressure = ['Pounds Per Square Inch', 'Kilopascals']
    this.mass = ['Pounds', 'Kilograms']

    // Add User Form - Password Information
    this.fieldNewPassword = buildElement(`fieldNewPassword`, `css`, `[name="newPassword"]`)
    this.fieldConfirmPassword = buildElement(`fieldConfirmPassword`, `css`, `[name="confirmPassword"]`)

    // Add User Form - Status Information
    this.checkboxActive = buildElement(`checkboxActive`, `css`, `[aria-label="Active"]`)
    this.checkboxEmailVerified = buildElement(`checkboxEmailVerified`, `css`, `[aria-label="Email Not Verified"]`)
    
    // Edit User
    this.buttonProfileTab = buildElement(`buttonProfileTab`, `xpath`, `//md-tab-item[contains(text(),"Profile")]`)
    this.buttonSecurityTab = buildElement(`buttonSecurityTab`, `xpath`, `//md-tab-item[contains(text(),"Security")]`)
    this.buttonTagsTab = buildElement(`buttonTagsTab`, `xpath`, `//md-tab-item[contains(text(),"Tags")]`)
    this.buttonNotificationsTab = buildElement(`buttonNotificationsTab`, `xpath`, `//md-tab-item[contains(text(),"Notifications")]`)
    this.buttonVehicleGroupsTab = buildElement(`buttonVehicleGroupsTab`, `xpath`, `//md-tab-item[contains(text(),"Vehicle Groups")]`)

    // Edit User - Security
    this.buttonUnlock = buildElement(`buttonUnlock`, `css`, `[ng-click="$ctrl.reactivateUser()"]`)
    this.fieldChangeEmail = buildElement(`fieldChangeEmail`, `css`, `[name="email"]`)
    this.buttonChangeEmail = buildElement(`buttonChangeEmail`, `css`, `[type="submit"]`)

    this.fieldCurrentPassword = buildElement(`fieldCurrentPassword`, `css`, `[name="currentPassword"]`)
    this.buttonChangePassword = buildElement(`fieldCurrentPassword`, `xpath`, `//button[contains(text(), "Change Password")]`)
    
    // Edit User - Tags
    this.cardContent = buildElement(`cardContent`, `xpath`, `//*/user-edit-tags/standard-card/div/md-card/md-card-content/ng-transclude`)
    this.buttonAddTag = buildElement(`buttonAddTag`, `css`, `[ng-click="$ctrl.addingTag = true"]`)
    this.buttonSaveTag = buildElement(`buttonSaveTag`, `xpath`, `//form/button[2]`)
    this.fieldKey = buildElement(`fieldKey`, `css`, `[placeholder="Key"]`)
    this.fieldValue = buildElement(`fieldValue`, `css`, `[placeholder="Value"]`)

    // Edit User - Notifications
    this.emailNotificationsPath = buildElement(`emailNotificationsPath`, `xpath`, `//md-radio-group`)
    this.emailNotifications = [`Derate Active / Warning / Other`, 
                               `Derate Active / Warning`, 
                               `Derate Active`, 
                               `None`]

    this.buttonSubscribedCustomersTab = buildElement(`buttonSubscribedCustomersTab`, `xpath`, `//md-pagination-wrapper//md-tab-item[contains(text(), "Subscribed Customers")]`)
    this.buttonSubscribedVehicleGroupsTab = buildElement(`buttonSubscribedVehicleGroupsTab`, `xpath`, `//md-pagination-wrapper//md-tab-item[contains(text(), "Subscribed Vehicle Groups")]`)
    this.buttonUnsubscribeAll = buildElement(`buttonUnsubscribeAll`, `css`, `[ng-click="$ctrl.owner.unsubscribeFromAll()"]`)
    
    // Edit User - Vehicle Groups
    this.buttonAddVehicleGroup = buildElement(`buttonAddVehicleGroup`, `css`, `[aria-label="add"]`)
    this.fieldGroupName = buildElement(`fieldGroupName`, `css`, `[name="name"]`)
    this.fieldGroupDescription = buildElement(`fieldGroupDescription`, `css`, `[name="description"]`)
    this.buttonSaveVehicleGroup = buildElement(`buttonSaveVehicleGroup`, `css`, `[aria-label="save"]`)
    this.buttonDeleteGroup = buildElement(`buttonDeleteGroup`, `xpath`, `//div[@aria-hidden="false"]//button[contains(text(), "Delete Group")]`)
    this.buttonManageGroup = buildElement(`buttonManageGroup`, `xpath`, `//div[@aria-hidden="false"]//button[contains(text(), "Manage Group")]`)
        this.buttonEditVehicleGroup = buildElement(`buttonEditVehicleGroup`, `css`, `[aria-label="Edit Group Details"]`)
        this.buttonMoreOptionsVehicleGroup = buildElement(`buttonMoreOptionsVehicleGroup`, `css`, `[aria-label="Open more menu"]`)
            this.buttonMoreOptionsDeleteGroup = buildElement(`buttonMoreOptionsDeleteGroup`, `css`, `[ng-click="$ctrl.confirmDeleteGroup()"]`)
            this.buttonMoreOptionsSubscribe = buildElement(`buttonMoreOptionsSubscribe`, `css`, `[ng-click="$ctrl.subscribe()"]`)

        this.buttonRefresh = buildElement(`buttonRefresh`, `css`, `[ng-click="$ctrl.refresh()"]`)
        this.buttonAddVehicle = buildElement(`buttonAddVehicle`, `css`, `[aria-label="add"]`)
        this.fieldVin = buildElement(`buttonAddVehicle`, `css`, `[name="vinsString"]`)
        this.buttonAdd = buildElement(`buttonAdd`, `css`, `[aria-label="Add"]`)
    
    return this
})

module.exports = {
    usersUI
}