import { helperFormatPercentage } from "../helpers/helpers";

export default function PercentageFormatter({children = 99.66}){

    const classes  = children >= 0 ? "text-green-900" : "text-red-900";
    return <span className={classes}>{helperFormatPercentage(children)}</span>
}