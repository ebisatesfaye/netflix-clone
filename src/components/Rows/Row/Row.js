const Row = ({title,fetchUrl, isLargeRow}) => {
    const [movies,setMovie] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");

    const base_url = "https://"

    useEffect(() => {
        (async () => {
            try {
                console.log(fetchUrl)
                const request = await axios.get(`https:`)
                console.log(request);
                setMovie(request.data.results);

            }catch (error){
                console.log("error",error);
            }
        })()
    },[fetchUrl]);
    const handleClick = (movie) => {
    if (trailerUrl){
        setTrailerUrl('')
    }else{
        movieTrailer(movie?.title || movie?.name || movie?.original_name);
        .then((url) => {
            console.log(url)
            const urlParams = new URLSearchParams(new URL(url).search)
            console.log(urlParams.get('v'))
            setTrailerUrl(urlParams.get('v'));
        })
    }
    }

    const opts = {
        height : '390',
        width:'100%',
        playerVars:{
            autoplay: 1,
        },
    }

    return (
        
    )
}