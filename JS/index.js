document.addEventListener('DOMContentLoaded', function() {

    const URL = 'https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv';

// 3IBcauSj5M2A6lTeffJzdv
    
    const getAlbumYear = async () => {
    try {
        const response = await fetch(URL, {
            method: 'GET', 
            headers: {
                'x-rapidapi-key': 'de51889a1fmshe095099b1a97993p13134fjsnc818ad7373cb',
                'x-rapidapi-host': 'spotify23.p.rapidapi.com'
            }
        }
    )
    
    if(!response.ok) {
            console.log(response.status)
        }
        const jsonAlbumData = await response.json()
        console.log(jsonAlbumData.albums[0])

    } catch(err) {
        console.log(err)
    }
}

getAlbumYear()
})