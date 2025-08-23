
async function fetchProfileData(){
    const url = 'https://github.dev/czepurko/js-developer-portfolio-projeto-base/blob/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}