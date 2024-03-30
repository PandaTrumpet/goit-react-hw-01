import TransactionHistoryList from "../TransactionHistoryList/TransactionHistoryList";
import css from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr className={css.main}>
          <th className={css.mainTitle}>Type</th>
          <th className={css.mainTitle}>Amount</th>
          <th className={css.mainTitle}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {items.map((el) => (
          <tr className={css.listItem} key={el.id}>
            <TransactionHistoryList data={el} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
