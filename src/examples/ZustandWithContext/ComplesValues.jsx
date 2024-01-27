import OgComplexValues from '../../components/ComplesValues';

import { useComposedValue } from './Store';
import {useStoreRenderCount} from "../../hooks/useLogRenders";

function ComplexValues() {
    const { unchanged, count } = useComposedValue();
    useStoreRenderCount('ZustandWithContext', 'ComplexValues');
    return (<OgComplexValues unchanged={unchanged} count={count} />);
}

export default ComplexValues;