export const showValue = (value: string | number | null | undefined) => {
    if (value) {
        return value
    } else {
        return '-'
    }
}


export const showListValue = (value: Array<any> | null, sep: string = ", ") => {
    if (value) {
        return value.join(sep)
    } else {
        return '-'
    }
}

export const showGtdsValue = (value: Array<String> | null, sep: string = ", ") => {
    if (!value) {
        return "-"
    }

    const dictResult: { [id: string]: number[]; } = {};

    for (const gtd of value) {
        let key = gtd.split("(")[0]
        let value = parseInt(gtd.split("(")[1].replace(")", ""))

        if (dictResult[key] === undefined) {
            dictResult[key] = [value]
        } else {
            dictResult[key].push(value)
        }
    }

    let result = [];

    for (let [key, value] of Object.entries(dictResult)) {
        result.push(`${key}(${value.join(",")})`)
    }

    return result.join(sep)
}

export const presentFromBefore = (range: [number | null, number | null] | null) => {
    if (!range) {
        return "-"
    } else if (range[0] && range[1]) {
        return `от ${range[0]} до ${range[1]} мм`
    } else if (!range[0] && range[1]) {
        return `до ${range[1]} мм`
    } else if (range[0] && !range[1]) {
        return `от ${range[0]} мм`
    } else {
        return "-"
    }
}

export function isKleymo(value: string) {
    const pattern = new RegExp('^[0-9A-Z]{4}$')

    return pattern.test(value)
}

export function isPersonalNaksCertification(value: string) {
    const pattern = new RegExp('^[А-Я]+-[0-9А-Я]+-[IV]+-[0-9]{5}$')

    return pattern.test(value)
}

export const processInputOnEmpty = (value: any) => {
    if (value) {
        return value
    } else {
        return undefined
    }
}

export function nullToUndefined<T>(value: T | null): T | undefined{
    if (value == null){
        return undefined
    }

    return value
}

export function undefinedToNull<T>(value: T | undefined): T | null{
    if (value == undefined){
        return null
    }

    return value
}
