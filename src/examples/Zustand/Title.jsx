import OgTitle from '../../components/Title';
import { useFilteredTitle } from './Store';
import {useStoreRenderCount} from "../../hooks/useStoreRenderCount";

function Title() {
    const title = useFilteredTitle();
    useStoreRenderCount('Zustand', 'Title');

    return <OgTitle title={title} />;
}

export default Title;