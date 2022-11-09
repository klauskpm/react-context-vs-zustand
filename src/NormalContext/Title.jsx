import OgTitle from '../components/Title';
import { useContextState } from './Store';

function Title() {
    const state = useContextState();

    return <OgTitle title={state.filters.title} />;
}

export default Title;