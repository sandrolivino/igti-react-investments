import MoneyFormatter from "./MoneyFormatter";
import PercentageFormatter from "./PercentageFormatter";

export default function Investment({
  data: investmentData = "Dados do investimento",
}) {
  const { investment, reports } = investmentData;
  const { description, finalValue, initialValue, totalPercentage } = investment;

  return (
    <div className="border p-2 my-4">
      <h2 className="text-center font-semibold text-xl">{description}</h2>
      <h3 className="text-center font-semibold text-sm">
        Rendimento total: <MoneyFormatter>{finalValue - initialValue}</MoneyFormatter>
        {' '}(<PercentageFormatter>{totalPercentage}</PercentageFormatter>)
      </h3>
      <ul >
        {reports.map(report => {
          return <li className="flex flex-row items-center justify-between" key={report.id}>
            <span>data</span>
            <span>valor</span>
            <span>percentual</span>
          </li>
        })}
      </ul>
    </div>
  );
}
