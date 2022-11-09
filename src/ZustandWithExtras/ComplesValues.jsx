import { useComposedValue } from './Store';

function ComplexValues() {
    const { unchanged, count } = useComposedValue();
    return (
        <div>
        <p>Complex value:</p>
        <ul>
            <li>{unchanged}</li>
            <li>{count}</li>
        </ul>
        </div>
    );
}

export default ComplexValues;