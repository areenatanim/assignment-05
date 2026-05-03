// for all item
// https://phi-lab-server.vercel.app/api/v1/lab/issues

const lodeData = () => {
        const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
        fetch(url)
                .then(rest => rest.json())
                .then(data => console.log(data.data))

}
lodeData()