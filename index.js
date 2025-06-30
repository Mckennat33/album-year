
const albumApiKey = e300ea72cfe9f364f1f202d9f6e328a9

const URL = `http://www.last.fm/api/auth/?${albumApiKey}=xxx
`


const getAlbumYear = async () => {

    try {
        const response = await fetch(URL)
        if(!response.ok) {
            console.log(response.status)
        }
        const albumData = await response.json()
        console.log(json)
        displayAlbumData(albumData)

    } catch(err) {
        console.log(err)
    }
}

// intitial function to get album data

function displayAlbumData(data) {
    console.log(data)

    // Data get retreived daily at midnight and fetches each album that came out that year and that data. 
    // Diplays Artist name, Album name, Track list?. what year and date it came out.
}