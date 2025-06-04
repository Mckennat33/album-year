const url = 'https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv';


// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }



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
        const json = await response.json()
        console.log(json)

    } catch(err) {
        console.log(err)
    }
}