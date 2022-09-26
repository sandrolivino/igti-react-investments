import { helperFormatMoney } from "../helpers/helpers";

export default function MoneyFormatter({children = 10_000.34}){

    const classes  = children >= 0 ? "text-green-900" : "text-red-900";
    return <span className={classes}>{helperFormatMoney(children)}</span>
}