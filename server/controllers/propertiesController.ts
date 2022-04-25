/* eslint-disable @typescript-eslint/no-explicit-any */
import generalConfig from '../config'
const wbEdit = require('wikibase-edit')(generalConfig)

export const addProperty = async (args: { [argName: string]: any; }) => {
    generalConfig.credentials = {
        username: args.username,
        password: args.password,
    }
    try {
        wbEdit.claim.create({
            id: args.id,
            property: args.property,
            value: args.value,
        }, generalConfig)
        return 'Success';
    } catch (e) {
        console.log(e)
        return 'Fail';
    }
}

export const updateProperty = async (args: { [argName: string]: any; }) => {
    generalConfig.credentials = {
        username: args.username,
        password: args.password,
    }
    generalConfig.anonymous = args.anonymous;
    try {
        wbEdit.claim.update({
            id: args.id,
            property: args.property,
            oldValue: args.oldValue,
            newValue: args.newValue,
        }, generalConfig)
        return 'Success';
    } catch (e) {
        console.log(e)
        return 'Fail';
    }
}