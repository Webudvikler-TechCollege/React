// Både GET og POST i en funktion med variabler

export async function doFetch(url, type, data, key) {

    let method = type || 'GET'
    let body = data || null

    const options = {
        method : method,
        body : body
      }

    try {
      const response = await fetch(url, options)
      const data = await response.json()
      return data
    }
    catch (error) {
      console.log(error)
    }
  }

// Alternativ metode med to forskellige fetch funktioner
// Bruger authentication token som key

  export async function getAuthData(url, key) {

    const options = {
      method : 'GET',
      headers: {
        'Authorization': `Bearer ${key}`, 
      }, 
  }

    try {
      const response = await fetch(url, options)
      const data = await response.json()
      return data
    }
    catch (error) {
      console.log(error)
    }
  }

  export async function postAuthData(url, key, data) {

    const options = {
      method : 'POST',
      body : data,
      headers: {
        'Authorization': `Bearer ${key}`, 
      }, 
  }
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      return data
    }
    catch (error) {
      console.log(error)
    }
  }

  export async function deleteAuthData(url, key) {

    const options = {
      method : 'DELETE',
      headers: {
        'Authorization': `Bearer ${key}`, 
      }, 
  }
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      return data
    }
    catch (error) {
      console.log(error)
    }
  }