import clsx from "clsx";
import css from "./TransactionHistoryList.module.css";
export default function TransactionHistoryList({
  data: { type, amount, currency },
}) {
  return (
    <>
      <td className={clsx(css.element, css.title)}>{type}</td>
      <td className={css.element}>{amount}</td>
      <td className={css.element}>{currency}</td>
    </>
  );
}
