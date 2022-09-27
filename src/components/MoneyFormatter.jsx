import { helperFormatMoney } from "../helpers/helpers";

export default function MoneyFormatter({
  children = 10_000.34,
  ignoreColorVAlue = false,
}) {
  const classes = ignoreColorVAlue
    ? ""
    : children >= 0
    ? "text-green-900"
    : "text-red-900";
  return <span className={classes}>{helperFormatMoney(children)}</span>;
}
