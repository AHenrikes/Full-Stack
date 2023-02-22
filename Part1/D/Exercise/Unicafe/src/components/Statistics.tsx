
const StatisticLine = ({ text, value }) => (
    <tr className="grid gap-1">
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
  
    const Statistics = ({ good, neutral, bad}) => {
    const all = [good, neutral, bad].reduce((acc, curr) => acc + curr, 0)
    const average = (Math.round(good - bad) / all).toFixed(1)
    const positive = `${Math.round((good / all) * 100)}%`

    if(all === 0) {
        return (
            <p className="hidden">No feedbacks given</p>
        )

    } return (
        <div className="grid gap-10">
            <h2>STATS</h2>

            <table className="md:hidden">
                <tbody className="flex gap-5">
                    <StatisticLine text='good' value={good} />
                    <StatisticLine text='neutral' value={neutral} />
                    <StatisticLine text='bad' value={bad} />
                    <StatisticLine text='average' value={average} />
                    <StatisticLine text='positive' value={positive} />
                </tbody>
            </table>

            <table className="hidden md:grid">
                <tbody className="flex gap-5">
                    <StatisticLine text='Average' value={average} />
                    <StatisticLine text='Positive' value={positive} />
                </tbody>
            </table>
        </div>
    )
}

export default Statistics