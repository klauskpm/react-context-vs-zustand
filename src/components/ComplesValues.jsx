import {useStoreRenderCount} from "../hooks/useLogRenders";

function ComplexValues({ unchanged, count }) {
    useStoreRenderCount('Components', 'ComplexValues');

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