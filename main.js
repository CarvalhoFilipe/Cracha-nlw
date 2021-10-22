const linksSocialMedia = {
  github: 'carvalhoFilipe',
  youtube: 'jakelinygracielly',
  facebook: 'maykbrito',
  instagram: 'jakeliny.gracielly',
  twitter: 'jakelinytec'
}

const changeSocialMediaLinks = () => {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com.br/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

const getGitHubProfilesInfos = () => {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userAvatar.src = `${data.avatar_url}`
      userLinkGitHub.href = `${data.html_url}`
      userLogin.textContent = data.login
    })
}
getGitHubProfilesInfos()
