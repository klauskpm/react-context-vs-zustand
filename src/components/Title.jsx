import {useStoreRenderCount} from "../hooks/useStoreRenderCount";
import {borderStyle} from "../styles/border";

function Title({ title }) {
    useStoreRenderCount('Components', 'Title');

    return <p style={borderStyle}>Filtered title: {title}</p>;
}

export default Title;