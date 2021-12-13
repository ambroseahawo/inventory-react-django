export default class APIService {
    static async InsertItem(body){
        const resp = await fetch('http://127.0.0.1:8000/api/items/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        return await resp.json()
    }

    static async UpdateItem(itemId, body){
        const resp = await fetch(`http://127.0.0.1:8000/api/items/${itemId}/`, {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        return await resp.json()
    }

    static async DeleteItem(itemId) {

        return fetch(`http://127.0.0.1:8000/api/items/${itemId}/`, {
            'method': 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
}