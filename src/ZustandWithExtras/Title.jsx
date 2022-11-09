import { useFilteredTitle } from './Store';

function Title() {
    const title = useFilteredTitle();

    return <p>Filtered title: {title}</p>;
}

export default Title;