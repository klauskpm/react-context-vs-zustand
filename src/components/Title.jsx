import {useStoreRenderCount} from "../hooks/useLogRenders";

function Title({ title }) {
    useStoreRenderCount('Components', 'Title');

    return <p>Filtered title: {title}</p>;
}

export default Title;