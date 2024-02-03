import OgComplexValues from '../../components/ComplesValues';

import { useComposedValue } from './Store';
import {useStoreRenderCount} from "../../hooks/useStoreRenderCount";

function ComplexValues() {
    const { unchanged, count } = useComposedValue();
    useStoreRenderCount('ZustandWithExtras', 'ComplexValues');
    return (<OgComplexValues unchanged={unchanged} count={count} />);
}

export default ComplexValues;