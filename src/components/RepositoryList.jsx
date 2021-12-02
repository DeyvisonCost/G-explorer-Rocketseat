import {RepositoryItemm} from "./RepositoryItemm"

const repo = {
                name:'testando?' ,
                description:'Forms in React' ,
                link:'https://github.com' 
}


function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>
                Lista de repositórios
            </h1>
            <ul>
                <RepositoryItemm repository={repo} />
                <RepositoryItemm repository={repo} />
                <RepositoryItemm repository={repo} />
                <RepositoryItemm repository={repo} />
            </ul>
        </section>
    )
}

export default RepositoryList