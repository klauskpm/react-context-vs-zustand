import OgComplexValues from '../components/ComplesValues';

import { useContextState } from './Store';

function ComplexValues() {
    const { unchanged, count } = useContextState().filters;
    return (<OgComplexValues unchanged={unchanged} count={count} />);
}

export default ComplexValues;