
const albumApiKey = e300ea72cfe9f364f1f202d9f6e328a9

const URL = `http://www.last.fm/api/auth/?${albumApiKey}=xxx
`


const getAlbumYear = async () => {
    try {
        const response = await fetch(URL)
        if(!response.ok) {
            console.log(response.status)
        }
        const json = await response.json()
        console.log(json)

    } catch(err) {
        console.log(err)
    }
}