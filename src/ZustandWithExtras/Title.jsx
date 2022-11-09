import OgTitle from '../components/Title';
import { useFilteredTitle } from './Store';

function Title() {
    const title = useFilteredTitle();

    return <OgTitle title={title} />;
}

export default Title;