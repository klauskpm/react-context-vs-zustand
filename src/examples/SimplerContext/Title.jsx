import OgTitle from '../../components/Title';
import { useFilteredTitle } from './Store';
import {useStoreRenderCount} from "../../hooks/useLogRenders";

function Title() {
    const title = useFilteredTitle();
    useStoreRenderCount('SimplerContext', 'Title');

    return <OgTitle title={title} />;
}

export default Title;