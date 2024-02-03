import OgTitle from '../../components/Title';
import { useContextState } from './Store';
import {useStoreRenderCount} from "../../hooks/useStoreRenderCount";

function Title() {
    useStoreRenderCount('NormalContext', 'Title');
    const state = useContextState();

    return <OgTitle title={state.filters.title} />;
}

export default Title;