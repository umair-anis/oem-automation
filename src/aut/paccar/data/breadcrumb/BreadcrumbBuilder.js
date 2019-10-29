'use strict'

let BreadcrumbBuilder = (() => {

    let breadcrumb = {
        crumbs: []
    }

    this.setCrumbs = (value = []) => {
        breadcrumb.crumbs = value
        return this
    }

    this.build = () => {
        if(breadcrumb.crumbs.length == 0) throw new Error(`BreadCrumbBuilder: Invalid crumbs`)
        return Object.freeze(breadcrumb)
    }

    return this
})

module.exports = {
    BreadcrumbBuilder
}