const MONTH_DESCRIPTION = [
  "",
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
];

const moneyFormatter = Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

export function helperFormatMoney(value) {
  return moneyFormatter.format(value);
}

export function helperFormatPercentage(value) {
  const prefix = value >= 0 ? "+" : "";
  return prefix + value.toFixed(2) + "%";
}

export function helperGetMonthDescription(value) {
  return MONTH_DESCRIPTION[value];
}
