import { helperGetMonthDescription } from "../helpers/helpers";
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
        Rendimento total:{" "}
        <MoneyFormatter>{finalValue - initialValue}</MoneyFormatter> (
        <PercentageFormatter>{totalPercentage}</PercentageFormatter>)
      </h3>
      <ul>
        {reports.map((report) => {
          const { month, year, value, percentage } = report;

          const colorClass =
            percentage >= 0
              ? "text-green-900 font-semibold"
              : "text-red-900 font-semibold";

          return (
            <li
              className="flex flex-row items-center justify-start"
              key={report.id}
            >
              <span>
                {helperGetMonthDescription(month)}/{year}
              </span>
              <span className={`flex-1 ml-4 ${colorClass}`}>
                <MoneyFormatter ignoreColorValue>{value}</MoneyFormatter>
              </span>
              <span className={colorClass}>
                <PercentageFormatter>{percentage}</PercentageFormatter>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
