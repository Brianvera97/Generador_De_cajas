
const boxStyle = (color, size = 200) => (
    {
        height: size,
        width: size,
        backgroundColor: color
    }
)

const BoxGenerator = ({color,size}) => {
    return (
        <div style={boxStyle(color,size)}/>

    )
}

export default BoxGenerator
