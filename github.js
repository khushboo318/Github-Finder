class Github {
  constructor() {
    this.client_id = "a245ebce18e68a8cbddc";
    this.client_secret = "91c1ce3cfa1b0f8bceef130d573d63f343a02617";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    console.log(repos);

    return {
      profile,
      repos,
    };
  }
}
