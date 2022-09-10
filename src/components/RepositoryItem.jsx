export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Default Name'}</strong>
            <p>{props.repository?.description ?? 'Default Description'}</p>

            <a href={props.repository.link}>
                Acessar repositório
            </a>
        </li>
    );
}