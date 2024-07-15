const Indicator = ({title, number, description, color, bg}) => {
    return (
        <div className={`p-4 ${bg} rounded-md flex-1`}>
            <h3 className="text-lg font-medium text-[#161E54]">{title}</h3>
            <h2 className="text-4xl font-medium text-[#161E54]">{number}</h2>
            <span className={`${color}`}>{description}</span>
        </div>
    )
}

export default Indicator;