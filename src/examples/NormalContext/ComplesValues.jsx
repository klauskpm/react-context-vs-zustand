import OgComplexValues from '../../components/ComplesValues';

import { useContextState } from './Store';
import {useStoreRenderCount} from "../../hooks/useLogRenders";

function ComplexValues() {
    useStoreRenderCount('NormalContext', 'ComplexValues');
    const { unchanged, count } = useContextState().filters;
    return (<OgComplexValues unchanged={unchanged} count={count} />);
}

export default ComplexValues;