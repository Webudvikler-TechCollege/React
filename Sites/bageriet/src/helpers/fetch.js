export async function doFetch(url, method = 'get', data = null) {

    const options = {
        method: method,
        body: data
    }

    try {
        const response = await fetch(url, options)
        const data = await response.json()
        return data
    }
    catch(error) {
        console.error(error);
    }
}

export async function getAuthData(url, key) {

    const options = {
        method: 'GET',
        headers: {
            'Authorization' : `Baerer ${key}`
        }
    }

    try {
        const response = await fetch(url, options)
        const data = await response.json()
        return data
    }
    catch(error) {
        console.error(error);
    }
}

export async function postAuthData(url, key, formdata) {

    console.log(formdata);

    const options = {
        method: 'POST',
        body: formdata,
        headers: {
            'Authorization' : `Baerer ${key}`
        }
    }

    try {
        const response = await fetch(url, options)
        const data = await response.json()
        return data
    }
    catch(error) {
        console.error(error);
    }
}

export async function deleteAuthData(url, key) {

    const options = {
        method: 'DELETE',
        headers: {
            'Authorization' : `Baerer ${key}`
        }
    }

    try {
        const response = await fetch(url, options)
        const data = await response.json()
        return data
    }
    catch(error) {
        console.error(error);
    }
}