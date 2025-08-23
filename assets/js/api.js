
async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/czepurko/js-developer-portfolio-projeto-base/refs/heads/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}

