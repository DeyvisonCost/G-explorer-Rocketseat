const repositoryName = 'unform2'


function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>
                Lista de repositórios
            </h1>
            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in React</p>
                    <a href="">
                        Acessar repositórios
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default RepositoryList