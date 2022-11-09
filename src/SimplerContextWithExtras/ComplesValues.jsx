import OgComplexValues from '../components/ComplesValues';

import { useComposedValue } from './Store';

function ComplexValues() {
    const { unchanged, count } = useComposedValue();
    return (<OgComplexValues unchanged={unchanged} count={count} />);
}

export default ComplexValues;