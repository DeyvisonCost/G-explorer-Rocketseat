

export function RepositoryItemm(props){
    return(
        <li>
         <strong>{props.repository.name ?? 'default'}</strong>
            <p>{props.repository.description}</p>
             <a href={props.repository.link}>
             Acessar repositórios
            </a>
        </li>
    )
}